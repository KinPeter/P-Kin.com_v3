import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LoadingService {
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private progresses: boolean[] = [];

  constructor() {}

  public getStatus(): Observable<boolean> {
    return this.isLoading.asObservable();
  }

  public start(): void {
    this.isLoading.next(true);
    this.progresses.push(true);
  }

  public stop(): void {
    if (this.progresses.length === 0) {
      this.isLoading.next(false);
    } else if (this.progresses.length === 1) {
      this.progresses.pop();
      this.isLoading.next(false);
    } else {
      this.progresses.pop();
    }
  }
}
