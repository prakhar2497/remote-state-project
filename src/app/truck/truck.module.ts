import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckFilterComponent } from './truck-container/truck-filter/truck-filter.component';
import { TruckContainerComponent } from './truck-container/truck-container.component';
import { TruckListComponent } from './truck-container/truck-list/truck-list.component';
import { MapComponent } from './truck-container/map/map.component';
import { TruckService } from './services/truck.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TruckFilterComponent, TruckContainerComponent, TruckListComponent, MapComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [TruckContainerComponent],
  providers: [TruckService]
})
export class TruckModule { }
