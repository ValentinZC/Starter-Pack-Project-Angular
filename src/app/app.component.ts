import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public navLinks = [
    {
      label: 'Calculator',
      link: 'calc',
      index: 0
    },
    {
      label: 'Quiz',
      link: 'quiz',
      index: 0
    },
    {
      label: 'Forecast',
      link: 'forecast',
      index: 0
    },
    {
      label: 'Todo',
      link: 'todo',
      index: 0
    }
  ]
}
