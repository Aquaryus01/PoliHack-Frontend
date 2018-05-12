import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from '../_services/group.service';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../../_services/auth.service';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from '../../../_services/settings.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  mySkills;
  allSkills;
  newSkill;

  constructor(private router: Router, private groupService: GroupService, private authService: AuthService, private http: HttpClient, private settingsService: SettingsService) { }

  ngOnInit() {
    this.loadSkills();
    this.loadAllSkills();
    this.newSkill = new Object();
  }

  loadAllSkills(){
    this.groupService.getAllSkills().subscribe(data => {
      this.allSkills = data;
    })
  }

  loadSkills(){
    this.groupService.getMySkills().subscribe(data => {
      this.mySkills = data;
    })
  }

  removeSkill(i){
    console.log('remove skill');
    this.groupService.deleteSkill(this.mySkills[i]['skill_id']).subscribe(data => {
      this.loadSkills();
      this.loadAllSkills();
    })
  }

  handleAddSkill(){
    this.groupService.getIdOfSkill(this.newSkill.name).subscribe(data => {
      this.groupService.addSkill({name: this.newSkill.name, skill_id: data[0]['skill_id'], level: this.newSkill.level}).subscribe(datax =>{
        this.loadSkills();
        this.loadAllSkills();
        console.log('should clear');
        this.newSkill.name = '';
      });
    })
  }

}
