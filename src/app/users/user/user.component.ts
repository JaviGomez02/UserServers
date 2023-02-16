import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/servers/interfaces/client.interface';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  user!: User;
  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      {
        next: (params) => {
          this.usersService.getUser(params['id'])
          .subscribe({
            next: (user) => this.user=user,
            error: (error) => console.log(error)
          })
        },
        error: (error) => console.log(error)
      }
    )
  }

}
