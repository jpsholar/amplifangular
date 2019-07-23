import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.authService.user().pipe(
      //user is already authenticated, load internal module
      map(() => true),
      //no user authenticated, redirect to login  
      catchError(() => {
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}
