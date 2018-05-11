import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class WorkerGuard implements CanActivate {

  constructor(private authService: AuthService) {}

  canActivate(){
    console.log(this.authService.getToken(), this.authService.isAdmin());
    if(this.authService.getToken() != null && this.authService.isAdmin() == false){
      return true;
    }
    return false;
  }
}
