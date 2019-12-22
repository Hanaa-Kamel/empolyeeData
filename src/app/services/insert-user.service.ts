import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../ViewModel/user';


@Injectable({
  providedIn: 'root'
})
export class InsertUserService {

// tslint:disable-next-line: no-trailing-whitespace
  constructor( private httpclient: HttpClient) {

  }
  getAllUser(): Observable <User[]> {
    return (this.httpclient
    .get <User[]>(`${environment.API_URL}employees`));
   }

   insertUser(newUser: User): Observable <any> {
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: ' */*'
      // ,'Authorization': 'my-auth-token'
        })};

    return this.httpclient
    .post <any>(`${environment.API_URL}insert`, newUser, httpOptions);
   }
}
