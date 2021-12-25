import { Injectable } from '@angular/core';
import { techCloud } from '~/app/ts-content/techCloud';
import { techStack } from '~/app/ts-content/techStack';
import { Skill } from '~/app/types/content/Skill';
import { TextContentManager } from '~/app/lib/content/text-content-manager';
import { ApiService } from '~/app/services/api/api.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class AboutService extends TextContentManager {
  public readonly techCloud: string[] = techCloud;
  public readonly skills: Skill[] = techStack;

  public introduction$ = this.currentContent.asObservable();

  constructor(private apiService: ApiService, private translateService: TranslateService) {
    super(apiService, translateService, 'about/about');
  }
}
