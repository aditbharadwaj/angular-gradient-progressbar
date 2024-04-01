import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularGradientProgressbarComponent } from './angular-gradient-progressbar.component';

describe('AngularGradientProgressbarComponent', () => {
  let component: AngularGradientProgressbarComponent;
  let fixture: ComponentFixture<AngularGradientProgressbarComponent>;

  beforeEach(async(() => {
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
