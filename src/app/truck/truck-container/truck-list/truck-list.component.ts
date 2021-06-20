import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FilterSelected } from '../../model/filter-selected.enum';

@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.component.html',
  styleUrls: ['./truck-list.component.scss']
})
export class TruckListComponent implements OnInit, OnChanges {

  @Input() allTrucks = [];
  @Input() runningTrucks = [];
  @Input() stoppedTrucks = [];
  @Input() idleTrucks = [];
  @Input() errorTrucks = [];
  @Input() filterSelected: FilterSelected = FilterSelected.totalTrucks;

  showAllTrucks = true;
  showRunningTrucks = false;
  showStoppedTrucks = false;
  showIdleTrucks = false;
  showErrorTrucks = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    switch (this.filterSelected) {
      case (FilterSelected.runningTrucks): {
        this.showRunningTrucks = true;
        this.showAllTrucks = false;
        this.showStoppedTrucks = false;
        this.showIdleTrucks = false;
        this.showErrorTrucks = false;
        break;
      }
      case (FilterSelected.stoppedTrucks): {
        this.showStoppedTrucks = true;
        this.showRunningTrucks = false;
        this.showAllTrucks = false;
        this.showIdleTrucks = false;
        this.showErrorTrucks = false;
        break;
      }
      case (FilterSelected.idleTrucks): {
        this.showIdleTrucks = true;
        this.showRunningTrucks = false;
        this.showAllTrucks = false;
        this.showStoppedTrucks = false;
        this.showErrorTrucks = false;
        break;
      }
      case (FilterSelected.errorTrucks): {
        this.showErrorTrucks = true;
        this.showRunningTrucks = false;
        this.showAllTrucks = false;
        this.showStoppedTrucks = false;
        this.showIdleTrucks = false;
        break;
      }
      default: {
        this.showErrorTrucks = false;
        this.showRunningTrucks = true;
        this.showAllTrucks = true;
        this.showStoppedTrucks = false;
        this.showIdleTrucks = false;
      }
    }
  }

  getTimeDifference(time: any): string {
    if (new Date(Date.now() - time).getDate() === 1) {
      if (new Date(Date.now() - time).getHours() === 1) {
        return new Date(Date.now() - time).getMinutes() + 'mins';
      }
      return new Date(Date.now() - time).getHours() + 'hr';
    }
    return new Date(Date.now() - time).getDate() + 'd';
  }

  getStatus(truck: any): string {
    if (truck.lastRunningState.truckRunningState === 1){
      return 'Running since last ' + this.getTimeDifference(truck.lastRunningState.stopStartTime);
    }
    return 'Stopped since last ' + this.getTimeDifference(truck.lastRunningState.stopStartTime);
  }
}
