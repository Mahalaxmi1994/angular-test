import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  name = '';
  respon= "";
  lastName = "YarAMala";
  constructor(private todoService: TodoService) { 
    this.handleResponse = this.handleResponse.bind(this);
  }

  ngOnInit(): void {
  }

  onChange(event: any){
    this.name = event.target.value;
  }

  handleResponse(resp: any){
    this.respon = resp;
  }

  onClick(){
    console.log(this.name);
    // we need to make rest call
    this.todoService.getTodosByTitle(this.name).subscribe(this.handleResponse);

    this.todoService.getTodosByTitle(this.name).subscribe((resp: any) => {
      this.respon = resp;
    });
  }

}
