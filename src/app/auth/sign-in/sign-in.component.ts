import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule, MatCardTitle } from '@angular/material/card';
import { AuthCredentials } from '../user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  imports: [
    CommonModule,
    MatButtonModule, 
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatCardModule,
  ],
  providers: [AuthService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninComponent implements OnInit {

  form!: FormGroup;

  private authService = inject(AuthService)
  private router = inject(Router)

  ngOnInit(): void {
    this.signInForm()
  }

  signInForm() {
    this.form = new FormGroup({
      username: new FormControl('mor_2314', [
        Validators.required,
      ]),
      password: new FormControl('83r5^_', 
        [
          Validators.required,
        ],
      )
    })
  }

  submit() {
    if(this.form.valid) {
      const val = this.form.value;
      const user: AuthCredentials = {
        username: val.username,
        password: val.password
      }

      this.authService.signIn(user).subscribe( () => this.router.navigate(['home']))
    }

  }

}
