// Imports
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-base-from',
  template: `
    <form 
      *ngIf="cmpFormvalue"
      
    >
      <h2 class="title is-size-4">{{cmpFormvalue.title}}</h2>

      <!-- Angular DOM loop: *ngFor -->
      <fieldset 
        class="mb-4"
        *ngFor="let item; let idx = index of cmpFormvalue.fieldsets"
      >
        <label 
          class="label"
          [innerText]="item.label"
          [for]="'item-' +item.name + '-' + idx"
        ></label>
        
        <input 
          class="input"
          [type]="item.type" 
          [min]="item.min"
          [required]="item.required"
          [name]="item.name"
          [id]="'item-' +item.name + '-' + idx"
          [(ngModel)]="item.value"
        >
      </fieldset>

      <!-- Display child component -->
      <app-base-call-to-action
        [cmpItem]="cmpButton"
        (onClick)="computeFormValue(cmpFormvalue.fieldsets)"
      ></app-base-call-to-action>
    </form>
  `,
  styles: [
  ]
})
export class BaseFromComponent implements OnInit {

  // Bind value from parent component
  @Input() cmpFormvalue: any;
  @Output() onSubmit: EventEmitter<Object> = new EventEmitter()

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

  public computeFormValue(fieldsets: Array<any>){
    // Extarct form value
    let returnedObject = {};

    // Get each form fieldset
    for( let item of fieldsets ){
      returnedObject[item.name] = item.value
    }

    // Return computed value
    this.onSubmit.emit( returnedObject );
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
