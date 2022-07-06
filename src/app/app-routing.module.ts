import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from "./components/calculator/calculator.component";
import { QuizComponent } from "./components/quiz/quiz.component";
import { ForecastComponent } from "./components/forecast/forecast.component";
import { TodoComponent } from "./components/todo/todo.component";

const routes: Routes = [
  {
    path: 'calc', component: CalculatorComponent
  },
  {
    path: 'quiz', component: QuizComponent
  },
  {
    path: 'forecast', component: ForecastComponent
  },
  {
    path: 'todo', component: TodoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
