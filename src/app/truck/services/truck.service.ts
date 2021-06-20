import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class TruckService {

  constructor(private httpClient: HttpClient) { }

  getAllTrucks(): Observable<any>{
    const url = `https://api.mystral.in/tt/mobile/logistics/searchTrucks?auth-company=PCH&companyId=33&deactivated=false&key=g2qb5jvucg7j8skpu5q7ria0mu&q-expand=true&q-include=lastRunningState,lastWaypoint`;
    return this.httpClient.get<any>(url);
  }
}
