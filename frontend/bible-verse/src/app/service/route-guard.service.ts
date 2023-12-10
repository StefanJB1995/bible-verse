import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "./user-service";

@Injectable({
    providedIn: 'root'
  })
  export class RouteGuardService implements CanActivate {

    user = JSON.parse(sessionStorage.getItem('user') || '{}');
  
    constructor(private auth: UserService, private router: Router) { }
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (this.auth.isLoggedIn() && this.user.username == "Najelly") {
        return true;
      }
      else {
        this.router.navigate(['login']);
        return false;
      }
  
  
  
    }
  }