import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AdminApiService } from '~/app/admin/services/admin-api.service';
import { AuthService } from '~/app/admin/services/auth.service';
import { PensResource } from '~/app/types/content/PensResource';

@Injectable()
export class AdminPensService {
  private content: Subject<PensResource> = new Subject<PensResource>();
  public content$: Observable<PensResource> = this.content.asObservable();

  constructor(private api: AdminApiService, private auth: AuthService) {}

  public async fetch(): Promise<void> {
    const res = await this.api.get<PensResource>('/pens.json');
    this.content.next(res);
  }

  public async save(data: PensResource): Promise<void> {
    const res = await this.api.put<PensResource, PensResource>(
      `/pens.json?auth=${this.auth.idToken}`,
      data
    );
    this.content.next(res);
  }
}
