import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/model/Customer';

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


}
