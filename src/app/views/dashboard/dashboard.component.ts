import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  public welcomeText = 'Welcome to the Sonect';
  public descriptionText = 'Withdrawing cash has just gotten a whole lot easier.';
  public howItWorks = 'See how it works';
  public howItWorksLink = 'https://youtu.be/JYEtEWdvYBE';

  constructor() { }

  ngOnInit() {
  }

}
