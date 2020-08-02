# Gradient Angular Progress bar

This project was ported from react version [BlogPost](https://dev.to/raisaugat/how-to-show-progress-percentage-in-gradient-bar-2k61) to angular and converted into a [Npm Package](https://www.npmjs.com/package/angular-gradient-progressbar)

## Install the module inside your page module.

```
import { AngularGradientProgressbarModule } from "angular-gradient-progressbar";

@NgModule({
  declarations: [ ... ],
  imports: [AngularGradientProgressbarModule ]
  })
 export class YourModule {}
```

## Usage

inside your `page.component.html`

`<angular-gradient-progressbar [type]="1"></angular-gradient-progressbar>`

You need to specify a type of progress bar you want to use other wise it defaults to 1.

Their are two types of gradient progress bar included:

1.  Type "1": (Advance Gradient Progress Bar) Options Available for this are:
    a. Provide Value for the progress bar using `value` (defaults to 75)
    `<angular-gradient-progressbar [type]="1" [value] ="75"]> </angular-gradient-progressbar>`

    b.Changing tool tip text color 3 options are available

        <angular-gradient-progressbar [type]="1" lowTextColor="red"> </angular-gradient-progressbar>
        <angular-gradient-progressbar [type]="1" mediumTextColor="orange"> </angular-gradient-progressbar>
        <angular-gradient-progressbar [type]="1" highTextColor="green"> </angular-gradient-progressbar>


    c. Change Progress bar width using `progressBarWidth` ( default is 7).

    > Note: Porgres Bar width works in opposite way higher the value lower the width and vice a versa.

    `<angular-gradient-progressbar [type]="1" [progressBarWidth]="7"]> </angular-gradient-progressbar>`

    d. Change Number of Bar Count using `barCount` ( default is 7 and max is 10).

    `<angular-gradient-progressbar [type]="1" [barCount] ="7"]> </angular-gradient-progressbar>`

    e. You Can change the Quartile Value of the progress bar which define the number of data points to define range for (low,medium,high) using `quartileValueLow` and `quartileValueHigh`.

    `<angular-gradient-progressbar [type]="1" [quartileValueLow]="4" [quartileValueHigh]="7"]> </angular-gradient-progressbar>`

    > Note: In the above example anything below 4 is low, between 4 and 7 is medium and anything above 7 is high. If u are changing these values make sure your aware of the barCount value as that quatile showcase can change accordingly.

    f. You can show and hide tooltip by setting `showToolTip` trur or false ( default is true).

    `<angular-gradient-progressbar [type]="1" [showTollTip]="true"]> </angular-gradient-progressbar>`

2.  Type "2": (Simple CSS Gradient Progress Bar) Options Available for this are:

    a. if the type is set to 2 you can set the progress value for the second progress bar using `secondValue` ( default value is 75)

    `<angular-gradient-progressbar [type]="2" [secondValue]="75"]> </angular-gradient-progressbar>`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
