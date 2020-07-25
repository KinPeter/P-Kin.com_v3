import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AboutResource } from '~/app/types/content/AboutResource';
import { AdminApiService } from '~/app/admin/services/admin-api.service';
import { AuthService } from '~/app/admin/services/auth.service';

@Injectable()
export class AdminAboutService {
  private content: Subject<AboutResource> = new Subject<AboutResource>();
  public content$: Observable<AboutResource> = this.content.asObservable();

  constructor(private api: AdminApiService, private auth: AuthService) {}

  public async fetch(): Promise<void> {
    const res = await this.api.get<AboutResource>('/about.json');
    this.content.next(res);
  }

  public async save(data: AboutResource): Promise<void> {
    const res = await this.api.put<AboutResource, AboutResource>(
      `/about.json?auth=${this.auth.idToken}`,
      data
    );
    this.content.next(res);
  }
}
