import { Injectable } from '@angular/core';
import { SettingsService } from '../../../_services/settings.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/_services/auth.service';
import { Group } from '../_classes/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private settingsService: SettingsService,
              private http: HttpClient,
              private authService: AuthService
              ) { }

  

  getData(){
    let headers: HttpHeaders;
    headers.append('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.get<Group[]>(this.settingsService.getUrl() + '', {headers: headers});
  }
}
