import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InAcbComponent } from './in-acb.component';

describe('InAcbComponent', () => {
  let component: InAcbComponent;
  let fixture: ComponentFixture<InAcbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InAcbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InAcbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
