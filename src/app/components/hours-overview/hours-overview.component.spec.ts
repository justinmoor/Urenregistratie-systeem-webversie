import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrenoverzichtComponent } from './hours-overview.component';

describe('UrenoverzichtComponent', () => {
  let component: UrenoverzichtComponent;
  let fixture: ComponentFixture<UrenoverzichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrenoverzichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrenoverzichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
