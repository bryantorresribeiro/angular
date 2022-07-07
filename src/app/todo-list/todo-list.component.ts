import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tarefas = [{name: "Tarefa do dia!"}]
  
  constructor() {

    interface teste{
      name: string
    }

    this.createTask()

  }

  values = new FormControl('')

  createTask(){
    this.values.value !== null && this.tarefas.push({name: this.values.value})
    console
  }

  deleteTask(name:string){
    let remove = this.tarefas.filter(tarefa => tarefa.name!==name)
    this.tarefas = remove
  }

  ngOnInit(): void {
  }

}
