import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  userSubscription(data: any): Observable<any> {
    return this.http.post(`${environment.neat_be}/api/subscribe`, data);
  }

  getUserTypes() {
    return this.http.get(`${environment.neat_be}/api/user-type`);
  }
}
