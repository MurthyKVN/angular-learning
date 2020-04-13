import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCountryWiseComponent } from './view-country-wise.component';

describe('ViewCountryWiseComponent', () => {
  let component: ViewCountryWiseComponent;
  let fixture: ComponentFixture<ViewCountryWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCountryWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCountryWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
