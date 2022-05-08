import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Match } from 'src/app/shared/interfaces/match.interface';
import { Player } from 'src/app/shared/interfaces/player.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private afs: AngularFirestore,private service: FirebaseService<Match>,private serviceasd: FirebaseService<Player>) { }

  teamname: any;
  firstTeam: any;
  matches$: Observable<Match[]> | null = null;
  players$: Observable<Player[]> | null = null;



  ngOnInit(): void {
    this.getTeamName();
    this.getFirst();
    this.matches$ = this.service.get('match');
  }

  getTeamName(): void{
    this.afs.collection('player', ref => ref.where('club', '==', 'Szentesi FC').orderBy('name', 'asc'))
    .get().subscribe(res => {
      res.docs.forEach(element => {
        this.teamname = element.data();
      })
    })
  }

  getFirst(): void{
    this.afs.collection('table', ref => ref.where('points', '>=', '0').orderBy('points', 'desc')
    .orderBy('goalDifference', 'desc'))
    .get().subscribe(res => {
      res.docs.forEach(element => {
        this.firstTeam = element.data();
        
  
      })
    })
  }

}
