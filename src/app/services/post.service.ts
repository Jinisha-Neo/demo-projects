import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'http://localhost:8080/api/users';

   
  constructor(private httpClient: HttpClient) { }
  
  getPosts():Observable<any>{
    return this.httpClient.get(this.url);
  }
  
  createUser(user:User): Observable<Object>{
    console.log("INSIDE CREATE ", user);
    
    return this.httpClient.post(`${this.url}`, user);
  }

  updateUserDetails(user: User): Observable<Object>{
    console.log(user.id);
    
    let url = `http://localhost:8080/api/users/${user.id}`;
    return this.httpClient.put(url,user)
  }

  deleteUser(id:number): Observable<Object>{
    let url = `http://localhost:8080/api/users/${id}`;
    return this.httpClient.delete(url)
  }
}
