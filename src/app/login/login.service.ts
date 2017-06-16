import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {  AngularFireAuth } from 'angularfire2/auth';
import {  AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";

@Injectable()
export class LoginService {
  public user: firebase.User;
  public authState: Observable<firebase.User>;
  public item: FirebaseObjectObservable<any>;


  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase, private router: Router) {

    this.user = null;
    this.authState = afAuth.authState;
    this.authState.subscribe((user: firebase.User) => {
      this.user = user;
      console.log('authState changed', this.user);
    });
    this.item = db.object('/records/rec1');

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
      this.router.navigate(['/login']);
   }

}
