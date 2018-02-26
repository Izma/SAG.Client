import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserService } from './shared/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  declarations: [CreateUserComponent],
  exports: [CreateUserComponent],
  providers: [UserService]
})
export class UserModule { }
