import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from '../home.service';
import { AlertController, ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Home } from '../home.model';

interface Transaction {
  type: 'depot' | 'retrait';
  montant: number;
  date: Date;
  description?: string;
}

@Component({
  selector: 'app-depot',
  templateUrl: './depot.page.html',
  styleUrls: ['./depot.page.scss'],
  standalone: false,
})
export class DepotPage implements OnInit {
  selectedMontantNT;
  selectedDescNT;
  // Solde principal de l'utilisateur
  public soldePrincipal: number = 1000; // Solde initial pour l'exemple

  // Historique des transactions
  public transactions: Transaction[] = [];

  // Variables pour les formulaires Ionic (liées avec [(ngModel)])
  public montantNouvelleTransaction: number;
  public descriptionNouvelleTransaction: string = '';

  @ViewChild('f', { static: true }) form: NgForm;

  loadedPrice: Home[];

  currentDate;
  typeDepot;
  totalprice: number;

  constructor(
    private transactionService: HomeService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private homeservice: HomeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadedPrice = this.homeservice.homepayments;
    this.currentDate = new Date().toISOString();
    this.typeDepot = 'Dépot';
  }

  onValidatedDepot() {
    if (!this.form.valid) {
      return;
    }

    //  this.totalprice = +this.loadedPrice[0].soldTotal.push(
    //   this.form.value['amount']
    // );

    this.homeservice.addPayement(
      this.form.value['depot'],
      this.form.value['tel'],
      +this.form.value['amount'],
      new Date(this.form.value['newdate'])
    );
    this.form.reset();
    this.router.navigate(['/home/tabs/homeclient']);

    console.log(
      this.form.value['depot'],
      this.form.value['tel'],
      this.form.value['amount'],
      this.form.value['newdate']
    );
  }

  onValidedSubmit() {
    if (!this.form.valid) {
      return;
    }

    // depot: this.form.value['depot'],
    // tel: this.form.value['tel'],
    // amount: this.form.value['amount'],
    // newdate: this.form.value['newdate'],

    // console.log(valueData)
    console.log(this.form);
  }

  async effectuerDepot(montant: number, description?: string): Promise<void> {
    if (!montant || montant <= 0) {
      this.afficherAlerte(
        'Erreur Dépôt',
        'Le montant du dépôt doit être positif.'
      );
      return;
    }

    this.soldePrincipal += montant;
    const nouvelleTransaction: Transaction = {
      type: 'depot',
      montant: montant,
      date: new Date(),
      description: description,
    };
    this.transactions.push(nouvelleTransaction);
    this.afficherToast(
      `Dépôt de ${montant} CFA effectué. Nouveau solde: ${this.soldePrincipal} CFA`
    );
    this.reinitialiserFormulaire();
  }

  async effectuerRetrait(montant: number, description?: string): Promise<void> {
    if (!montant || montant <= 0) {
      this.afficherAlerte(
        'Erreur Retrait',
        'Le montant du retrait doit être positif.'
      );
      return;
    }

    if (montant > this.soldePrincipal) {
      this.afficherAlerte(
        'Solde Insuffisant',
        'Vous ne disposez pas des fonds nécessaires pour effectuer ce retrait.'
      );
      return;
    }

    this.soldePrincipal -= montant;
    const nouvelleTransaction: Transaction = {
      type: 'retrait',
      montant: montant, // On stocke le montant positif du retrait
      date: new Date(),
      description: description,
    };
    this.transactions.push(nouvelleTransaction);
    this.afficherToast(
      `Retrait de ${montant} CFA effectué. Nouveau solde: ${this.soldePrincipal} CFA`
    );
    this.reinitialiserFormulaire();
  }

  // Méthodes utilitaires pour l'interface utilisateur Ionic
  private async afficherAlerte(titre: string, message: string): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: titre,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  private async afficherToast(message: string): Promise<void> {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom',
    });
    await toast.present();
  }

  private reinitialiserFormulaire(): void {
    this.montantNouvelleTransaction = null; // ou 0 selon votre préférence
    this.descriptionNouvelleTransaction = '';
  }

  public calculerSoldeDepuisHistorique(
    soldeInitial: number,
    historique: Transaction[]
  ): number {
    let soldeCalcule = soldeInitial;
    for (const tx of historique) {
      if (tx.type === 'depot') {
        soldeCalcule += tx.montant;
      } else if (tx.type === 'retrait') {
        soldeCalcule -= tx.montant;
      }
    }
    // Le `this.soldePrincipal` est déjà la source de vérité pour l'affichage.
    // Cette méthode montre que le solde est bien la somme de l'initial et des transactions.
    console.log(
      `Vérification: Solde recalculé à partir de l'historique (avec solde initial ${soldeInitial}): ${soldeCalcule}`
    );
    return soldeCalcule;
  }
}
