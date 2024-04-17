import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';

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

  it('should render tooltip based on value and quartiles', fakeAsync(() => {
    component.type = 1;
    component.barCount = 10;

    component.quartileValueLow = 3; // everything below 30 becomes "low"
    component.quartileValueHigh = 7; // everything between 30 and 70 becomes "medium"

    setValue(component, 10);
    expect(component.potentialLabel).toBe('low');

    setValue(component, 50);
    expect(component.potentialLabel).toBe('medium');

    setValue(component, 90);
    expect(component.potentialLabel).toBe('high');
  }));

  function setValue(component: AngularGradientProgressbarComponent, value: number) {
    component.value = value;
    component.ngAfterViewInit();
    tick();
  }
});

