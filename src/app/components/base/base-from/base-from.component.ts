// Imports
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-base-from',
  template: `
    <form *ngIf="cmpFormvalue">
      <h2 class="title is-size-4">{{cmpFormvalue.title}}</h2>

      <!-- Angular DOM loop: *ngFor -->
      <fieldset 
        class="mb-4"
        *ngFor="let item; let idx = index of cmpFormvalue.fieldsets"
      >
        <label 
          class="label"
          [innerText]="item.label"
          [for]="'item-' + idx"
        ></label>
        
        <input 
          class="input"
          [type]="item.type" 
          [min]="item.min"
          [required]="item.required"
          [name]="'item-' + idx"
          [id]="'item-' + idx"
        >
      </fieldset>

      <!-- Display child component -->
      <app-base-call-to-action
        [cmpItem]="cmpButton"
      ></app-base-call-to-action>
    </form>
  `,
  styles: [
  ]
})
export class BaseFromComponent implements OnInit {

  // Bind value from parent component
  @Input() cmpFormvalue: any

  // Define static properties
  public cmpButton: any;

  constructor() {}

  private initForm(){
    this.cmpButton = {
      type: 'submit',
      content: this.cmpFormvalue.submit,
      isfull: true,
      isprimary: true,
    }
  }

  /* 
    [HOOK] Angular
    Call when compoenent if init (eq. DOMContentLoaded)
  */
    ngOnInit(): void {
      this.initForm()
    }
  //
}
