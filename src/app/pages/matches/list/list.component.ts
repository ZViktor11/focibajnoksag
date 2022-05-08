import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, throwError } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Match } from 'src/app/shared/interfaces/match.interface';
import { Player } from 'src/app/shared/interfaces/player.interface';
import { AddComponent } from '../add/add.component';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list$: Observable<Match[]> | null = null;

  errorObject = null;
  
  constructor(private service: FirebaseService<Match>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
  }


  get(): void {
    this.errorObject = null;
    this.list$ = this.service.get('match').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(AddComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((match: Match) => {
      console.log(match);
        this.service.add('match', match).then(id => { console.log(id); });
    }, (err: any) => {
      console.warn(err);
    });
  }

}
