import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  details: Object;
  errorMessage: string;
  showErrorMessage: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  handleSubmit(formData){
    this.authService.login(formData.email, formData.password).subscribe(data => {
      if(data != ''){
        this.showErrorMessage = true;
        this.errorMessage = data;
        setTimeout(() => {
          this.showErrorMessage = false;
        }, 5000);
      }
      else{
        if(this.authService.isAdmin()){
          this.router.navigateByUrl('/dashboard-pm');
        }
        else{
          this.router.navigateByUrl('/dashboard');
        }
      }
    })
  }

}
