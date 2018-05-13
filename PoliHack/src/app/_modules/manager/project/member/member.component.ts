import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  detailBool:boolean = false;
  detailBool1:boolean = false;
  detailBool2:boolean = false;
  detailBool3:boolean = false;
  id: number = 0;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      })
   };

}
