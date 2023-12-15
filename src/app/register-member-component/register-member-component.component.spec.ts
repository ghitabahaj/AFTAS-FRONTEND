import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMemberComponentComponent } from './register-member-component.component';

describe('RegisterMemberComponentComponent', () => {
  let component: RegisterMemberComponentComponent;
  let fixture: ComponentFixture<RegisterMemberComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterMemberComponentComponent]
    });
    fixture = TestBed.createComponent(RegisterMemberComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
