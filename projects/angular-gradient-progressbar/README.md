<p align="center">
   <h1>Angular Gradient Progress Bar</h1>
</p>
<!-- Badges -->
<p align="center">
<a href="https://www.npmjs.com/package/angular-gradient-progressbar"><img src="https://img.shields.io/npm/dw/angular-gradient-progressbar"/>
</a>
<a href="https://www.npmjs.com/package/angular-gradient-progressbar"><img src="https://img.shields.io/npm/v/angular-gradient-progressbar?color=red"/>
</a>
<a href="https://github.com/aditbharadwaj/angular-gradient-progressbar"><img src="https://img.shields.io/github/stars/aditbharadwaj/angular-gradient-progressbar?label=github%20Stars&style=social"/>
</a>
</p>

<!-- end -->

## Gradient Angular Progress bar

<p>This angular package provides 2 variants of the progress bars that can be used:
  
   a. Advance Progress Bar
  <img src="https://user-images.githubusercontent.com/6751554/89441965-9c2eb280-d76b-11ea-85ca-3f2e1868cf51.PNG"/>
   
   b. Simple Progress Bar   
  <img src="https://user-images.githubusercontent.com/6751554/89295854-3664fc80-d67f-11ea-98d8-a422c62d8b65.PNG"/>
     
     
</p>

## StackBlitz

[StackBlitz](https://stackblitz.com/edit/angular-gradient-progress-bar-npm) Demo here !

## Support

<p>For any support requests please contact</p> `contact@tekspect.com`

## Installation

`npm i angular-gradient-progressbar`

## Import the module inside your page module.

```
import { AngularGradientProgressbarModule } from "angular-gradient-progressbar";

@NgModule({
  declarations: [ ... ],
  imports: [AngularGradientProgressbarModule ]
  })
 export class YourModule {}
```

## Usage

Inside your `page.component.html`

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

    f. You can show and hide tooltip by setting `showToolTip` true or false ( default is true).

    `<angular-gradient-progressbar [type]="1" [showToolTip]="true"]> </angular-gradient-progressbar>`

2.  Type "2": (Simple CSS Gradient Progress Bar) Options Available for this are:

    a. if the type is set to 2 you can set the progress value for the second progress bar using `secondValue` ( default value is 75 and max is 100)

    `<angular-gradient-progressbar [type]="2" [secondValue]="75"]> </angular-gradient-progressbar>`

## Note

> Note: This project was ported from react version [BlogPost](https://dev.to/raisaugat/how-to-show-progress-percentage-in-gradient-bar-2k61) to angular and converted into a [Npm Package](https://www.npmjs.com/package/angular-gradient-progressbar)

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
