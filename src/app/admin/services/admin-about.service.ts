import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AboutResource } from '~/app/types/content/AboutResource';
import { AdminApiService } from './admin-api.service';

@Injectable()
export class AdminAboutService {
  private content: Subject<AboutResource> = new Subject<AboutResource>();
  public content$: Observable<AboutResource> = this.content.asObservable();

  constructor(private api: AdminApiService) {}

  public async fetch(): Promise<void> {
    const res = await this.api.get<AboutResource>('/about.json');
    this.content.next(res);
  }
}
