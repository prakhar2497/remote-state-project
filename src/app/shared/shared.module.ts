import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MultiSelectModule} from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MultiSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAfKAb3_5NSyqM1R17lwOoVjy1XbcEcvus'
    })
  ],
  exports: [
    MultiSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    AgmCoreModule
  ]
})
export class SharedModule { }
