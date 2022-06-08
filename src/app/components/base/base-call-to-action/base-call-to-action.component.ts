// Imports
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-base-call-to-action',
  template: `
    <button 
      class="button"
      
      [ngClass]="{
        'is-primary': cmpItem.isprimary,
        'is-fullwidth': cmpItem.isfull,
        'is-small': !cmpItem.isfull
      }"
      [type]="cmpItem.type"
      [innerText]="cmpItem.content"

      (click)="onClick.emit(cmpItem.action)"
    ></button>
  `,
  styles: [
  ]
})
export class BaseCallToActionComponent implements OnInit {

  // Bind value from parent component
  @Input() cmpItem: any

  // Generate event
  @Output() onClick: EventEmitter<String> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
