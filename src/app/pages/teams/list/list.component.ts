import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, throwError } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Team } from 'src/app/shared/interfaces/team.interface';
import { AddComponent } from '../add/add.component';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list$: Observable<Team[]> | null = null;

  errorObject = null;
  
  constructor(private service: FirebaseService<Team>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
  }


  get(): void {
    this.errorObject = null;
    this.list$ = this.service.get('team').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(AddComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((team: Team) => {
      console.log(team);
        this.service.add('team', team).then(id => { console.log(id); });
    }, (err: any) => {
      console.warn(err);
    });
  }

}
