import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Album } from 'src/app/model/album.model';
import { Photo } from 'src/app/model/photo.model';
import { User } from 'src/app/model/user.model';
import { AlbumService } from 'src/app/services/album.service';
import { PhotoService } from 'src/app/services/photo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
  user: User | undefined;
  album: Album | undefined;
  photos: Photo[] | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private albumService: AlbumService,
    private photoService: PhotoService
  ) { }

  ngOnInit(): void {
    // Get url params for the parent route: userId
    this.route.parent?.paramMap.subscribe(params => {
      const userId = params.get('userId') ?? '';

      // Get user by Id and save it as a local variable
      this.userService.getUserbyId(userId).subscribe(user => {
        this.user = user;
      })
    });

    // Get albumId from url
    const albumId = this.route.snapshot.paramMap.get("albumId") ?? '';

    // Get album by id and save it as local variable
    this.albumService.getAlbumById(albumId)
    .pipe(catchError(() => {

      // In case of error navigate to generic error page
      this.router.navigate(['/error'], {replaceUrl: true});
      return of();
    })).subscribe(album => {
      this.album = album;
    })

    // Get photos by album
    this.photoService.getPhotosByAlbumId(albumId).subscribe(photos => {
      this.photos = photos;
    })
  }
}
