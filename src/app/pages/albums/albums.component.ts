import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ModalComponent } from 'src/app/components/modal/modal.component';
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
  @ViewChild('modal', {static: false}) modal: ModalComponent = {} as ModalComponent;
  user: User | undefined;
  albums: Album[] | undefined;
  newAlbumTitle: string = '';

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

  openModal() {
    this.modal.open();
  }

  createNewAlbum() {
    if(!this.user?.id) {
      this.router.navigate(['/error'], {replaceUrl: true});
      return;
    }
    this.albumService.createAlbum(this.user?.id, this.newAlbumTitle).pipe(catchError(error => {
      this.router.navigate(['/error'], {replaceUrl: true});
      return of();
    })).subscribe((album) => {
      this.newAlbumTitle = '';
      this.modal.close();
      this.albums?.push(album as Album);
    });
  }
}
