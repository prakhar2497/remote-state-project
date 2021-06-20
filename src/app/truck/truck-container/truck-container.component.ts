import { Component, OnInit } from '@angular/core';
import { FilterSelected } from '../model/filter-selected.enum';
import { TruckService } from '../services/truck.service';
@Component({
  selector: 'app-truck-container',
  templateUrl: './truck-container.component.html',
  styleUrls: ['./truck-container.component.scss']
})
export class TruckContainerComponent implements OnInit {
  currentlyAppliedFilter: FilterSelected = FilterSelected.totalTrucks;
  runningTrucks = [];
  stoppedTrucks = [];
  idleTrucks = [];
  errorTrucks = [];
  allTrucks = [];
  selectedCategoryList = [];
  constructor(private truckService: TruckService) { }

  ngOnInit(): void {
    this.truckService.getAllTrucks().subscribe(res => {
      this.allTrucks = res.data;
      this.selectedCategoryList = this.allTrucks;
      res.data.forEach(x => {
        if (x.lastWaypoint.ignitionOn === true && x.lastRunningState.truckRunningState === 1) {
          if (this.checkErrorTruck(x.lastWaypoint.createTime)) {
            this.errorTrucks.push(x);
          } else {
            this.runningTrucks.push(x);
          }
        } else if (x.lastWaypoint.ignitionOn === false && x.lastRunningState.truckRunningState === 0) {
          if (this.checkErrorTruck(x.lastWaypoint.createTime)) {
            this.errorTrucks.push(x);
          } else {
            this.stoppedTrucks.push(x);
          }
        } else if (x.lastWaypoint.ignitionOn === true && x.lastRunningState.truckRunningState === 0) {
          if (this.checkErrorTruck(x.lastWaypoint.createTime)) {
            this.errorTrucks.push(x);
          } else {
            this.idleTrucks.push(x);
          }
        }
        else {
          this.errorTrucks.push(x);
        }
      });
    });
  }

  checkErrorTruck(lastUpdatedTime: any): boolean {
    if (new Date(Date.now() - lastUpdatedTime).getHours() > 4) {
      return true;
    }
    return false;
  }

  filterChange(selectedFilter: FilterSelected): void{
    this.currentlyAppliedFilter = selectedFilter;
    switch (this.currentlyAppliedFilter) {
      case (FilterSelected.runningTrucks): {
        this.selectedCategoryList = this.runningTrucks;
        break;
      }
      case (FilterSelected.stoppedTrucks): {
        this.selectedCategoryList = this.stoppedTrucks;
        break;
      }
      case (FilterSelected.idleTrucks): {
        this.selectedCategoryList = this.idleTrucks;
        break;
      }
      case (FilterSelected.errorTrucks): {
        this.selectedCategoryList = this.errorTrucks;
        break;
      }
      default: {
        this.selectedCategoryList = this.allTrucks;
      }
    }
  }

}
