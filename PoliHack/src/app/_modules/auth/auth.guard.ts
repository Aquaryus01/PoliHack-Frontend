import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService){}

  canActivate() {
    if(this.authService.getToken() == null){
      return true;
    }
    else{
      if(this.authService.isAdmin()){
        this.router.navigateByUrl('/dashboard-pm');
      }
      else{
        this.router.navigateByUrl('/dashboard');
      }
      return false;
    }
  }
}
