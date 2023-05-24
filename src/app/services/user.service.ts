import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

const options = {
  headers: new HttpHeaders(),
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private backendURL = environment.backendURL



  constructor(private http:HttpClient) { 

  }
// ----------------------------------------------------------------------------------------------------------------------------------
  getoptions() {
    const token =JSON.parse(localStorage.getItem('token') || '');
    let header = new HttpHeaders();
    if (token) {
      header = header.append('x-access-token', token);
      options.headers = header;
    }
    return options;
  }
// ----------------------------------------------------------------------------------------------------------------------------------
  register(email:any,name:any,password:any){
    const data={
      email,
      name,
      password
    }
    return this.http.post(`${this.backendURL}/user/register`, data);
  }



  // ----------------------------------------------------------------------------------------------------------------------------------
  login(email:any,password:any){
    const data={
      email,
      password
    }
    return this.http.post(`${this.backendURL}/user/login`, data);

  }


  add(data:any){
    return this.http.post(`${this.backendURL}/add`,data,this.getoptions())
  }



  view(){
    let id =localStorage.getItem('id')
     return this.http.get(`${this.backendURL}/user/view/`+id)
  }

  delete(id:any){
    let data={
      id
    }
    return this.http.post(`${this.backendURL}/user/delete_item`,data,this.getoptions())
  }






}
