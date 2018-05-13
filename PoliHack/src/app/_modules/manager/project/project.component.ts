import { Component, OnInit } from '@angular/core';
import { Group } from '../../../_classes/group';
import { GroupService } from '../_services/group.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private groupService: GroupService,
              private route: ActivatedRoute) { }
  
  detailBool:boolean = false;
  detailBool1:boolean = false;
  detailBool2:boolean = false;
  detailBool3:boolean = false;
  id: number = 0;
  groups: Group[] = [];
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.id = params['id'];
      this.groupService.getTasks(params['id']).subscribe(res =>{
        this.groups = res;
      })
   });
    
  }

}
