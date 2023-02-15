import { Component, Input } from '@angular/core';
import { Photo } from 'src/app/model/photo.model';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent {
  @Input()
  photo: Photo | undefined = undefined;
}
