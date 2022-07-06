import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { FormsModule } from "@angular/forms";
import { TodoComponent } from './components/todo/todo.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { HttpClientModule } from "@angular/common/http";
import { QuizComponent } from './components/quiz/quiz.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MaterialModule } from "./material.module";

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    TodoComponent,
    ForecastComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
