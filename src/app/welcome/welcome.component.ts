import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {

  user: Observable<firebase.User>;
  item: FirebaseObjectObservable<any>;

  constructor(public loginService: LoginService) {
    this.user = loginService.authState;
    this.item = loginService.item;
  }

  logout(){
    this.loginService.logout();
  }

  ngOnInit() {

  }

}
