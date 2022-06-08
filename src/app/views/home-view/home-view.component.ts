import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  template: `
    <section class="section" *ngIf="cmpStep">
      <article class="box">
        <!-- Display child component -->
        <app-base-from
          class="mb-2"
          [cmpFormvalue]="cmpStep === 'login' ? cmpLoginFrom : cmpRegisterFrom"
        >
        </app-base-from>

        <!-- Display child component -->
        <app-base-call-to-action
          [cmpItem]="cmpButton"
          (onClick)="setFormValue($event)"
        ></app-base-call-to-action>
      </article>
    </section>
  `,
  styles: [`
    app-base-from{ display: block }
  `]
})
export class HomeViewComponent implements OnInit {

  // Define static properties
  public cmpRegisterFrom: Object;
  public cmpLoginFrom: Object;
  public cmpStep: String;
  public cmpButton: Object;

  // Add value in static properties
  constructor() { 
    this.cmpLoginFrom = {
      title: `Connect to your account`,
      submit: `Login`,
      fieldsets: [
        {
          label: `Email`,
          type: `email`,
          required: true,
          min: 5,
        },
        {
          label: `Password`,
          type: `password`,
          required: true,
          min: 5,
        }
      ]
    }

    this.cmpRegisterFrom = {
      title: `Create your account`,
      submit: `Register`,
      fieldsets: [
          {
          label: `Name`,
          type: `text`,
          required: true,
          min: 2,
          },
          {
          label: `Email`,
          type: `email`,
          required: true,
          min: 5,
          },
          {
          label: `Password`,
          type: `password`,
          required: true,
          min: 5,
          },
          {
          label: `Repeate password`,
          type: `password`,
          required: true,
          min: 5,
          }
      ]
    }
  }
  
  // Set method to define form value
  public setFormValue( event: String ){
    // Define componenet step
    this.cmpStep = event;

    // Define button content
    this.cmpButton = {
      type: `button`,
      content: 
        event === 'login'
        ? `Don't have an account? Create one now.`
        : `Got an account? Go to login.`,
      isfull: false,
      isprimary: false,
      action: this.cmpStep === 'login' ? 'register' : 'login'
    }
  }

  // Call when component is init
  ngOnInit(): void {
    this.setFormValue('login')
  }

}
