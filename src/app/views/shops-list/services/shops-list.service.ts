import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { UserLocation } from 'src/app/shared/models/user-location';

import { HttpService } from 'src/app/shared/services/http.service';
import { LocationService } from 'src/app/shared/services/location.service';
import { Shop } from '../models/shop';

@Injectable({
  providedIn: 'root',
})
export class ShopsListService {
  private readonly atmServiceUrl = 'atm/inRange';

  public locationSupported = true;

  private shopsListSubject: Subject<Shop[]> = new Subject();
  public readonly shopsList$: Observable<
    Shop[]
  > = this.shopsListSubject.asObservable();

  private requestPendingSubject: BehaviorSubject<{
    loading: any;
  }> = new BehaviorSubject({ loading: true });
  public readonly requestPending$: Observable<{
    loading: boolean;
  }> = this.requestPendingSubject.asObservable();

  constructor(
    private httpService: HttpService,
    private locationService: LocationService
  ) {
    this.locationService.locationSupported$.subscribe(
      (status) => (this.requestPendingSubject.next(status))
    );
  }

  public calculateDistance = (shop: Shop) => {
    const shopCoords: UserLocation = {
      latitude: shop.location[1],
      longitude: shop.location[0],
    };
    return this.locationService.calculateDistanceToUser(shopCoords);
  };

  public requestShopsList = (userLocation: any) => {
    this.requestPendingSubject.next({ loading: true });

    const { latitude, longitude } = userLocation;
    this.httpService
      .get(this.atmServiceUrl, { latitude, longitude, range: '3000' })
      .subscribe(
        (data: any) => {
          const shops: Shop[] = data.payload;
          shops.forEach(
            (shop) => (shop.distance = this.calculateDistance(shop))
          );
          shops.sort((a, b) => a.distance - b.distance);

          this.requestPendingSubject.next({ loading: false });
          this.shopsListSubject.next(shops);
        },
        (err) => this.requestPendingSubject.next({ loading: false })
      );
  };
}
