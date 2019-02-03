import { TestBed } from '@angular/core/testing';

import { PrettyUploadService } from './pretty-upload.service';

describe('PrettyUploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrettyUploadService = TestBed.get(PrettyUploadService);
    expect(service).toBeTruthy();
  });
});
