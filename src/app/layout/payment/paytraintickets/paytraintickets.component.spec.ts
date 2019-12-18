import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaytrainticketsComponent } from './paytraintickets.component';

describe('PaytrainticketsComponent', () => {
  let component: PaytrainticketsComponent;
  let fixture: ComponentFixture<PaytrainticketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaytrainticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaytrainticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
