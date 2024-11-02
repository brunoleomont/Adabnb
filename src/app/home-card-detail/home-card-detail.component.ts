import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { House } from '../models/house';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-card-detail',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home-card-detail.component.html',
  styleUrl: './home-card-detail.component.css'
})
export class HomeCardDetailComponent {

  baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  applyForm!: FormGroup;

  housingLocation!: House;

  id!: Number;

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.housingLocation = this.houses.find(house => house.id === this.id) as House;
    this.applyForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('')
    });
  }

  houses: House[] = [{
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
  }];

  submitApplication() {
    alert(JSON.stringify(this.applyForm.value));
  }

  clearForm() {
    // this.applyForm.reset();
    this.applyForm.setValue({
      firstName: '',
      lastName: '',
      email: ''
    });
  }
}
