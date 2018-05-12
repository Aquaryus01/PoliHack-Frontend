import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from '../../../_services/auth.service';
import { SettingsService } from '../../../_services/settings.service';
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
    return this.http.get<Group[]>(this.settingsService.getUrl() + 'user/projects', {headers: headers});
  }
}
