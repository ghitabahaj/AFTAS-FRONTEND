import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCompetitionComponent } from './component-competition.component';

describe('ComponentCompetitionComponent', () => {
  let component: ComponentCompetitionComponent;
  let fixture: ComponentFixture<ComponentCompetitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentCompetitionComponent]
    });
    fixture = TestBed.createComponent(ComponentCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
