import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFishComponent } from './component-fish.component';

describe('ComponentFishComponent', () => {
  let component: ComponentFishComponent;
  let fixture: ComponentFixture<ComponentFishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentFishComponent]
    });
    fixture = TestBed.createComponent(ComponentFishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
