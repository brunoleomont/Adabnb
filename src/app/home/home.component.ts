import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  items = [
    {value: "home works!"},
    {value: "home works!"},
    {value: "home works!"},
    {value: "home works!"},
    {value: "home works!"},
    {value: "home works!"},
    {value: "home works!"},
    {value: "home works!"},
  ];
}
