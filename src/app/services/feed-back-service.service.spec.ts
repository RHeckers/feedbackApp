import { TestBed, inject } from '@angular/core/testing';

import { FeedBackServiceService } from './feed-back-service.service';

describe('FeedBackServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedBackServiceService]
    });
  });

  it('should be created', inject([FeedBackServiceService], (service: FeedBackServiceService) => {
    expect(service).toBeTruthy();
  }));
});
