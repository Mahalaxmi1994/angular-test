import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient ) { }

  getTodosByTitle(title: string): Observable<any>{
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/todos?title=${title}`);
  }
}
