import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Album } from '../model/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private albumsPath = '/albums'
  constructor(private http: HttpClient) { }

  getAlbumsByUserId(userId: string): Observable<Album[]> {
    const params = new HttpParams().set('userId', userId);
    return this.http.get<Album[]>(`${environment.apiBaseUrl}${this.albumsPath}`, { params });
  }

  getAlbumById(albumId: string): Observable<Album | undefined> {
    return this.http.get<Album>(`${environment.apiBaseUrl}${this.albumsPath}/${albumId}`);
  }

  createAlbum(userId: string, title: string){
    return this.http.post(`${environment.apiBaseUrl}${this.albumsPath}`, {userId, title});
  }
}
