import { TestBed } from '@angular/core/testing';

import { NgxUserSignatureService } from './ngx-user-signature.service';

describe('NgxUserSignatureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxUserSignatureService = TestBed.get(NgxUserSignatureService);
    expect(service).toBeTruthy();
  });
});
