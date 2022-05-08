import { Component,Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Player } from 'src/app/shared/interfaces/player.interface';
import { Table } from 'src/app/shared/interfaces/table.interface';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() table?: Table;

  constructor(private service: FirebaseService<Table>, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteTable(): void{
    this.service.delete("table",this.table?.id as string);
  }

  updateTable(){
    const dialogRef = this.dialog.open(UpdateComponent, {
      data: this.table
    });
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((table: Table) => {
      console.log(table);
        this.service.update('table', this.table?.id as string ,table).then(id => { console.log(id); });
    }, (err: any) => {
      console.warn(err);
    });
  }

}

