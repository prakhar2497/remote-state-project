import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterSelected } from '../../model/filter-selected.enum';

@Component({
  selector: 'app-truck-filter',
  templateUrl: './truck-filter.component.html',
  styleUrls: ['./truck-filter.component.scss']
})
export class TruckFilterComponent implements OnInit {
  @Input() runningTruckCount = 0;
  @Input() stoppedTruckCount = 0;
  @Input() idleTruckCount = 0;
  @Input() errorTruckCount = 0;
  @Input() allTrucks: any[];
  @Output() filterSelectedEvent = new EventEmitter<FilterSelected>();

  constructor() { }

  ngOnInit(): void {
    this.filterSelectedEvent.emit(FilterSelected.totalTrucks);
  }

  filterChanged(filterSelected: FilterSelected): void {
    this.filterSelectedEvent.emit(filterSelected);
  }

}
