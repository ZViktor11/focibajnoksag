import { Component,Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Match } from 'src/app/shared/interfaces/match.interface';
import { Player } from 'src/app/shared/interfaces/player.interface';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() match?: Match;

  constructor(private service: FirebaseService<Match>, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteMatch(): void{
    this.service.delete("match",this.match?.id as string);
  }

  updateMatch(){
    const dialogRef = this.dialog.open(UpdateComponent, {
      data: this.match
    });
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((match: Match) => {
      console.log(match);
        this.service.update('match', this.match?.id as string ,match).then(id => { console.log(id); });
    }, (err: any) => {
      console.warn(err);
    });
  }

}

