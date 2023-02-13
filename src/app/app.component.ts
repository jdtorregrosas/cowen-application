import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cowen-application';
  users$: Observable<User[]>;
  constructor(private userService: UserService) {
    this.users$ = this.userService.getUsers();
  }
}
