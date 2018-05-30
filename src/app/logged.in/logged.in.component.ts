import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loggedin',
  template: `
    <p>
      loggedin works!
      <a [routerLink]="['purchaseorders']">purchase orders</a>
      <a [routerLink]="['items']">items</a>
    </p>
    <app-routing></app-routing>
  `,
  styleUrls: ['./logged.in.component.scss']
})
export class LoggedInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}