import { TestBed, async, inject } from '@angular/core/testing';

import { Guard } from './.guard';

describe('Guard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Guard]
    });
  });

  it('should ...', inject([Guard], (guard: Guard) => {
    expect(guard).toBeTruthy();
  }));
});