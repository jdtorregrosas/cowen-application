import { Component, Input } from '@angular/core';
import { User } from 'src/app/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input()
  user: User | undefined = undefined;
}
