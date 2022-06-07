import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snapshoot-view',
  template: `
    <p>
    snapshoot-view works!
    </p>

    <app-base-image></app-base-image>
  `,
  styles: [
  ]
})
export class SnapshootViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
