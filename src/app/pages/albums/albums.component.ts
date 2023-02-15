import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from 'src/app/model/album.model';
import { User } from 'src/app/model/user.model';
import { AlbumService } from 'src/app/services/album.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  user: User | undefined;
  albums: Album[] | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private albumService: AlbumService
  ) { }

  ngOnInit(): void {
    const userid = this.route.snapshot.paramMap.get("userId") ?? '';
    this.userService.getUserbyId(userid).subscribe(user => {
      this.user = user;
    })
    this.albumService.getAlbumsByUserId(userid).subscribe(albums => {
      this.albums = albums;
    })
  }

  showPhotos(albumId: number) {
    this.router.navigate(['user', this.user?.id, 'album', albumId]);
  }
}
