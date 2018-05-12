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
    this.apiPath = this.settings.getUrl();
    this.token = null;
    this.myData = new Object();
    this.refreshToken().subscribe(x => {
      this.getMe().subscribe();
    });
  }

  private token: string;
  private apiPath: string;
  private myData: Object;

  requestMyPrivileges(): Observable<Object>{
    return new Observable(observer => {
      this.refreshToken().subscribe(x => {
        this.getMe().subscribe(y => {
          observer.next({token: this.token, pm: this.myData['pm']});
        })
      })
    })
  }

  getMe(): Observable<any>{
    return new Observable(observer => {
      let headers = new HttpHeaders({
        'Authorization': 'Bearer ' + this.getToken()
      });
  
      this.http.get(this.apiPath + 'me', {headers: headers}).subscribe(data => {
        this.myData = data;
        console.log(data);
        observer.next();
      });
    })
  }

  isAdmin(): boolean{
    return this.myData['pm'];
  }

  login(email: string, password: string): Observable<string>{
    return new Observable(observer => {
      let headers: HttpHeaders = new HttpHeaders();

      this.http.post(this.apiPath + 'login', {email: email, password: password}, {}).subscribe(data => {
        if(data['error'] == null){
          this.token = data['token'];
          localStorage.setItem('token', this.token);

          this.getMe().subscribe(datax => {
            observer.next('');
          });
        }
        else{
          observer.next(data['error']);
        }
      })
    })
  }

  refreshToken(): Observable<any>{
    return new Observable(observer => {
      if(this.token == null){
        let x = localStorage.getItem('token');
        if(x != undefined && x != null){
          this.token = x;
        }
        observer.next();
      }
      else{
        observer.next();
      }
    })
  }

  getToken(): string{
    return this.token;
  }

  logout(){
    this.token = null;
    localStorage.removeItem('token');
  }
}
