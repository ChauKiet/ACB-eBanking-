import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideAcbComponent } from './outside-acb.component';

describe('OutsideAcbComponent', () => {
  let component: OutsideAcbComponent;
  let fixture: ComponentFixture<OutsideAcbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsideAcbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsideAcbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
