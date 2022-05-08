import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password1: new FormControl('', [Validators.minLength(6), Validators.required]),
    password2: new FormControl('', [Validators.minLength(6), Validators.required]),
  });


  hidepass1=true;
  hidepass2=true;
  error = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  reg(): void {
    this.error = false;
    if (this.form.valid) {
      if (this.form.value.password1 === this.form.value.password2) {
        //console.log(this.form.value);
        this.authService.createUser(this.form.value.email, this.form.value.password1);
        this.router.navigateByUrl('/login');
        return;
      }
    }
    this.error = true;
  }


}
