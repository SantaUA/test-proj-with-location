import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

import { UserLocation } from '../models/user-location';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private userLocationSubject: BehaviorSubject<UserLocation> = new BehaviorSubject(
    <UserLocation>{}
  );
  public readonly userLocation$: Observable<any> = this.userLocationSubject.asObservable();

  private locationSupportedSubject: BehaviorSubject<any> = new BehaviorSubject(
    true
  );
  public readonly locationSupported$: Observable<any> = this.locationSupportedSubject.asObservable();

  constructor() {
    this.reqestUserLocation();
  }

  public reqestUserLocation = () => {
    if (navigator.geolocation) {
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };

      const success = (pos: any) => {
        this.locationSupportedSubject.next(true);
        var { latitude, longitude } = pos.coords;
        this.userLocationSubject.next({ latitude, longitude });
      };

      const error = (err: any) => {
        this.locationSupportedSubject.next(false);
        console.warn(`ERROR(${err.code}): ${err.message}`);
      };
      navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
      console.log('No support for geolocation');
    }
  };

  public calculateDistanceToUser = (pointBCoords: UserLocation) => {
    const pointACoords = this.userLocationSubject.getValue();

    const pointA = {
      lat: Number(pointACoords.latitude),
      long: Number(pointACoords.longitude),
    };
    const pointB = {
      lat: Number(pointBCoords.latitude),
      long: Number(pointBCoords.longitude),
    };

    const rad = (x: any) => (x * Math.PI) / 180;

    const R = 6378137; // Earth’s mean radius in meter
    const dLat = rad(pointB.lat - pointA.lat);
    const dLong = rad(pointB.long - pointA.long);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(pointA.lat)) *
        Math.cos(rad(pointB.lat)) *
        Math.sin(dLong / 2) *
        Math.sin(dLong / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return Math.round(distance);
  };
}
