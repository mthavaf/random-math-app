import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  public number1 = 0;
  public number2 = 0;
  public answer = 0;
  public operators = ['+', '-', '*', '&#247;'];
  public operator = 0;
  public showAnswer = false;

  constructor() { }

  ngOnInit(): void {
    this.number1 = Math.floor(Math.random() * 1000);
    this.number2 = Math.floor(Math.random() * 1000);
    this.operator = Math.floor(Math.random() * 4);
    this.showAnswer = false;
    this.answer = this.calculate();
  }

  public reload() {
    this.ngOnInit();
  }

  private calculate(): number {
    let res = 0;

    switch (this.operator) {
      case 0:
        res = this.number1 + this.number2;
        break;
      case 1:
        res = this.number1 - this.number2;
        break;
      case 2:
        res = this.number1 * this.number2;
        break;
      case 3:
        res = this.number1 / this.number2;
        break;

      default:
        break;
    }

    return res;
  }

}
