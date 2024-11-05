import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { House } from '../models/house';
import { HomeCardComponent } from "../home-card/home-card.component";
import { HouseService } from '../house.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, HomeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  houses!: House[];
  houseService = inject(HouseService);

  ngOnInit() {
    this.houses = this.houseService.getAll();
  }

}
