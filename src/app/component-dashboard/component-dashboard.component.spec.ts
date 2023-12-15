import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDashboardComponent } from './component-dashboard.component';

describe('ComponentDashboardComponent', () => {
  let component: ComponentDashboardComponent;
  let fixture: ComponentFixture<ComponentDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentDashboardComponent]
    });
    fixture = TestBed.createComponent(ComponentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
