import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth) { }

  async logOut(): Promise<void>{
      await this.afauth.signOut();
  }

  logIn(email: string, password: string): Promise<any>{
    return this.afauth.signInWithEmailAndPassword(email,password);
  }

  createUser(email:string, password: string){
    return this.afauth.createUserWithEmailAndPassword(email,password).then((result)=>result.user);
  }

  currentUser(): any{
    return this.afauth.authState;
  }

}
