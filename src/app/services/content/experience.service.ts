import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '~/app/services/api/api.service';
import { TextContentManager } from '~/app/lib/content/text-content-manager';

@Injectable({ providedIn: 'root' })
export class ExperienceService extends TextContentManager {
  public experience$ = this.currentContent.asObservable();

  constructor(private apiService: ApiService, private translateService: TranslateService) {
    super(apiService, translateService, 'experience/experience');
  }
}
