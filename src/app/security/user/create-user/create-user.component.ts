import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styles: []
})
export class CreateUserComponent implements OnInit {
  @ViewChild('modalUser') public modalUser: ModalDirective;
  @Input() title: string;
  formUser: FormGroup;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  name: FormControl;
  middleName: FormControl;
  lastName: FormControl;
  constructor(private fb: FormBuilder) {
    this.email = new FormControl(null, [Validators.required, Validators.email]);
    this.password = new FormControl(null, [Validators.required, Validators.minLength(5)]);
    this.confirmPassword = new FormControl(null, [Validators.required]);
    this.name = new FormControl(null, [Validators.required]);
    this.middleName = new FormControl(null, [Validators.required]);
    this.lastName = new FormControl(null, [Validators.required]);

    this.formUser = fb.group({
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
      name: this.name,
      middleName: this.middleName,
      lastName: this.lastName
    });
  }

  ngOnInit() {
  }

  public onSubmit(value) {
    console.log(value);
  }
  public show() {
    this.modalUser.show();
  }


  public hide() {
    this.modalUser.hide();
  }
}
