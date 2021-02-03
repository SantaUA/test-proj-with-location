import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UserLocation } from 'src/app/shared/models/user-location';
import { LocationService } from 'src/app/shared/services/location.service';
import { ShopsListService } from './services/shops-list.service';

@Component({
  selector: 'shops-list',
  templateUrl: './shops-list.component.html',
  styleUrls: ['./shops-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopsListComponent implements OnInit {
  public shopsTitle = 'Shops nearby';
  public noShopsMessage =
    'Sorry! There seems to be no ATMs available near you.';

  constructor(
    private locationService: LocationService,
    public shopsListService: ShopsListService
  ) {
    this.locationService.userLocation$.subscribe((location: UserLocation) => {
      if (location.latitude || location.longitude) {
        this.shopsListService.requestShopsList(location);
      }
    });
  }

  ngOnInit() {}
}
