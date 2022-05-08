import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    home: new FormControl(''),
    away: new FormControl(''),
    homeGoal: new FormControl(''),
    awayGoal: new FormControl(''),
    homePoints: new FormControl(''),
    awayPoints: new FormControl(''),
    matchDate: new FormControl(''),
  });

  /*
    id: new FormControl(''),
    home: new FormControl(''),
    away: new FormControl(''),
    homeGoal: new FormControl(''),
    awayGoal: new FormControl(''),
    homePoints: new FormControl(''),
    awayPoints: new FormControl(''),
    matchDate: new FormControl(''),
    */

  constructor(public dialogRef: MatDialogRef<AddComponent>) { }

  ngOnInit(): void {
  }

}





