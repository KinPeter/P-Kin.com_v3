import { I18nContent } from '~/app/types/i18n/I18nContent';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '~/app/services/api/api.service';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Lang } from '~/app/types/i18n/Lang';

export class TextContentManager {
  protected readonly content: I18nContent = { hu: null, en: null };
  protected readonly currentContent = new BehaviorSubject<string>('');

  private readonly contentPath: string;
  private fetching = false;

  constructor(
    protected api: ApiService,
    protected translate: TranslateService,
    contentPath: string
  ) {
    this.contentPath = contentPath;
    this.translate.onLangChange.subscribe(e => this.updateState(e));
  }

  public async fetchIfNeeded(): Promise<void> {
    const currentLang: Lang = this.translate.currentLang as Lang;
    if (this.content[currentLang] === null && !this.fetching) {
      this.fetching = true;
      const response = await this.api.getMd(`${this.contentPath}_${currentLang}.md`);
      this.content[currentLang] = response ?? null;
      this.fetching = false;
      await this.updateState();
    }
  }

  private async updateState(event?: LangChangeEvent): Promise<void> {
    const currentLang: Lang = event ? (event.lang as Lang) : (this.translate.currentLang as Lang);
    const content = this.content[currentLang];
    if (!content) {
      await this.fetchIfNeeded();
      return;
    }
    this.currentContent.next(content);
  }
}
