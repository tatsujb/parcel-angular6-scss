import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-four.o.four',
  template: `
    <div class="root four-o-four">
      <h1>404</h1>
    </div>
  `,
  styles: [`
    h1{
      text-align: center;
      color: white;
      font-size: 6em;
    }
  `]
})
export class FourOFour implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
