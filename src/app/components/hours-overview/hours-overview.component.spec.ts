import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursOverviewComponent } from './hours-overview.component';

describe('HoursOverviewComponent', () => {
  let component: HoursOverviewComponent;
  let fixture: ComponentFixture<HoursOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoursOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoursOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
