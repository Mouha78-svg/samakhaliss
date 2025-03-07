import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HomeService } from '../home.service';
import { Home } from '../home.model';

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
  constructor(
    private menuCtrl: MenuController,
    private homeservice: HomeService
  ) {}

  openMenu() {
    this.menuCtrl.toggle();
  }
  changeType() {
    this.type = !this.type;
  }
  ngOnInit() {
    this.loadHomePayments = this.homeservice.homepayments;
    this.transactions = [
      { id: 1, to: 'Magatt fall seye', date: '2025-03-04', amount: 5000 },
      { id: 2, to: 'Amy Gaye', date: '2025-03-04', amount: -3000 },
      { id: 3, to: 'Samba Kane', date: '2025-03-04', amount: 2000 },
      { id: 4, to: 'Rokaya MBoup', date: '2025-03-04', amount: -3500 },
      { id: 5, to: 'Mane Kane', date: '2025-03-04', amount: 1000 },
    ];
  }
}
