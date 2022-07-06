import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})

export class CalculatorComponent {
  public btns: (string | number)[] = ['Clear', '=', 1, 2, '*', 3, 4, '/', 5, 6, '-', 7, 8, '+', 9, 0];
  public calcInput: any = '';

  rounded(num: number){
    return num.toFixed(2)
  }

  calculate(event: any) {
    let btn = event.srcElement.innerText;
    if (btn === '=') {
      this.calcInput = this.rounded(eval(this.calcInput));
      return
    }
    if (btn === 'Clear') {
      this.calcInput = '';
      return;
    }
    this.calcInput += btn;

  }

}
