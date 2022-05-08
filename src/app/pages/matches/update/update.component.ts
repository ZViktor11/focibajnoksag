import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Match } from 'src/app/shared/interfaces/match.interface';
import { Player } from 'src/app/shared/interfaces/player.interface';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  form: FormGroup = new FormGroup({
    home: new FormControl(this.data.home),
    away: new FormControl(this.data.away),
    homeGoal: new FormControl(this.data.homeGoal),
    awayGoal: new FormControl(this.data.awayGoal),
    homePoints: new FormControl(this.data.homePoints),
    awayPoints: new FormControl(this.data.awayPoints),
    matchDate: new FormControl(this.data.matchDate),
  });

  constructor(public dialogRef: MatDialogRef<UpdateComponent>, @Inject(MAT_DIALOG_DATA)public data: Match) { }

  ngOnInit(): void {
  }



}
