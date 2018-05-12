import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    console.log('dummy rerouting');
    this.authService.requestMyPrivileges().subscribe(data => {
      let token = data['token'];
      let pm = data['pm'];

      if(token == null){
        this.router.navigateByUrl('/sign-in');
      }
      else{
        if(pm){
          this.router.navigateByUrl('/dashboard-pm');
        }
        else{
          this.router.navigateByUrl('/dashboard');
        }
      }
    });
  }

}
