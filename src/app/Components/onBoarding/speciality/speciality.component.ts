import { Component, output } from '@angular/core';
import { BoardingQuestionsSelectionComponent } from '../boarding-questions-selection/boarding-questions-selection.component';

@Component({
  selector: 'app-speciality',
  imports: [BoardingQuestionsSelectionComponent],
  templateUrl: './speciality.component.html',
  styleUrl: './speciality.component.css'
})
export class SpecialityComponent {
  navigatedSection = output<string>();
  options: string[] = [
    "Construction",
    "Consulting",
    "Digital Marketing",
    "Education",
    "Finance",
    "Healthcare",
    "Hospitality",
    "Information Technology",
    "Insurance",
    "Manufacturing",
    "Media & Entertainment",
    "Real Estate",
    "Retail",
    "Telecommunications",
    "Transportation & Logistics",
    "Energy & Utilities",
    "Government",
    "Non-Profit",
    "Pharmaceuticals",
    "Tourism",
    "Other"
  ];

  data = {
    title: "What do you do?",
    options: this.options,
    backNavigation: 'companySize',
    ContinueMessage: 'Continue 3/5',
    nextNavigation: 'position'
  }

  onBoardingNavigate(section: any) {
    this.navigatedSection.emit(section)
  }
}
