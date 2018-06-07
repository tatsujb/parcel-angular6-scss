import { Component } from '@angular/core';
const fs = require('fs');

@Component({
  selector: 'app-dashboard-component',
  template: `${fs.readFileSync(__dirname + '/dashboard.component.html')}`,
  styles: [`${fs.readFileSync(__dirname + '/dashboard.component.css')}`]
})
export class DashboardComponent {}
