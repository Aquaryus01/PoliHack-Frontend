import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../_services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WorkerGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean>{
    return new Observable(observer => {
      this.authService.requestMyPrivileges().subscribe(data => {
        let token = data['token'];
        let pm = data['pm'];

        if(token != null && pm == false){
          observer.next(true);
        }
        else if(token != null && pm == true){
          this.router.navigateByUrl('/dashboard-pm');
          observer.next(false);
        }
        else{
          this.router.navigateByUrl('/sign-in');
          observer.next(false);          
        }
      })
    });
  }
}
