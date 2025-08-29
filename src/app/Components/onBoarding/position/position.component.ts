import { Component, output } from '@angular/core';
import { BoardingQuestionsSelectionComponent } from '../boarding-questions-selection/boarding-questions-selection.component';

@Component({
  selector: 'app-position',
  imports: [BoardingQuestionsSelectionComponent],
  templateUrl: './position.component.html',
  styleUrl: './position.component.css'
})
export class PositionComponent {
  navigatedSection = output<string>();
  options: string[] = [
    "Owner / Founder",
    "C-Level Executive",
    "Director / Manager",
    "Team Lead",
    "Employee / Staff",
    "Freelancer / Contractor",
    "Other"
  ];

  data = {
    title: "What is your position?",
    options: this.options,
    backNavigation: 'speciality',
    ContinueMessage: 'Continue 4/5',
    nextNavigation: 'finish'
  }

  onBoardingNavigate(section: any) {
    this.navigatedSection.emit(section)
  }
}
