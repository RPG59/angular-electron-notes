import { TestBed, inject } from '@angular/core/testing';

import { ElectronApiService } from './electron-api.service';

describe('ElectronApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElectronApiService]
    });
  });

  it('should be created', inject([ElectronApiService], (service: ElectronApiService) => {
    expect(service).toBeTruthy();
  }));
});
