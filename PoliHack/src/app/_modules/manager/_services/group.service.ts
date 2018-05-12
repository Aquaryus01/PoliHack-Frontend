import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from '../../../_services/auth.service';
import { SettingsService } from '../../../_services/settings.service';
import { Group } from '../../../_classes/group';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private settingsService: SettingsService,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
    ) { }


  getData(){
    let headers: HttpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.authService.getToken()
    });
    return this.http.get<Group[]>(this.settingsService.getUrl() + 'user/projects', {headers: headers});
  }

  getSkills(){
    let headers: HttpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.authService.getToken()
    });
    return this.http.get(this.settingsService.getUrl() + 'skill', {headers: headers});
  }

  handleCreateGroup(body: Object){
    let headers: HttpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.authService.getToken()
    });
    this.http.post(this.settingsService.getUrl() + 'project', body, {headers: headers}).subscribe(data => {
      this.router.navigateByUrl('/dashboard-pm');
    })
  }

  getIdOfSkill(name: string){
    let headers: HttpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.authService.getToken()
    });
    return this.http.get(this.settingsService.getUrl() + 'skill/search/' + name, {headers: headers});
  }
}
