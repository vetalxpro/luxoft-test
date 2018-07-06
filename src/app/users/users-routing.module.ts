import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { MetaGuard } from '@ngx-meta/core';
import { UserComponent } from './pages/user/user.component';
import { UserResolver } from './resolvers/user.resolver';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    canActivate: [ MetaGuard ],
    data: {
      meta: {
        title: 'Users'
      }
    }
  },
  {
    path: ':id',
    component: UserComponent,
    canActivate: [ MetaGuard ],
    resolve: {
      user: UserResolver
    },
    data: {
      meta: {
        title: 'User'
      }
    }
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: [ UserResolver ]
})
export class UsersRoutingModule {
}
