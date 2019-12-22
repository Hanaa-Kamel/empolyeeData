import { TestBed } from '@angular/core/testing';

import { InsertUserService } from './insert-user.service';

describe('InsertUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsertUserService = TestBed.get(InsertUserService);
    expect(service).toBeTruthy();
  });
});
