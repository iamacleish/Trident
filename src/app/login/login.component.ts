import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {  AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import {  AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   user: Observable<firebase.User>;
   item: FirebaseObjectObservable<any>;
  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase) {
    this.user = afAuth.authState;
    this.item = db.object('messages');

  }

  login() {
     this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
   }
   logout() {
      this.afAuth.auth.signOut();
   }

  ngOnInit() {
  }

}
