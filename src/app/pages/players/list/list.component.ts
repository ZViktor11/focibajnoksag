import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, throwError } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Player } from 'src/app/shared/interfaces/player.interface';
import { AddComponent } from '../add/add.component';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list$: Observable<Player[]> | null = null;

  errorObject = null;
  
  constructor(private service: FirebaseService<Player>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
  }


  get(): void {
    this.errorObject = null;
    this.list$ = this.service.get('player').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(AddComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((player: Player) => {
      console.log(player);
        this.service.add('player', player).then(id => { console.log(id); });
    }, (err: any) => {
      console.warn(err);
    });
  }

}
