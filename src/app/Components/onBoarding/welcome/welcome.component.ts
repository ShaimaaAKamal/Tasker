import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { SiteMainBtnComponent } from '../../shared/site-main-btn/site-main-btn.component';
@Component({
  selector: 'app-welcome',
  imports: [SiteMainBtnComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent {
  navigatedSection =output<string>();
  onBoardingNavigate(){
    this.navigatedSection.emit('companySize');
  }
}
