import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHoursComponent } from './update-hours.component';

describe('UpdateHoursComponent', () => {
  let component: UpdateHoursComponent;
  let fixture: ComponentFixture<UpdateHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateHoursComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
