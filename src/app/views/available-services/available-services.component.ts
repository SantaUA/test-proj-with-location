import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'available-services',
  templateUrl: './available-services.component.html',
  styleUrls: ['./available-services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvailableServicesComponent implements OnInit {
  public titleText = "Services";
  public services = [
    {
      name: 'Withdraw',
      img: 'Withdraw.png',
    },
    {
      name: 'Shop Map',
      img: 'Explore.png',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
