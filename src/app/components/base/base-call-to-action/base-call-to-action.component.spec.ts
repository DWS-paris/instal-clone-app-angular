import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCallToActionComponent } from './base-call-to-action.component';

describe('BaseCallToActionComponent', () => {
  let component: BaseCallToActionComponent;
  let fixture: ComponentFixture<BaseCallToActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseCallToActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCallToActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
