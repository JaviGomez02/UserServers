import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  
  constructor(private router: Router, private authService:AuthService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // return this.authService.isAuthenticated()
    //   .then(
    //     (authenticated) => {
    //       if (authenticated) {
    //         return true;
    //       } else {
    //         this.router.navigate(['/']);
    //         return false;
    //       }
    //     }
    //   );


    // if (this.authService.isAuthenticated()){
    //   return true;
    // } else {
    //   this.router.navigate(['/']);
    // }
    // return false;

    return this.authService.isAuthenticated()
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // return this.authService.isAuthenticated()
    //   .then(
    //     (authenticated) => {
    //       if (authenticated) {
    //         return true;
    //       } else {
    //         this.router.navigate(['/']);
    //         return false;
    //       }
    //     }
    //   );
  //   if (this.authService.isAuthenticated()){
  //     return true;
  //   } else {
  //     this.router.navigate(['/']);
  //   }
  //   return false;

    return this.authService.isAuthenticated()
  }



}
