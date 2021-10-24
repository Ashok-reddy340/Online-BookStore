import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/model/Customer';
import { Book } from 'src/app/model/Book';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     getUsers()
  {
    return this.httpClient.get<Customer[]>('http://localhost:8012/users/get');
  }
  addUser(newUser: Customer) {
    return this.httpClient.post<Customer>('http://localhost:8012/users/add', newUser);   
  }
  deleteUser(id:number) {
    return this.httpClient.delete<Customer>('http://localhost:8012/users/' + id);
  }
  getBooks() {
    return this.httpClient.get<Book[]>('http://localhost:8012/books/get');
  }
  addBook(newBook: Book) {
    return this.httpClient.post<Book>('http://localhost:8012/books/add', newBook);
  }



}
