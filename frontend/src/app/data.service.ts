import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  #cpuUsageData$ = new Subject<any>();

  constructor() { }

  getCpuUsageData(): Observable<any> {
    return this.#cpuUsageData$.asObservable()
  }

  updateCpuUsageData(data: any): void {
    this.#cpuUsageData$.next(data)
  }


}
