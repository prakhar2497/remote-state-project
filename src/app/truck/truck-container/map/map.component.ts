import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() selectedCategoryList: any[];
  lat =  30.757734298706055;
  lng = 76.1325454711914;
  location: Location;
  constructor() { }

  ngOnInit(): void {
  }

}
