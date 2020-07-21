import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '~/app/services/api/api.service';
import { PenItem } from '~/app/types/content/PenItem';
import { PensResource } from '~/app/types/content/PensResource';

@Injectable({ providedIn: 'root' })
export class PensService {
  public isContentLoaded = false;

  private items = new BehaviorSubject<PenItem[]>([]);

  public items$ = this.items.asObservable();

  constructor(private api: ApiService) {}

  public async fetchIfNeeded(): Promise<void> {
    if (!this.isContentLoaded) {
      const res = await this.api.get<PensResource>('/pens.json');
      this.items.next(res);
      this.isContentLoaded = true;
    }
  }
}
