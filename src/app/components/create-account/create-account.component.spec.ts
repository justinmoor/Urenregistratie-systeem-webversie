import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAanmakenComponent } from './create-account.component';

describe('AccountAanmakenComponent', () => {
  let component: AccountAanmakenComponent;
  let fixture: ComponentFixture<AccountAanmakenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountAanmakenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountAanmakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
