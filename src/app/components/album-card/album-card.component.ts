import { Component, Input } from '@angular/core';
import { Album } from 'src/app/model/album.model';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent {
  @Input()
  album: Album | undefined = undefined;

  randomPicture = `https://picsum.photos/168/100?${Math.random()}`
}
