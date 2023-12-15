import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionDeleteConfirmComponent } from './competition-delete-confirm.component';

describe('CompetitionDeleteConfirmComponent', () => {
  let component: CompetitionDeleteConfirmComponent;
  let fixture: ComponentFixture<CompetitionDeleteConfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompetitionDeleteConfirmComponent]
    });
    fixture = TestBed.createComponent(CompetitionDeleteConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
