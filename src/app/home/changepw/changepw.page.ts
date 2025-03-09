import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {
  AlertController,
  LoadingController,
  ModalController,
} from '@ionic/angular';

@Component({
  selector: 'app-changepw',
  templateUrl: './changepw.page.html',
  styleUrls: ['./changepw.page.scss'],
  standalone: false,
})
export class ChangepwPage implements OnInit {
  isLoading = false;
  type: boolean = true;
  constructor(
    private route: Router,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}
  changeType() {
    this.type = !this.type;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
  }

  onChange() {
    this.isLoading = true;
    this.loadingCtrl
      .create({
        keyboardClose: true,
        message: 'Se Déconnecter...',
      })
      .then((logingEl) => {
        logingEl.present();

        setTimeout(() => {
          logingEl.dismiss();
          this.isLoading = false;
          this.route.navigateByUrl('homeclient');
        }, 1500);
      });
  }
  public alertButtons = [
    {
      role: 'cancel', // Assure que l'alerte est simplement fermée si "No" est cliqué
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Oui',
      handler: () => this.onChange(), // Déclenche la déconnexion si "Yes" est cliqué
      cssClass: 'alert-button-confirm',
    },
  ];
  onChangePWD() {
    this.isLoading = true;
    this.loadingCtrl
      .create({
        keyboardClose: true,
        message: 'Modification...',
      })
      .then((elLoading) => {
        elLoading.present();
        setTimeout(() => {
          this.isLoading = false;
          elLoading.dismiss();
          this.alertCtrl
            .create({
              header: 'Félicitations',
              message:
                'Modification effectuée avec succes. Merci de votre confiance.',
              buttons: [
                {
                  text: "Retour á l'accueil",
                  handler: () => {
                    this.route.navigate(['/', 'home', 'tabs', 'homeclient']);
                  },
                },
              ],
            })
            .then((elDiss) => elDiss.present());
        }, 1500);
      });
  }
  cancel() {
    this.route.navigate(['/home/tabs/homeclient']);
  }
}
