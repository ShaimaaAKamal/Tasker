import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';
import { CompanySizeQuestionComponent } from '../company-size-question-component/company-size-question-component.component';
import { SpecialityComponent } from '../speciality/speciality.component';
import { FinishComponent } from '../finish/finish.component';
import { PositionComponent } from '../position/position.component';

@Component({
  selector: 'app-boarding',
  imports: [WelcomeComponent, CompanySizeQuestionComponent, SpecialityComponent, PositionComponent,FinishComponent],
  templateUrl: './boarding.component.html',
  styleUrl: './boarding.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class BoardingComponent {
  displayBoardingPage:string='welcome';
  onBoardingNavigate(section:string){
    this.displayBoardingPage =section;
  }
}
