import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { UsersService } from "./index";
import { Observable, Subject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        public router: Router,
        public user: UsersService
    ) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.user.token.get()) {
            this.router.navigate(['login']);
        }

        return this.user.token.get() ? true : false;
    }

}