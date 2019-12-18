import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayairticketComponent } from './payairticket.component';

describe('PayairticketComponent', () => {
  let component: PayairticketComponent;
  let fixture: ComponentFixture<PayairticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayairticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayairticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
