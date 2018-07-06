import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './pages/users/users.component';
import { DatatableModule } from '../ui/datatable/datatable.module';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './pages/user/user.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    DatatableModule,
    SharedModule
  ],
  declarations: [ UsersComponent, UserComponent ]
})
export class UsersModule {
}
