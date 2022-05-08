import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean> | undefined;
  isLoggedOut$: Observable<boolean> | undefined;

  constructor(private router: Router, private authService: AuthService,private afa: AngularFireAuth) { }

  ngOnInit(): void {
    this.isLoggedIn$=this.afa.authState.pipe(map(user=>!!user));
    this.isLoggedOut$=this.isLoggedIn$.pipe(map(loggedIn=>!loggedIn));

  }

  logOut(){
    this.authService.logOut();
    this.router.navigateByUrl('login');
  }

}
