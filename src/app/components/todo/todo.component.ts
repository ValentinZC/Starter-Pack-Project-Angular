import { Component } from '@angular/core';
import { ITodo } from "../../interfaces/ITodo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  public items: ITodo[] = [
    {id: 1, body: 'Test'},
    {id: 2, body: 'Test2'}
  ]

  public input = ''

  public generateId() {
    return (Math.floor(Math.random() * 1000)) + 2
  }

  public addHandler() {
    let item = {
      id: this.generateId(),
      body: this.input
    }

    this.items.push(item)
    this.input = ''
  }

  public remove(id: number) {
    this.items = this.items.filter((item:ITodo) => item.id !== id)
  }
}
