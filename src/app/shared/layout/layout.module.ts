import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MenuService } from './main/shared/menu.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AuthComponent, MainComponent],
  providers: [MenuService]
})
export class LayoutModule { }
