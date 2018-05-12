import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService){

  }
  
  canActivate(): Observable<boolean> {
    console.log('guard activated');
    return new Observable(observer => {
      this.authService.requestMyPrivileges().subscribe(data => {
        let token = data['token'];
        let pm = data['pm'];
  
        if(token != null && pm){
          observer.next(true);
        }
        else if(token != null && pm == false){
          this.router.navigateByUrl('/dashboard');
          observer.next(false);
        }
        else{
          this.router.navigateByUrl('/sign-in');
          observer.next(false);
        }
      })
    })
  }
}
