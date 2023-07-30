import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserSharedService {

  constructor() { }
  private userObject= new BehaviorSubject<User | null>(null)

  getUserDetails(){
    return this.userObject.asObservable();
  }

  setUserDetails(user: User){
    return this.userObject.next(user);
  }

}
