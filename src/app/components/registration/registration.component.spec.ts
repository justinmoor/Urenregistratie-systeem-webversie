import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratieComponent } from './registration.component';

describe('RegistratieComponent', () => {
  let component: RegistratieComponent;
  let fixture: ComponentFixture<RegistratieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistratieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistratieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
