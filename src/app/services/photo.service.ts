import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Photo } from '../model/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private photosPath = '/photos'

  constructor(private http: HttpClient) {}

  getPhotosByAlbumId(albumId: string): Observable<Photo[]> {
    const params = new HttpParams().set('albumId', albumId);
    return this.http.get<Photo[]>(`${environment.apiBaseUrl}${this.photosPath}`, { params });
  }
}
