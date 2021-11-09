import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient) { }
   authService(credentials: any):Observable<any>{
       return this.http.post("https://localhost:44336/api/login/authenticate",credentials);
   }
}
