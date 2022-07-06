import { Component, OnInit } from '@angular/core';
import { IQuestion } from "../../interfaces/IQuestion";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  public dataQuiz: IQuestion[] = [
    {
      id: 1,
      body: '2 + 2',
      correctAnswer: '4',
      answer: ''
    },
    {
      id: 2,
      body: 'First President Surname of U.S.A.',
      correctAnswer: 'Washington',
      answer: ''
    },
    {
      id: 3,
      body: 'Date of II World War',
      correctAnswer: '1939',
      answer: ''
    }
  ];
  public currentQuestion = 1;
  public isFinished = false;
  public result = 0;
  public answer = ''

  constructor() { }

  ngOnInit(): void {
  }

  renderingQuiz() {
    let res: IQuestion
    this.dataQuiz.filter(question => question.id === this.currentQuestion).map(quest => res = quest)
    return {
      question: res!.body,
      number: res!.id
    }
  }

  reset() {
    this.isFinished = false;
    this.currentQuestion = 1;
    this.answer = ''
  }


  showResult() {
    this.dataQuiz[this.currentQuestion - 1].answer = this.answer.toString()
    this.isFinished = true
    this.result = this.dataQuiz.filter((question: IQuestion) => question.answer == question.correctAnswer).length
  }

  isLastQuestion() {
    return this.dataQuiz.length === this.currentQuestion
  }

  nextQuestion() {
    if(this.currentQuestion > this.dataQuiz.length) {
      return
    }
    this.dataQuiz[this.currentQuestion - 1].answer = this.answer.toString()
    if(this.currentQuestion <= this.dataQuiz.length){
      this.currentQuestion++
      this.answer = ''
    }
  }

}
