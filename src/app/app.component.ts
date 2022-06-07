/* 
  [IMPORTS] Angular
  Set main module to define compoenent
*/
  import { Component, OnInit } from '@angular/core';
//

/* 
  [CTRL] Definition
  Set component controller
*/
  @Component({
    selector: 'app-root',
    template: `
      <app-header-app></app-header-app>

      <main>

        <!-- Use the 'router-outlet' directive to display route component -->
        <router-outlet></router-outlet>
      </main>

      <app-footer-app></app-footer-app>
    `,
    styles: [
    ]
  })

  export class AppComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

  }
//