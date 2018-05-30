import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing',
  template: `
    <p>
      routing works!
    </p>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
