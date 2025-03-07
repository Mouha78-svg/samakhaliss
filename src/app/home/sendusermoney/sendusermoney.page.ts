import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-sendusermoney',
  templateUrl: './sendusermoney.page.html',
  styleUrls: ['./sendusermoney.page.scss'],
  standalone: false,
})
export class SendusermoneyPage implements OnInit {
  currentDate;
  form: FormGroup;
  constructor() {
    this.currentDate = new Date().toISOString();
  }

  ngOnInit() {
    this.form = new FormGroup({
      fullName: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      tel: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(13)],
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)],
      }),
      date: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
    });
  }

  onCreatePayment() {
    console.log(this.form);
  }
  onPay() {}
}
