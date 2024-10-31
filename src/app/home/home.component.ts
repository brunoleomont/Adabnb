import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { House } from '../models/house';
import { HomeCardComponent } from "../home-card/home-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, HomeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  houses: House[] = [
    {
      id: 1,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`
    },
    {
      id: 2,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`
    },
    {
      id: 3,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`
    }
  ]

}
