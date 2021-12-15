import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '~/app/services/api/api.service';
import { Lang } from '~/app/types/i18n/Lang';
import { techCloud } from '~/app/ts-content/techCloud';
import { techStack } from '~/app/ts-content/techStack';
import { Skill } from '~/app/types/content/Skill';

@Injectable({ providedIn: 'root' })
export class AboutService {
  public isContentLoaded = false;
  public techCloud: string[] = techCloud;
  public skills: Skill[] = techStack;

  private introductionContent: { en: string; hu: string } | undefined;
  private introduction = new BehaviorSubject<string>('');
  public introduction$ = this.introduction.asObservable();

  constructor(private api: ApiService, private translate: TranslateService) {
    this.translate.onLangChange.subscribe(() => this.updateState());
  }

  public async fetchIfNeeded(): Promise<void> {
    if (!this.isContentLoaded) {
      const [en, hu] = await Promise.all([
        this.api.getMd('about/about_en.md'),
        this.api.getMd('about/about_hu.md'),
      ]);
      if (!en || !hu) return;
      this.introductionContent = {
        en,
        hu,
      };
      this.isContentLoaded = true;
      this.updateState();
    }
  }

  private updateState(): void {
    const currentLang: Lang = this.translate.currentLang as Lang;
    if (!this.introductionContent) return;
    this.introduction.next(this.introductionContent[currentLang]);
  }
}
