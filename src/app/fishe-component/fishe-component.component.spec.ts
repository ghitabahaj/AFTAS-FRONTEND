import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FisheComponentComponent } from './fishe-component.component';

describe('FisheComponentComponent', () => {
  let component: FisheComponentComponent;
  let fixture: ComponentFixture<FisheComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FisheComponentComponent]
    });
    fixture = TestBed.createComponent(FisheComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
