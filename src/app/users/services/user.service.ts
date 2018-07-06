import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersApi = 'https://jsonplaceholder.typicode.com/users';

  constructor( private apiService: ApiService ) {
  }

  getUsers(): Observable<User[]> {
    return this.apiService.get(this.usersApi).pipe(
      map(( data ) => data.map(user => new User(user)))
    );
  }

  deleteUser( userId: number ): Observable<any> {
    return this.apiService.delete(`${this.usersApi}/${userId}`);
  }

  getUser( userId: number ): Observable<User> {
    return this.apiService.get(`${this.usersApi}/${userId}`).pipe(
      map(( data ) => new User(data))
    );
  }
}
