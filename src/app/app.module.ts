/* 
  [IMPORTS] Angular
  Import modules to define app.module
*/
  // Angular modules
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';

  // App modules
  import { AppComponent } from './app.component';
  import { HomeViewComponent } from './views/home-view/home-view.component';
  import { DashboardViewComponent } from './views/dashboard-view/dashboard-view.component';
  import { SnapshootViewComponent } from './views/snapshoot-view/snapshoot-view.component';
  import { HeaderAppComponent } from './components/main/header-app/header-app.component';
  import { FooterAppComponent } from './components/main/footer-app/footer-app.component';
  import { BaseFromComponent } from './components/base/base-from/base-from.component';
  import { BaseCallToActionComponent } from './components/base/base-call-to-action/base-call-to-action.component';
  import { BaseImageComponent } from './components/base/base-image/base-image.component';

  // Router modules
  import { RouterModule } from '@angular/router';
  import { AppRouterModule } from './app.router';
//

/* 
  [APP] Module
  Define App main functionalities
*/
  @NgModule({
    declarations: [
      AppComponent,
      HomeViewComponent,
      DashboardViewComponent,
      SnapshootViewComponent,
      HeaderAppComponent,
      FooterAppComponent,
      BaseFromComponent,
      BaseCallToActionComponent,
      BaseImageComponent
    ],
    imports: [
      BrowserModule,

      // Inject AppRouterModule
      RouterModule.forRoot( AppRouterModule, { onSameUrlNavigation: 'reload' } ),
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  
  export class AppModule { }
//