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

  getMySkills(){
    let headers: HttpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.authService.getToken()
    });
    return this.http.get(this.settingsService.getUrl() + 'skill/my', {headers: headers});
  }

  addSkill(skill){
    let headers: HttpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.authService.getToken()
    });
    return this.http.post(this.settingsService.getUrl() + 'skill/user/add', skill, {headers: headers});
  }

  getAllSkills(){
    let headers: HttpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.authService.getToken()
    });
    return this.http.get(this.settingsService.getUrl() + 'skill', {headers: headers});
  }
  
  getIdOfSkill(name: string){
    let headers: HttpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.authService.getToken()
    });
    return this.http.get(this.settingsService.getUrl() + 'skill/search/' + name, {headers: headers});
  }

  deleteSkill(id){
    let headers: HttpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.authService.getToken()
    });
    return this.http.delete(this.settingsService.getUrl() + 'skill/user/delete/' + id, {headers: headers});
  }

  getData(){
    let headers: HttpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.authService.getToken()
    });
    return this.http.get<Group[]>(this.settingsService.getUrl() + 'user/projects', {headers: headers});
  }
}
