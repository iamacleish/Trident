import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {  AngularFireAuth } from 'angularfire2/auth';
import {  AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";

@Injectable()
export class LoginService {

  user: Observable<firebase.User>;
  item: FirebaseObjectObservable<any>;

  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase, private router: Router) {
    this.user = afAuth.authState;
    this.item = db.object('records/rec1');

  }

  login() {
     this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((success)=>{
       if(success.credential){


         this.router.navigate(['/welcome']);
       }else{
         this.router.navigate(['/login']);
       }
     });
   }
   logout() {
      this.afAuth.auth.signOut();
   }

}
