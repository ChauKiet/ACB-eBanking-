import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsComponent } from './ins.component';

describe('InsComponent', () => {
  let component: InsComponent;
  let fixture: ComponentFixture<InsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
