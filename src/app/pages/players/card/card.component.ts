import { Component,Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Player } from 'src/app/shared/interfaces/player.interface';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() player?: Player;

  constructor(private service: FirebaseService<Player>, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deletePlayer(): void{
    this.service.delete("player",this.player?.id as string);
  }

  updatePlayer(){
    const dialogRef = this.dialog.open(UpdateComponent, {
      data: this.player
    });
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((player: Player) => {
      console.log(player);
        this.service.update('player', this.player?.id as string ,player).then(id => { console.log(id); });
    }, (err: any) => {
      console.warn(err);
    });
  }

}

