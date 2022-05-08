import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Team } from 'src/app/shared/interfaces/team.interface';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl(this.data.name),
    address: new FormControl(this.data.address),
    phoneNumber: new FormControl(this.data.phoneNumber),
  });

  constructor(public dialogRef: MatDialogRef<UpdateComponent>, @Inject(MAT_DIALOG_DATA)public data: Team) { }

  ngOnInit(): void {
  }



}
