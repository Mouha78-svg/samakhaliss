import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from '../home.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paycredit',
  templateUrl: './paycredit.page.html',
  styleUrls: ['./paycredit.page.scss'],
  standalone: false,
})
export class PaycreditPage implements OnInit {
  @ViewChild('f', { static: true }) form: NgForm;

  currentDate;
  typeDepot;
  constructor(private homeservice: HomeService, private router: Router) {}

  ngOnInit() {
    this.currentDate = new Date().toISOString();
    this.typeDepot = 'Crédit';
  }
  onValidedSubmit() {
    if (!this.form.valid) {
      return;
    }
  }
  onValidatedDepot() {
    if (!this.form.valid) {
      return;
    }

    this.homeservice.addretraitR(
      this.form.value['depot'],
      this.form.value['tel'],
      +this.form.value['amount'],
      new Date(this.form.value['newdate'])
    );
    this.form.reset();
    this.router.navigate(['/home/tabs/homeclient']);

    console.log(
      this.form.value['depot'],
      this.form.value['tel'],
      this.form.value['amount'],
      this.form.value['newdate']
    );
  }
}
