import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Home } from '../../home.model';
import { AlertController, NavController } from '@ionic/angular';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.page.html',
  styleUrls: ['./home-detail.page.scss'],
  standalone: false,
})
export class HomeDetailPage implements OnInit {
  detailTransaction: Home | any;
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private homeservice: HomeService,
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('homeId')) {
        this.navCtrl.navigateBack('home');
        return;
      }
      this.detailTransaction = this.homeservice.getHomeDetail(
        paramMap.get('homeId')
      );
    });
  }

  ondeleteDetailTran() {
    this.alertCtrl
      .create({
        header: 'Voulez vous le supprimer',
        message: 'Vraiment vous le voulait',
        buttons: [
          {
            text: 'cancel',
            role: 'cancel',
          },
          {
            text: 'Supprimer',
            handler: () => {
              this.homeservice.deleteTransactionDetail(
                this.detailTransaction.id
              );
              this.router.navigateByUrl('/home/tabs/homeclient');
            },
          },
        ],
      })
      .then((elDiss) => elDiss.present());
  }
}
