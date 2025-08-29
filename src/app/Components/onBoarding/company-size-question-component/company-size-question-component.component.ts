import { Component, output } from '@angular/core';
import { BoardingQuestionsSelectionComponent } from '../boarding-questions-selection/boarding-questions-selection.component';

@Component({
  selector: 'app-company-size-question',
  imports: [BoardingQuestionsSelectionComponent],
  standalone:true,
  templateUrl: './company-size-question-component.component.html',
  styleUrl: './company-size-question-component.component.css'
})
export class CompanySizeQuestionComponent {
  options: string[] = [
    "Just me", "2-5 people", "6-50 people",
    "51-100 people", "101-250 people", "More than 250 people"
  ];

  data = {
    title: "How big is the company ?",
    options: this.options,
    backNavigation: 'welcome',
    ContinueMessage: 'Continue 2/5',
    nextNavigation: 'speciality'
  }

 navigatedSection =output<string>();

onBoardingNavigate(section:any){
  this.navigatedSection.emit(section)
}
}
