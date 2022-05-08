import { Component,Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Team } from 'src/app/shared/interfaces/team.interface';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() team?: Team;

  constructor(private service: FirebaseService<Team>, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteTeam(): void{
    this.service.delete("team",this.team?.id as string);
  }

  updateTeam(){
    const dialogRef = this.dialog.open(UpdateComponent, {
      data: this.team
    });
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((team: Team) => {
      console.log(team);
        this.service.update('team', this.team?.id as string ,team).then(id => { console.log(id); });
    }, (err: any) => {
      console.warn(err);
    });
  }

}

