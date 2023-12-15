import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionModalAddComponent } from './competition-modal-add.component';

describe('CompetitionModalAddComponent', () => {
  let component: CompetitionModalAddComponent;
  let fixture: ComponentFixture<CompetitionModalAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompetitionModalAddComponent]
    });
    fixture = TestBed.createComponent(CompetitionModalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
