import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  title = 'cowen-application';
  users: User[] = [];
  filteredUsers: User[] = [];
  searchName: string = '';
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      this.filteredUsers = users;
    });
  }

  onChangeSearchName(newValue: string) {
    this.filteredUsers = this.users.filter((user) => user.name.toLowerCase().indexOf(newValue.toLocaleLowerCase()) > -1);
  }

  onUserClick(userId: string) {
    this.router.navigate([`/user/${userId}`])
  }
}
