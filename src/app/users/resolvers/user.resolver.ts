import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable()
export class UserResolver implements Resolve<User> {
  constructor( private userService: UserService, private router: Router ) {
  }

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<User> {
    const id = +route.paramMap.get('id');

    return this.userService.getUser(id).pipe(
      take(1)
    );
  }
}
