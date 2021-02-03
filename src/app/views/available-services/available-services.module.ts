import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailableServicesComponent } from './available-services.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { TypographyModule } from 'src/app/shared/typography/typography.module';

@NgModule({
  imports: [
    CommonModule,
    TypographyModule
  ],
  declarations: [AvailableServicesComponent , ServiceCardComponent],
  exports: [AvailableServicesComponent, ServiceCardComponent,]
})
export class AvailableServicesModule { }
