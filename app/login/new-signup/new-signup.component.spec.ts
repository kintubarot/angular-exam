import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSignupComponent } from './new-signup.component';

describe('NewSignupComponent', () => {
  let component: NewSignupComponent;
  let fixture: ComponentFixture<NewSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
