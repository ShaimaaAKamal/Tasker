import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardingQuestionsSelectionComponent } from './boarding-questions-selection.component';

describe('BoardingQuestionsSelectionComponent', () => {
  let component: BoardingQuestionsSelectionComponent;
  let fixture: ComponentFixture<BoardingQuestionsSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardingQuestionsSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardingQuestionsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
