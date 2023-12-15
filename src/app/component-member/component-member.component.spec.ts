import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMemberComponent } from './component-member.component';

describe('ComponentMemberComponent', () => {
  let component: ComponentMemberComponent;
  let fixture: ComponentFixture<ComponentMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentMemberComponent]
    });
    fixture = TestBed.createComponent(ComponentMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
