import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Photo } from '../model/photo.model';

import { PhotoService } from './photo.service';

describe('PhotoService', () => {
  let service: PhotoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PhotoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get photos', () => {
    const testPhotos: Photo[] = [
      {albumId: 1, id: 1, thumbnailUrl: 'www.1', title: 'photo-1', url: 'www.2'},
      {albumId: 2, id: 2, thumbnailUrl: 'www.2', title: 'photo-2', url: 'www.3'}
    ];
    const albumId = '1';

    service.getPhotosByAlbumId(albumId).subscribe(photos => {
      expect(photos.length).toBe(2);
      expect(photos).toEqual(testPhotos);
    });

    const req = httpMock.expectOne('http://jsonplaceholder.typicode.com/photos?albumId=1');
    expect(req.request.method).toBe('GET');
    req.flush(testPhotos);
  });
});
