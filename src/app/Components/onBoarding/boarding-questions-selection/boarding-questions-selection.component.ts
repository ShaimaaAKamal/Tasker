import { Component, inject, input, output } from '@angular/core';
import { SiteMainBtnComponent } from '../../shared/site-main-btn/site-main-btn.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boarding-questions-selection',
  imports: [SiteMainBtnComponent],
  templateUrl: './boarding-questions-selection.component.html',
  standalone: true,
  styleUrl: './boarding-questions-selection.component.css'
})
export class BoardingQuestionsSelectionComponent {
  data = input.required< {
     title: string;
     options: string[];
     backNavigation: string;
   nextNavigation: string;
     ContinueMessage: string
  }>();
navigatedSection = output<string>();

private router=inject(Router);
  onBoardingNavigate(section: any) {
    this.navigatedSection.emit(section)
  }
  onSkipClick(){
    this.router.navigateByUrl("/home");
  }
}
