import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  baseurl = "http://localhost:8085/api/v1/users";

  register(user:User):Observable<object>{
    return this.http.post(`${this.baseurl}/register`,user);
  }

  loginUser(token : any){

    localStorage.setItem("token",token);
    return true;

  }

  isLoggedIn(){
    
    let token = localStorage.getItem('token');
    if(token == '' || token == undefined || token == null)
      return false;

    return true;
  }

  logOut(){

    localStorage.removeItem('token');
    return true;

  }

  getToken()
  {
    return localStorage.getItem('token');
  }
}