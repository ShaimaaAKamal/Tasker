import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteMainBtnComponent } from './site-main-btn.component';

describe('SiteMainBtnComponent', () => {
  let component: SiteMainBtnComponent;
  let fixture: ComponentFixture<SiteMainBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteMainBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteMainBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
