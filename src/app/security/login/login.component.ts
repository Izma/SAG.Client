import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './shared/login.service';
import { CreateUserComponent } from '../user/create-user/create-user.component';
import {
  IToken
} from './shared/token';
import { LoginHelper } from './shared/login-helper';
import { IMessageInfo } from './shared/message-info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  @ViewChild('modalUser') modalUser: CreateUserComponent;
  form: FormGroup;
  email: FormControl;
  password: FormControl;
  showAlert: boolean;
  loginHelper: LoginHelper;
  message: IMessageInfo;
  loading = false;
  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.email = new FormControl(null, [Validators.required, Validators.email]);
    this.password = new FormControl(null, [Validators.required, Validators.minLength(5)]);
    this.form = fb.group({
      email: this.email,
      password: this.password
    });
    this.loginHelper = new LoginHelper();
  }

  ngOnInit() {
  }

  onSubmit(value: any) {
    this.loading = !this.loading;
    this.loginService.login(value).subscribe(result => {
      this.showAlert = false;
      this.message = this.loginHelper.displayMessage(result);
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 5000);
      this.loading = !this.loading;
    });
  }

  public openModal() {
    this.modalUser.show();
  }
}
