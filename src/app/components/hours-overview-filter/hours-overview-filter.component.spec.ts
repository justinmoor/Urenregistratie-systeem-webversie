import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrenoverzichtFilterComponent } from './hours-overview-filter.component';

describe('UrenoverzichtFilterComponent', () => {
  let component: UrenoverzichtFilterComponent;
  let fixture: ComponentFixture<UrenoverzichtFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrenoverzichtFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrenoverzichtFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
