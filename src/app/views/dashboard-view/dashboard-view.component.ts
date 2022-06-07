import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-view',
  template: `
    <p>
      dashboard-view works!
    </p>

    <app-base-image></app-base-image>
  `,
  styles: [
  ]
})
export class DashboardViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
