import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Player } from 'src/app/shared/interfaces/player.interface';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl(this.data.name),
    club: new FormControl(this.data.club),
    birthDate: new FormControl(this.data.birthDate),
  });

  constructor(public dialogRef: MatDialogRef<UpdateComponent>, @Inject(MAT_DIALOG_DATA)public data: Player) { }

  ngOnInit(): void {
  }



}
