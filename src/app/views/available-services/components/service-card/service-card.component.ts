import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceCardComponent implements OnInit {
  @Input('serviceName') serviceName: string = '';
  @Input('imgName') imgName: string = '';

  constructor() { }

  ngOnInit() {
  }

}
