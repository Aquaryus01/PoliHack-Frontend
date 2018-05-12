import { Component, OnInit } from '@angular/core';
import { GroupService } from '../_services/group.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  genericSkills;
  skills: Object[];
  currentSkill: Object;
  project: Object;

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.skills = new Array();
    this.project = new Object();
    this.currentSkill = new Object();
    this.groupService.getSkills().subscribe(data => {
      this.genericSkills = data;
    })
  }

  handleAdd(){
    this.groupService.getIdOfSkill(this.currentSkill['name']).subscribe(data =>{
      this.skills.push({name: this.currentSkill['name'], number: this.currentSkill['number'], skill_id: data[0]['skill_id']});
      this.currentSkill['name'] = '';
      this.currentSkill['number'] = '';
    });
  }

  removeItem(index: number){
    console.log('remove ' + index);
    this.skills = this.skills.filter((x, poz) => poz != index);
  }


  submitForm(){
    this.groupService.handleCreateGroup({
      name: this.project['name'],
      description: this.project['description'],
      start: '1999.12.11',
      end: '2018.05.12',
      skills: this.skills
    });
  }

}
