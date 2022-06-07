import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapshootViewComponent } from './snapshoot-view.component';

describe('SnapshootViewComponent', () => {
  let component: SnapshootViewComponent;
  let fixture: ComponentFixture<SnapshootViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnapshootViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapshootViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
