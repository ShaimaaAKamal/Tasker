import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySizeQuestionComponentComponent } from './company-size-question-component.component';

describe('CompanySizeQuestionComponentComponent', () => {
  let component: CompanySizeQuestionComponentComponent;
  let fixture: ComponentFixture<CompanySizeQuestionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanySizeQuestionComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanySizeQuestionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
