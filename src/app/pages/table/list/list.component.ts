import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { catchError, Observable, throwError } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Player } from 'src/app/shared/interfaces/player.interface';
import { Table } from 'src/app/shared/interfaces/table.interface';
import { AddComponent } from '../add/add.component';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() table?: Table;
  list$: Observable<Table[]> | null = null;
  dataSource: any;
  displayedColumns: string[] = ['name', 'matchesPlayed', 'goalDifference', 'points','modify','delete'];
  errorObject = null;
  
  constructor(private service: FirebaseService<Table>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
    this.dataSource=this.list$;
  }

  
  

  get(): void {
    this.errorObject = null;
    this.list$ = this.service.get('table').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }


  openDialog(): void{
    const dialogRef = this.dialog.open(AddComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((table: Table) => {
      console.log(table);
        this.service.add('table', table).then(id => { console.log(id); });
    }, (err: any) => {
      console.warn(err);
    });
  }

  deleteTable(id: string): void{
    this.service.delete("table",id);
  }

  updateTable(id: string){
    
    
    const dialogRef = this.dialog.open(UpdateComponent, {
      data: this.table
    });
    
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((table: Table) => {
      console.log(table);
        this.service.update('table', id ,table).then(id => { console.log(id); });
    }, (err: any) => {
      console.warn(err);
    }); 
    
  }

  

}
