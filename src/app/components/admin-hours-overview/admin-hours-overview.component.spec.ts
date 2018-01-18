import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHoursOverviewComponent } from './admin-hours-overview.component';

describe('AdminHoursOverviewComponent', () => {
  let component: AdminHoursOverviewComponent;
  let fixture: ComponentFixture<AdminHoursOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHoursOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHoursOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
