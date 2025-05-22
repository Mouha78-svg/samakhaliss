import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.page.html',
  styleUrls: ['./payment-card.page.scss'],
  standalone: false,
})
export class PaymentCardPage implements OnInit {
  cardNumber: string = '4567123498765432';
  cardHolderName: string = 'Mouhamed SEYE';
  expiryMonth: string = '12';
  expiryYear: string = '27';
  cvv: string = '123';
  isCardFlipped: boolean = false;

  flipCard(flip: boolean) {
    this.isCardFlipped = flip;
  }
  constructor() {}

  ngOnInit() {}
}
