import {
  Component,
  OnInit,
  Input,
  Type,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  templateUrl: './angular-gradient-progressbar-component.html',
  selector: 'angular-gradient-progressbar',
  styleUrls: ['./angular-gradient-progressbar.scss'],
})
export class AngularGradientProgressbarComponent
  implements OnInit, AfterViewInit {
  @Input() type: number;
  BAR_COUNT = 7;
  quartilePercentage;
  truePercent = 64;
  truePercent1 = 100 - 73;
  quartileValue: any;
  blockClass: any;
  elementArr = [];
  potentialLabel: any;
  toolTipClass: any;

  @ViewChild('myDiv') divView: ElementRef;

  constructor() {}

  ngOnInit(): void {
    //this.type = 1;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.type) {
        this.rangeArray();
        this.toolTip();
      }
    });
    // console.log("this.quartileValue :", this.quartileValue);
  }

  toolTip() {
    this.quartileValue = Math.round(this.truePercent / this.quartilePercentage);
    this.potentialLabel =
      this.quartileValue < 4
        ? 'low'
        : this.quartileValue <= 5
        ? 'medium'
        : 'high';
    this.toolTipClass = 'indicator ' + this.potentialLabel;
    //console.log("this.potentialLabel :", this.potentialLabel);
  }

  rangeArray() {
    this.quartilePercentage = 100 / this.BAR_COUNT;
    this.elementArr = [];
    let percent: any;
    let quartileValue: any;
    for (let i = 1; i <= this.BAR_COUNT; i++) {
      const currentPoint = Math.round(this.quartilePercentage * i);
      //console.log('currentPoint :', currentPoint);
      if (this.truePercent <= currentPoint) {
        //Check if percent and quartile value is present of not. This runs only one time
        if (!percent && !quartileValue) {
          // console.log(" enterd:");
          const previousPoint = Math.round(this.quartilePercentage * (i - 1));
          const difference = currentPoint - previousPoint;
          quartileValue = i;
          percent =
            Math.round(
              ((this.truePercent - previousPoint) / difference) * 100
            ) + '%';
          //  console.log("percent :", percent);
        }
        if (percent && quartileValue) {
          // console.log("percent :", percent);
          if (i === quartileValue) {
            // set specified block value so that it can be used to make gradient
            this.divView.nativeElement.style.setProperty(
              '--block-' + i,
              percent
            );
            // set left value to position the indicator and tooltip
            this.divView.nativeElement.style.setProperty(
              '--left-value',
              percent
            );
          }
          this.blockClass =
            'item ' + (i === quartileValue ? 'current filled' : '');
          this.elementArr.push(this.blockClass);
        }
      } else {
        this.blockClass = 'item filled';
        this.elementArr.push(this.blockClass);
      }
    }
    console.log('this.elementArr :', this.elementArr);
  }
}
