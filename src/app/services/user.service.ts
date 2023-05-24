import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

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
register(email: any, name: any, password: any) {
  const data = {
    email,
    name,
    password
  };

  return this.http.post(`${this.backendURL}/user/register`, data)
    .pipe(
      catchError((error) => {
        // Handle or log the error
        console.error(error);
        throw error; // Rethrow the error to propagate it to the caller
      })
    );
}



  // ----------------------------------------------------------------------------------------------------------------------------------
  login(email: any, password: any) {
    const data = {
      email,
      password
    };

    return this.http.post(`${this.backendURL}/user/login`, data)
      .pipe(
        catchError((error) => {
          console.error(error);
          throw error;
        })
      );
  }



  add(data: any) {
    return this.http.post(`${this.backendURL}/add`, data, this.getoptions())
      .pipe(
        catchError((error) => {
          console.error(error);
          throw error;
        })
      );
  }


  view() {
    let id = localStorage.getItem('id');
    return this.http.get(`${this.backendURL}/user/view/` + id)
      .pipe(
        catchError((error) => {
          console.error(error);
          throw error;
        })
      );
  }


  delete(id: any) {
    let data = {
      id
    };
    return this.http.post(`${this.backendURL}/user/delete_item`, data, this.getoptions())
      .pipe(
        catchError((error) => {
          console.error(error);
          throw error;
        })
      );
  }






}
