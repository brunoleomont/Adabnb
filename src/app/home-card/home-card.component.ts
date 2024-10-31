import { Component, Input } from '@angular/core';
import { House } from '../models/house';

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css'
})
export class HomeCardComponent {
  @Input() housingLocation!: House;
}
