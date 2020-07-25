import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AdminApiService } from '~/app/admin/services/admin-api.service';
import { AuthService } from '~/app/admin/services/auth.service';
import { PortfolioResource } from '~/app/types/content/PortfolioResource';
import { PortfolioItem } from '~/app/types/content/PortfolioItem';

@Injectable()
export class AdminWebdevService {
  private content: Subject<PortfolioResource> = new Subject<PortfolioResource>();
  public content$: Observable<PortfolioResource> = this.content.asObservable();

  constructor(private api: AdminApiService, private auth: AuthService) {}

  public async fetch(): Promise<void> {
    const res = await this.api.get<PortfolioResource>('/webdev.json');
    this.content.next(res);
  }

  public async saveFilters(data: string[]): Promise<void> {
    const res = await this.api.put<string[], string[]>(
      `/webdev/filters.json?auth=${this.auth.idToken}`,
      data
    );
    console.log('saveFilters RES:', res);
    await this.fetch();
  }

  public async savePortfolio(data: PortfolioItem[]): Promise<void> {
    const res = await this.api.put<PortfolioItem[], PortfolioItem[]>(
      `/webdev/portfolio.json?auth=${this.auth.idToken}`,
      data
    );
    console.log('savePortfolio RES:', res);
    await this.fetch();
  }
}
