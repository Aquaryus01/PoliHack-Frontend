import { Injectable } from '@angular/core';
import { SettingsService } from './settings.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private settings: SettingsService) {
    this.token = null;
    this.apiPath = this.settings.getUrl();
  }

  private token: string;
  private apiPath: string;

  login(email: string, password: string): Observable<string>{
    return new Observable(observer => {
      let headers: HttpHeaders;
      

      this.http.post(this.apiPath + '/login', {email: email, password: password}, {}).subscribe(data => {
        if(data['error'] == null){
          observer.next('');
        }
        else{
          observer.next(data['error']);
        }
      })
    })
  }

  refreshToken(){
    if(this.token == null){
      let x = localStorage.getItem('token');

      if(x != undefined && x != null){
        this.token = x;
      }
    }
  }

  getToken(): string{
    this.refreshToken();
    return this.token;
  }

  logout(){
    this.token = null;
    localStorage.removeItem('token');
  }
}
