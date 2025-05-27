import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sendusermoney',
  templateUrl: './sendusermoney.page.html',
  styleUrls: ['./sendusermoney.page.scss'],
  standalone: false,
})
export class SendusermoneyPage implements OnInit {
  @ViewChild('f', { static: true }) form: NgForm;

  currentDate;
  typeDepot;

  constructor(private homeservice: HomeService, private router: Router) {}

  // dateNow() {
  //   const newDate = new Date(this.form.value['date']);
  //   // console.log(newDate);

  //   return newDate;
  // }

  ngOnInit() {
    this.currentDate = new Date().toISOString();
    this.typeDepot = '';
    // this.currentDate = new Date().toISOString();
    // this.form = new FormGroup({
    //   fullName: new FormControl(null, {
    //     updateOn: 'blur',
    //     validators: [Validators.required],
    //   }),
    //   tel: new FormControl(null, {
    //     updateOn: 'blur',
    //     validators: [Validators.required, Validators.maxLength(13)],
    //   }),
    //   price: new FormControl(null, {
    //     updateOn: 'blur',
    //     validators: [Validators.required, Validators.min(1)],
    //   }),
    //   newDate: new FormControl(null, {
    //     updateOn: 'blur',
    //     validators: [Validators.required],
    //   }),
    // });
  }

  onSendPAY() {}

  onValidedSubmit() {
    if (!this.form.valid) {
      return;
    }
  }
  onValidatedDepot() {
    if (!this.form.valid) {
      return;
    }

    this.homeservice.addRetrait(
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

  // onCreatePayment() {
  //   if (!this.form.valid) {
  //     return;
  //   }

  //   this.homeservice.addRetrait(
  //     this.form.value['fullName'],
  //     this.form.value['tel'],
  //     +this.form.value['price'],
  //     new Date(this.form.value.newDate)
  //   );
  //   this.form.reset();
  //   this.router.navigate(['/home/tabs/homeclient']);
  //   console.log(this.form);
  //   // console.log(
  //   //   'payer',
  //   //   this.form.value['fullName'],
  //   //   this.form.value['tel'],
  //   //   +this.form.value['price'],
  //   //   new Date(this.form.value.newDate)
  //   // );
  // }
}
