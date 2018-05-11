import { Component, OnInit } from '@angular/core';
import { Group } from '../_classes/group';
import { GroupService } from '../_services/group.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private groupService: GroupService) { }

  group: Group[] = [];
  ngOnInit() {
    this.groupService.getData().subscribe(res => {
        this.group = res;
    })
  }

}
