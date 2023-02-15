import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AlbumService } from './album.service';

describe('AlbumService', () => {
  let service: AlbumService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(AlbumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
