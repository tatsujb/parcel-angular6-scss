import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  template: `
    <p>
      items works!
    </p>
  `,
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
