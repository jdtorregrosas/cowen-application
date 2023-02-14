import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Album } from '../model/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  albumsPath = '/albums'
  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${environment.apiBaseUrl}${this.albumsPath}`);
  }
}
