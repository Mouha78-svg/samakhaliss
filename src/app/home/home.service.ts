import { Injectable } from '@angular/core';
import { Home } from './home.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private _homepayments: Home[] = [
    new Home(
      'p1',
      'Mouhamed SEYE',
      221770361728,
      5000,
      new Date('2025-03-05'),
      'assets/images/sk.jpeg',
      'abc'
    ),
    new Home(
      'p2',
      'Mane kane',
      221770361728,
      -3000,
      new Date('2025-03-05'),
      'assets/images/sk.jpeg',
      'abc'
    ),
    new Home(
      'p4',
      'Codou mbaye',
      221770361728,
      4000,
      new Date('2025-03-05'),
      'assets/images/sk.jpeg',
      'abc'
    ),
  ];

  constructor(private authservice: AuthService) {}

  get homepayments() {
    return [...this._homepayments];
  }
  getHomeDetail(id: string) {
    return { ...this._homepayments.find((p) => p.id === id) };
  }
  addPay(fullName: string, tel: number, price: number, date: Date) {
    const newPay = new Home(
      Math.random().toString(),
      fullName,
      tel,
      price,
      date,
      '/assets/images/sk.jpeg',
      this.authservice.userId
    );
    this._homepayments.push(newPay);
  }
}
