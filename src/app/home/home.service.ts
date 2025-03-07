import { Injectable } from '@angular/core';
import { Home } from './home.model';

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
      '2025-03-05',
      'assets/images/sk.jpeg'
    ),
    new Home(
      'p2',
      'Mane kane',
      221770361728,
      -3000,
      '2025-03-02',
      'assets/images/sk.jpeg'
    ),
    new Home(
      'p3',
      'Modou Fall',
      221770361728,
      -2000,
      '2025-03-01',
      'assets/images/sk.jpeg'
    ),
    new Home(
      'p4',
      'Codou mbaye',
      221770361728,
      4000,
      '2025-03-03',
      'assets/images/sk.jpeg'
    ),
  ];

  constructor() {}

  get homepayments() {
    return [...this._homepayments];
  }
  getHomeDetail(id: string) {
    return { ...this._homepayments.find((p) => p.id === id) };
  }
}
