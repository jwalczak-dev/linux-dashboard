import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  #cpuUsageData$ = new Subject<any>();
  #ramUsageData$ = new Subject<any>();
  #diskSpaceUsageData$ = new Subject<any>();
  #networkUsageData$ = new Subject<any>();

  constructor() { }

  getCpuUsageData(): Observable<any> {
    return this.#cpuUsageData$.asObservable()
  }

  updateCpuUsageData(data: any): void {
    this.#cpuUsageData$.next(data)
  }

  getRamUsageData(): Observable<any> {
    return this.#ramUsageData$.asObservable()
  }

  updateRamUsageData(data: any): void {
    this.#ramUsageData$.next(data)
  }

  getDiskSpaceUsageData(): Observable<any> {
    return this.#diskSpaceUsageData$.asObservable()
  }

  updateDiskSpaceUsageData(data: any): void {
    this.#diskSpaceUsageData$.next(data)
  }

  getNetworkUsageData(): Observable<any> {
    return this.#networkUsageData$.asObservable()
  }

  updateNetworkUsageData(data: any): void {
    this.#networkUsageData$.next(data)
  }


}
