import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sendusermoney',
  templateUrl: './sendusermoney.page.html',
  styleUrls: ['./sendusermoney.page.scss'],
  standalone: false,
})
export class SendusermoneyPage implements OnInit {
  currentDate;
  form!: FormGroup;

  constructor(private homeservice: HomeService, private router: Router) {}
  // this.currentDate = new Date().toISOString();

  dateNow() {
    const newDate = new Date(this.form.value['date']);
    // console.log(newDate);

    return newDate;
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
    if (!this.form.valid) {
      return;
    }
    this.homeservice.addPay(
      this.form.value.fullName,
      this.form.value.tel,
      +this.form.value.price,
      new Date(this.form.value.date)
    );
    this.form.reset();
    this.router.navigate(['/home/tabs/homeclient']);
    console.log(this.form);
  }
}
