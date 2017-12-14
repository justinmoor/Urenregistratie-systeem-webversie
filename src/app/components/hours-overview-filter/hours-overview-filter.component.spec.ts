import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursOverviewFilterComponent } from './hours-overview-filter.component';

describe('HoursOverviewFilterComponent', () => {
  let component: HoursOverviewFilterComponent;
  let fixture: ComponentFixture<HoursOverviewFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoursOverviewFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoursOverviewFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
