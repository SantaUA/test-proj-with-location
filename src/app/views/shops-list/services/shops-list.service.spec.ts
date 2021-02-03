/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShopsListService } from './shops-list.service';

describe('Service: ShopsList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopsListService]
    });
  });

  it('should ...', inject([ShopsListService], (service: ShopsListService) => {
    expect(service).toBeTruthy();
  }));
});
