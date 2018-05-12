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
  groups: Group[] = [];
  ngOnInit() {
    this.groupService.getData().subscribe(res => {
        this.groups = res;
    })
  }

}
