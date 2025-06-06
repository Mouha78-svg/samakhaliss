import { Injectable } from '@angular/core';
import { Home } from './home.model';
import { AuthService } from '../auth/auth.service';
import {
  AlertController,
  LoadingController,
  ToastController,
} from '@ionic/angular';

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
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) {}
  private _homepayments: Home[] = [
    new Home(
      'p1',
      'Mouhamed SEYE',
      221770361728,
      5000,
      new Date('2025-03-05'),
      'assets/images/sk.jpeg',
      'abc',
      [5000, 3000]
    ),
    new Home(
      'p1',
      'ourmar kane',
      221780351734,
      3000,
      new Date('2025-04-02'),
      'assets/images/sk.jpeg',
      'abc',
      []
    ),
  ];

  deleteTransactionDetail(transactionID: string) {
    this._homepayments = this._homepayments.filter((detailId) => {
      return detailId.id !== transactionID;
    });
  }

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

  private calculateFraisSurRetait(montantDepotBrut: number): number {
    if (montantDepotBrut <= 0) return 0; // Pas de frais pour montant nul ou négatif (déjà géré par le constructeur de Base)

    // Barème de frais (Exemple)
    if (montantDepotBrut <= 10000) {
      // Jusqu'à 10 000 CFA
      return -100; // Frais fixes de 100 CFA
    } else if (montantDepotBrut <= 50000) {
      // De 10 001 à 50 000 CFA
      return -250; // Frais fixes de 250 CFA
    } else if (montantDepotBrut <= 1000) {
      return -10;
    } else if (montantDepotBrut <= 100000) {
      // De 50 001 à 100 000 CFA
      return -500; // Frais fixes de 500 CFA
    } else {
      // Au-delà de 100 000 CFA
      return Math.round(montantDepotBrut * 0.01); // 1% du montant, arrondi
    }
    // Vous pouvez ajuster ce barème selon vos besoins.
  }

  private calculateFraisSurDepot(montantDepotBrut: number): number {
    if (montantDepotBrut <= 0) return 0; // Pas de frais pour montant nul ou négatif (déjà géré par le constructeur de Base)

    // Barème de frais (Exemple)
    if (montantDepotBrut <= 10000) {
      // Jusqu'à 10 000 CFA
      return 100; // Frais fixes de 100 CFA
    } else if (montantDepotBrut <= 50000) {
      // De 10 001 à 50 000 CFA
      return 250; // Frais fixes de 250 CFA
    } else if (montantDepotBrut <= 100000) {
      // De 50 001 à 100 000 CFA
      return 500; // Frais fixes de 500 CFA
    } else {
      // Au-delà de 100 000 CFA
      return Math.round(montantDepotBrut * 0.01); // 1% du montant, arrondi
    }
    // Vous pouvez ajuster ce barème selon vos besoins.
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

  addDepot(fullName: string, tel: number, price: number, newDate: Date) {
    const newPay = new Home(
      Math.random().toString(),
      fullName,
      tel,
      price,
      newDate,
      'assets/images/sk.jpeg',
      this.authservice.userId,
      this.homepayments[0].soldTotal
    );
    if (!price || price <= 0) {
      this.afficherAlerte(
        'Erreur Retrait',
        'Le montant du retrait doit être positif.'
      );
    } else {
      this._homepayments.push(newPay);
      this.afficherToast(`Opération de ${price} CFA effectué.`);
      this.homepayments[0].soldTotal.push(price);
    }
  }
  addretraitR(fullName: string, tel: number, price: number, newDate: Date) {
    const soldTotal = +this.homepayments[0].soldTotal.reduce(
      (x, y) => x + y,
      0
    );
    const newPay = new Home(
      Math.random().toString(),
      fullName,
      tel,
      price,
      newDate,
      'assets/images/sk.jpeg',
      this.authservice.userId,
      this.homepayments[0].soldTotal
    );
    if (!price || price <= 0) {
      this.afficherAlerte(
        'Erreur Retrait',
        'Le montant du retrait doit être positif.'
      );
    } else if (price > soldTotal) {
      this.afficherAlerte(
        'Solde Insuffisant',
        'Vous ne disposez pas des fonds nécessaires pour effectuer ce retrait.'
      );
    } else {
      this._homepayments.push(newPay);
      this.afficherToast(`Opération de ${price} CFA effectué.`);
      this.homepayments[0].soldTotal.push(-price);
    }
  }

  addPayement(fullName: string, tel: number, price: number, newDate: Date) {
    const newPay = new Home(
      Math.random().toString(),
      fullName,
      tel,
      price,
      newDate,
      'assets/images/sk.jpeg',
      this.authservice.userId,
      this.homepayments[0].soldTotal
    );
    if (!price || price <= 0) {
      this.afficherAlerte(
        'Erreur Retrait',
        'Le montant du retrait doit être positif.'
      );
    } else {
      this._homepayments.push(newPay);
      this.afficherToast(`Opération de ${price} CFA effectué.`);
      this.homepayments[0].soldTotal.push(
        price + this.calculateFraisSurDepot(price)
      );
    }
  }
  addRetrait(fullName: string, tel: number, price: number, newDate: Date) {
    const soldTotal = +this.homepayments[0].soldTotal.reduce(
      (x, y) => x + y,
      0
    );
    const newPay = new Home(
      Math.random().toString(),
      fullName,
      tel,
      price,
      newDate,
      'assets/images/sk.jpeg',
      this.authservice.userId,
      this.homepayments[0].soldTotal
    );
    if (!price || price <= 0) {
      this.afficherAlerte(
        'Erreur Retrait',
        'Le montant du retrait doit être positif.'
      );
    } else if (price > soldTotal) {
      this.afficherAlerte(
        'Solde Insuffisant',
        'Vous ne disposez pas des fonds nécessaires pour effectuer ce retrait.'
      );
    } else {
      this.afficherToast(`Opération de ${price} CFA effectué.`);
      this.homepayments[0].soldTotal.push(
        -price + this.calculateFraisSurRetait(price)
      );
      // this.homepayments[0].soldTotal.push(-price);
      this._homepayments.push(newPay);
    }
  }
}
