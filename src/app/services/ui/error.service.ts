import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ErrorService {
  private message: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public message$: Observable<string> = this.message.asObservable();

  constructor(private router: Router) {}

  reportError(message: string): void {
    this.message.next(message);
    this.router.navigate(['/error']);
  }
}
