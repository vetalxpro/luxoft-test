import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../../shared/models/user.model';
import { ITableColumn } from '../../../ui/datatable/shared/models/table-column.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.scss' ]
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;
  columns: ITableColumn[] = [
    {
      field: 'id',
      label: 'ID',
      sortable: true
    },
    {
      field: 'name',
      label: 'Name',
      sortable: true
    },
    {
      field: 'username',
      label: 'Username',
      sortable: true
    },
    {
      field: 'email',
      label: 'Email',
      sortable: true
    },
    {
      field: 'phone',
      label: 'Phone',
      sortable: true
    },
    {
      field: 'website',
      label: 'Website',
      sortable: true
    }
  ];

  constructor( private userService: UserService ) {
  }

  ngOnInit() {
    this.users$ = this.userService.getUsers();
  }

  onRemoveClick( user: User ) {
    console.log(user);
    this.userService.deleteUser(user.id)
      .subscribe(( res ) => {
          console.log(res);
          this.users$ = this.userService.getUsers();
        },
        ( err ) => {
          console.log(err);
        });
  }

}
