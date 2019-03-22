import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  userSubscription(email: string): Observable<any> {
    return this.http.post(`${environment.neat_be}/api/subscribe`, { email });
  }
}
