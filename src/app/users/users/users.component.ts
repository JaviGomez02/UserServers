import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/servers/interfaces/client.interface';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  users!: User[]
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers()
    .subscribe({
      next: resp => this.users=resp,
      error: (error)=> console.log(error)
    })
  }

}
