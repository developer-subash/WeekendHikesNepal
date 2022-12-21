import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms'
import { AuthService } from './../../services/auth.service';
import { take } from 'rxjs';
import { ActivatedRoute, Router  } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  emptyEmail = 'You must enter a email address';
  emptyPassword = 'You must enter a password';
  constructor(
    private formBuilder: FormBuilder,
    private readonly _authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit(): void {

  }

  loginAction() {
    const email: string = this.fb['email'].value
    const password: string = this.fb['password'].value
    this._authService.login(email, password)
    .pipe(take(1))
    .subscribe(res => {
      this.router.navigate(['/destination/list']);
    });
  }

  get fb() {
    return this.loginForm.controls;
  }

}
