import { Injectable } from '@angular/core';
import { Home } from './home.model';
import { AuthService } from '../auth/auth.service';
import { AlertController, ToastController } from '@ionic/angular';

interface Transaction {
  type: 'depot' | 'retrait';
  montant: number;
  date: Date;
  description?: string;
}

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  // Solde principal de l'utilisateur
  public soldePrincipal: number = 4000; // Solde initial pour l'exemple

  // Historique des transactions
  public transactions: Transaction[] = [];

  // Variables pour les formulaires Ionic (liées avec [(ngModel)])
  public montantNouvelleTransaction: number;
  public descriptionNouvelleTransaction: string = '';

  constructor(
    private authservice: AuthService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {}
  private _homepayments: Home[] = [
    new Home(
      'p1',
      'Mouhamed SEYE',
      221770361728,
      5000,
      new Date('2025-03-05'),
      'assets/images/sk.jpeg',
      'abc'
    ),
    new Home(
      'p2',
      'ourmar kane',
      221780351734,
      3000,
      new Date('2025-04-02'),
      'assets/images/sk.jpeg',
      'abc'
    ),
  ];
  getSoldePricipal() {
    return this.soldePrincipal;
  }
  getmontantNouvelleTransaction() {
    return this.montantNouvelleTransaction;
  }
  getdescriptionNouvelleTransaction() {
    return this.descriptionNouvelleTransaction;
  }
  gettransactions() {
    return this.transactions;
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

  // new Home(
  //   'p2',
  //   'Mane kane',
  //   221770361728,
  //   -3000,
  //   new Date('2025-03-05'),
  //   'assets/images/sk.jpeg',
  //   'abc'
  // ),
  // new Home(
  //   'p4',
  //   'Codou mbaye',
  //   221770361728,
  //   4000,
  //   new Date('2025-03-05'),
  //   'assets/images/sk.jpeg',
  //   'abc'
  // ),

  get homepayments() {
    return [...this._homepayments];
  }
  getHomeDetail(id: string) {
    return { ...this._homepayments.find((p) => p.id === id) };
  }

  addPayement(fullName: string, tel: number, price: number, newDate: Date) {
    const newPay = new Home(
      Math.random().toString(),
      fullName,
      tel,
      price,
      newDate,
      'assets/images/sk.jpeg',
      this.authservice.userId
    );
    this._homepayments.push(newPay);
  }
}
