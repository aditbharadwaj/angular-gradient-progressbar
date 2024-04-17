import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AngularGradientProgressbarComponent } from './angular-gradient-progressbar.component';

describe('AngularGradientProgressbarComponent', () => {
  let component: AngularGradientProgressbarComponent;
  let fixture: ComponentFixture<AngularGradientProgressbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularGradientProgressbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularGradientProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
