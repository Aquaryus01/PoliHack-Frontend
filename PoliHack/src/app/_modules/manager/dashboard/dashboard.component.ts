import { Component, OnInit } from '@angular/core';
import { GroupService } from '../_services/group.service';
import { Group } from '../../../_classes/group';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private groupService: GroupService) { }
  modal: boolean = false;
  groupsBackup: Group[] = [];
  groups: Group[] = [];
  filterCategory: number;

  ngOnInit() {
    this.groupService.getData().subscribe(res => {
        this.groups = res;
        this.groupsBackup = this.groups;
    })
  }

  handleFilter(data){
    this.filterCategory = data;
    
    if(data == 0){
      this.groups = this.groupsBackup;
    }
    else{
      this.groups = this.groupsBackup.filter(x => {
        if(x['status'] == data){
          return true;
        }
        return false;
      })
    }
  }

}
