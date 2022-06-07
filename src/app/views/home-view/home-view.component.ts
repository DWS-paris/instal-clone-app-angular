import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  template: `
    <p>
      home-view works!
    </p>

    <!-- Define login form -->
    <app-base-from></app-base-from>

    <!-- Define register form -->
    <app-base-from></app-base-from>
  `,
  styles: [
  ]
})
export class HomeViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
