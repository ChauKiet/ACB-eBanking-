import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvfeeComponent } from './tvfee.component';

describe('TvfeeComponent', () => {
  let component: TvfeeComponent;
  let fixture: ComponentFixture<TvfeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvfeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvfeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
