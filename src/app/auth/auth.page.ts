import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: false,
})
export class AuthPage implements OnInit {
  isLoading = false;
  isLogin = true;
  type: boolean = true;
  constructor(
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  changeType() {
    this.type = !this.type;
  }

  // onLogIn() {
  //   this.authService.logIn();
  //   this.router.navigateByUrl('/home/tabs/homeclient');
  // }
  // onLogOut() {
  //   this.authService.logOut();
  // }

  onLonIn() {
    this.authService.logIn();
    this.isLoading = true;
    this.loadingCtrl
      .create({
        keyboardClose: true,
        message: 'Se connecter...',
      })
      .then((logingEl) => {
        logingEl.present();

        setTimeout(() => {
          logingEl.dismiss();
          this.isLoading = false;
          this.navCtrl.navigateRoot(['/', 'home', 'tabs', 'homeclient']);
        }, 1500);
      });
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.numTel;
    const password = form.value.password;
    console.log(email, password);
    if (this.isLogin) {
      // Send a request to the login servers
    } else {
      // Send a request to the signup servers
    }
  }
}
