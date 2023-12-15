import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLevelComponent } from './component-level.component';

describe('ComponentLevelComponent', () => {
  let component: ComponentLevelComponent;
  let fixture: ComponentFixture<ComponentLevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentLevelComponent]
    });
    fixture = TestBed.createComponent(ComponentLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
