import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { routing } from './security.routing';
import { SecurityComponent } from './security.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule, AlertModule, ModalModule } from 'ngx-bootstrap';
import { LoginService } from './login/shared/login.service';
import { UserModule } from './user/user.module';

@NgModule({
    imports: [
        CommonModule,
        routing,
        UserModule,
        FormsModule,
        ReactiveFormsModule,
        BsDropdownModule.forRoot(),
        AlertModule.forRoot()
    ],
    declarations: [LoginComponent, SecurityComponent],
    providers: [LoginService]
})
export class SecurityModule { }
