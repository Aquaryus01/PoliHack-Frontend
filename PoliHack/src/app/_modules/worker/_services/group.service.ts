import { Injectable } from '@angular/core';
import { SettingsService } from '../../../_services/settings.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/_services/auth.service';
import { Group } from '../../../_classes/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private settingsService: SettingsService,
              private http: HttpClient,
              private authService: AuthService
              ) { }

  

  getData(){
    let headers: HttpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.authService.getToken()
    });
    //headers.append('Authorization', 'Bearer ' + this.authService.getToken());
    //headers.append('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE1MjYwNjUzMTV9.fwWej9npJXvpNLguWyQBfeRV9vFpexQ270o5ogIoUPQ');
    return this.http.get<Group[]>(this.settingsService.getUrl() + 'user/projects', {headers: headers});
  }
}
