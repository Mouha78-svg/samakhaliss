import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Home } from '../../home.model';
import { NavController } from '@ionic/angular';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.page.html',
  styleUrls: ['./home-detail.page.scss'],
  standalone: false,
})
export class HomeDetailPage implements OnInit {
  detailTransaction: Home;
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private homeservice: HomeService
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
}
