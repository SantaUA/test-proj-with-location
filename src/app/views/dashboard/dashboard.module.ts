import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TypographyModule } from 'src/app/shared/typography/typography.module';
import { AvailableServicesModule } from '../available-services/available-services.module';
import { ShopsListModule } from '../shops-list/shops-list.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TypographyModule,
    AvailableServicesModule,
    ShopsListModule
  ],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
