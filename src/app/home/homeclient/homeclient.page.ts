import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  IonItemSliding,
  MenuController,
  ToastController,
} from '@ionic/angular';
import { HomeService } from '../home.service';
import { Home } from '../home.model';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';

interface Transaction {
  type: 'depot' | 'retrait';
  montant: number;
  date: Date;
  description?: string;
}

@Component({
  selector: 'app-homeclient',
  templateUrl: './homeclient.page.html',
  styleUrls: ['./homeclient.page.scss'],
  standalone: false,
})
export class HomeclientPage implements OnInit {
  type: boolean = true;
  loadHomePayments: Home[];
  transactions: any[] = [];
  gettransactions;
  selectImage: any;

  // soldePrincipal;

  // Solde principal de l'utilisateur
  public soldePrincipal: number = 5000; // Solde initial pour l'exemple

  // Variables pour les formulaires Ionic (liées avec [(ngModel)])
  public montantNouvelleTransaction: number;
  public descriptionNouvelleTransaction: string = '';

  constructor(
    private menuCtrl: MenuController,
    private homeservice: HomeService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {
    // this.transactionBalance = this.transactionService.getBalance;
  }
  // transaction

  showbalance() {}

  openMenu() {
    this.menuCtrl.toggle();
  }
  changeType() {
    this.type = !this.type;
  }
  ngOnInit() {
    this.gettransactions = this.homeservice.gettransactions();
    this.soldePrincipal = this.homeservice.getSoldePricipal();
    this.loadHomePayments = this.homeservice.homepayments;
    this.transactions = [
      { id: 1, to: 'Magatt fall seye', date: '2025-03-04', amount: 5000 },
      { id: 2, to: 'Amy Gaye', date: '2025-03-04', amount: -3000 },
      { id: 3, to: 'Samba Kane', date: '2025-03-04', amount: 2000 },
      { id: 4, to: 'Rokaya MBoup', date: '2025-03-04', amount: -3500 },
      { id: 5, to: 'Mane Kane', date: '2025-03-04', amount: 1000 },
    ];
  }
  // test transactions
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

  checkPlatForfroWeb() {
    if (Capacitor.getPlatform() == 'web') return true;
    return false;
  }
  async getPhoto() {
    const status = await Camera.requestPermissions();
    const image = await Camera.getPhoto({
      quality: 90,
      // allowEditing: true,
      source: CameraSource.Prompt,
      width: 600,
      resultType: CameraResultType.Uri,
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    // var imageUrl = image.webPath;
    this.selectImage = image.webPath;
    console.log(' ' + image);

    // Can be set to the src of an image now
    // imageElement.src = imageUrl;
  }
  onDeletePay(payuser: string, slingEL: IonItemSliding) {
    slingEL.close();
  }
}
