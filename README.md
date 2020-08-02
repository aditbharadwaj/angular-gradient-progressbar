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

`<angular-gradient-progressbar [type]="1"></angular-gradient-progressbar>`

You need to specify a type of progress bar u want to use other wise it defaults to 1. 
Their are two types of gradient progress bar included:

1. Type "1": (Advance Gradient Progress Bar) Options Available for this are:
    a. Changing tool tip text color 3 options are available

        ` <angular-gradient-progressbar [type]="1" [lowTextColor]="red"> </angular-gradient-progressbar> 
        <angular-gradient-progressbar [type]="1" [mediumTextColor]="orange"> </angular-gradient-progressbar>
        <angular-gradient-progressbar [type]="1" [highTextColor]="green"> </angular-gradient-progressbar> 
        `

2. Type "2": (Simple CSS Gradient Progress Bar) Options Available for this are:
    a.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

