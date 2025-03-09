import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  isLoading = false;
  constructor(
    private loadingCtrl: LoadingController,
    private route: Router,
    private authService: AuthService
  ) {}

  onLogOut() {
    this.authService.logOut();
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
          this.route.navigateByUrl('/auth');
        }, 1500);
      });
  }
  public alertButtons = [
    {
      text: 'Non',
      role: 'cancel', // Assure que l'alerte est simplement fermée si "No" est cliqué
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Oui',
      handler: () => this.onLogOut(), // Déclenche la déconnexion si "Yes" est cliqué
      cssClass: 'alert-button-confirm',
    },
  ];
}
