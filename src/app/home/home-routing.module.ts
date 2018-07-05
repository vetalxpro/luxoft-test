import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MetaGuard } from '@ngx-meta/core';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [ MetaGuard ],
    data: {
      meta: {
        title: 'Home'
      }
    }
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule {
}
