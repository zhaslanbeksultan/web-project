import { TestBed } from '@angular/core/testing';

import { TvchannelService } from './tvchannel.service';

describe('TvchannelService', () => {
  let service: TvchannelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvchannelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
