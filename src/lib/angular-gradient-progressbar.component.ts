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
  //type of progress bar
  @Input() type: number = 1; //default is 1
  //end
  //tool tip textcolor
  @Input() lowTextColor: string;
  @Input() mediumTextColor: string;
  @Input() highTextColor: string;
  //end
  //adjusting width of the progress bar
  @Input() progressBarWidth: number = 7; //default is 7
  //end
  // number of bars
  @Input() barCount: number = 7; // default is 7 and max is 10
  //end
  // value of the progress bar
  @Input() value: number = 75; // default is 75
  //end
  // Quartle value of the progress bar
  @Input() quartileValueLow: number = 4; //default to 4
  @Input() quartileValueHigh: number = 7; // default to 7
  quartileValue: number;
  quartilePercentage: any;
  //end

  //show tooltip or not
  @Input() showToolTip: boolean = true; // default is true
  //end

  //simple progress bar value
  @Input() secondValue: number = 75; // default is 75
  value1: number;
  //end

  blockClass: any;
  elementArr = [];
  potentialLabel: any;
  toolTipClass: any;

  @ViewChild('myDiv') divView: ElementRef;

  constructor() {}

  ngOnInit(): void {
    console.log('his.lowTextColor :', this.lowTextColor);
    //this.type = 1;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.type === 1) {
        this.rangeArray();
        this.toolTip();
      } else if (this.type === 2) {
        this.value1 = 100 - this.secondValue;
      }
    });
    // console.log("this.quartileValue :", this.quartileValue);
  }

  toolTip() {
    this.quartileValue = Math.round(this.value / this.quartilePercentage);
    this.potentialLabel =
      this.quartileValue < this.quartileValueLow
        ? 'low'
        : this.quartileValue <= this.quartileValueHigh
        ? 'medium'
        : 'high';
    this.toolTipClass = 'indicator ' + this.potentialLabel;
    //console.log("this.potentialLabel :", this.potentialLabel);
  }

  rangeArray() {
    if (this.barCount <= 10) {
      this.quartilePercentage = 100 / this.barCount;
      this.elementArr = [];
      let percent: any;
      let quartileValue: any;
      for (let i = 1; i <= this.barCount; i++) {
        const currentPoint = Math.round(this.quartilePercentage * i);
        //console.log('currentPoint :', currentPoint);
        if (this.value <= currentPoint) {
          //Check if percent and quartile value is present of not. This runs only one time
          if (!percent && !quartileValue) {
            // console.log(" enterd:");
            const previousPoint = Math.round(this.quartilePercentage * (i - 1));
            const difference = currentPoint - previousPoint;
            quartileValue = i;
            percent =
              Math.round(((this.value - previousPoint) / difference) * 100) +
              '%';
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
            if (this.showToolTip) {
              this.blockClass =
                'item ' + (i === quartileValue ? 'current filled' : '');
              this.elementArr.push(this.blockClass);
            } else {
              this.blockClass =
                'item ' + (i === quartileValue ? 'tool filled' : '');
              this.elementArr.push(this.blockClass);
            }
          }
        } else {
          this.blockClass = 'item filled';
          this.elementArr.push(this.blockClass);
        }
      }
      //console.log("this.elementArr :", this.elementArr);
    }
  }
}
