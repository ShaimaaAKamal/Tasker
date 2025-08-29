import { Component, inject, output } from '@angular/core';
import { SiteMainBtnComponent } from '../../shared/site-main-btn/site-main-btn.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finish',
  imports: [SiteMainBtnComponent],
  templateUrl: './finish.component.html',
  styleUrl: './finish.component.css'
})
export class FinishComponent {
  navigatedSection = output<string>();
  private router=inject(Router);

  onBoardingNavigate(section:any){
    if(section != 'finish')
      this.navigatedSection.emit(section);
    else this.router.navigateByUrl('/home');
  }
}
