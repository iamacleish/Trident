import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take'

import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';
import { CanActivate, Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {

  }

  canActivate(): Observable<boolean> {
      return this.loginService.authState
          .take(1)
          .map(authState => !!authState)
          .do(authenticated => {
              if (!authenticated) {
                  this.router.navigate(['/login']);
              }
          });
  }


}
