import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [ './user.component.scss' ]
})
export class UserComponent implements OnInit {
  user: User;

  constructor( private route: ActivatedRoute ) {
  }

  ngOnInit() {
    this.route.data.subscribe(
      ( data: { user: User } ) => {
        console.log(data);
        this.user = data.user;
      });
  }

}
