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
import { Route, Router } from '@angular/router';

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

  constructor(
    private menuCtrl: MenuController,
    private homeservice: HomeService
  ) {
    // this.transactionBalance = this.transactionService.getBalance;
  }
  // transaction

  showbalance() {}

  totalSoldClient() {
    return this.loadHomePayments[0].soldTotal.reduce((x, y) => x + y, 0);
  }

  openMenu() {
    this.menuCtrl.toggle();
  }
  changeType() {
    this.type = !this.type;
  }
  ngOnInit() {
    this.gettransactions = this.homeservice.gettransactions();
    this.loadHomePayments = this.homeservice.homepayments;
    this.transactions = [
      { id: 1, to: 'Magatt fall seye', date: '2025-03-04', amount: 5000 },
      { id: 2, to: 'Amy Gaye', date: '2025-03-04', amount: -3000 },
      { id: 3, to: 'Samba Kane', date: '2025-03-04', amount: 2000 },
      { id: 4, to: 'Rokaya MBoup', date: '2025-03-04', amount: -3500 },
      { id: 5, to: 'Mane Kane', date: '2025-03-04', amount: 1000 },
    ];
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
