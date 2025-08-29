import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-site-main-btn',
  imports: [],
  templateUrl: './site-main-btn.component.html',
  styleUrl: './site-main-btn.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SiteMainBtnComponent {
  @Input({required:true}) message!:string;
}
