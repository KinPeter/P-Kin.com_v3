import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminAboutService } from '~/app/admin/services/admin-about.service';
import { AboutResource } from '~/app/types/content/AboutResource';
import { Lang } from '~/app/types/i18n/Lang';

@Component({
  selector: 'pk-admin-about',
  template: `
    <div *ngIf="content" class="about-admin">
      <header>
        <h1>Introduction</h1>
        <button class="pk-button pk-button_accent" (click)="onSaveAll()">Save All</button>
      </header>

      <section class="introduction">
        <button
          *ngFor="let lang of languages"
          class="lang-button pk-button"
          [class.pk-button_active]="lang === currentLangToEdit"
          [class.pk-button_accent]="lang === currentLangToEdit"
          (click)="setLangToEdit(lang)"
        >
          {{ lang }}
        </button>
        <pk-md-editor
          [value]="content.introduction[currentLangToEdit]"
          (updateMd)="onMdUpdate($event, currentLangToEdit)"
        ></pk-md-editor>
      </section>

      <hr />

      <h1>Tech stack</h1>
      <section class="tech-stack">
        <ul>
          <li *ngFor="let tech of techStackArray; let i = index">
            <div class="tech-stack__values">
              <input class="pk-input" type="text" [(ngModel)]="tech[0]" />
              <input
                class="pk-range"
                type="range"
                min="0"
                max="10"
                step="1"
                [(ngModel)]="tech[1]"
              />
              <span>({{ tech[1] }})</span>
            </div>
            <div class="tech-stack__delete-btn" (click)="onDeleteSkill(i)">
              <pk-icon-trash></pk-icon-trash>
            </div>
          </li>
        </ul>
        <button class="pk-button" (click)="onAddSkill()">+ Add new skill</button>
      </section>

      <hr />

      <h1>Tech cloud</h1>
      <section class="tech-cloud">
        <textarea class="pk-input" [(ngModel)]="techCloudString"></textarea>
      </section>

      <hr />

      <button class="pk-button pk-button_accent" (click)="onSaveAll()">Save All</button>
    </div>
  `,
  styles: [
    `
      .about-admin {
        padding-bottom: 2rem;
      }

      header {
        display: flex;
        justify-content: space-between;
      }

      .lang-button {
        margin-bottom: 1rem;
      }

      pk-icon-trash {
        height: 24px;
      }

      .tech-stack ul {
        padding: 0;
      }

      .tech-stack li {
        display: flex;
        align-items: center;
        list-style-type: none;
        margin-bottom: 0.5rem;
      }

      .tech-stack__values {
        display: flex;
        align-items: center;
        width: 380px;
      }

      .tech-stack__values .pk-input,
      .tech-stack__values .pk-range {
        margin-right: 1rem;
      }

      .tech-stack__delete-btn {
        height: 36px;
        width: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        color: var(--text-color-light);
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .tech-stack__delete-btn:hover {
        color: var(--text-color);
        background-color: var(--background-color-secondary);
      }

      .tech-cloud textarea {
        width: 500px;
        height: 200px;
        min-height: 200px;
        min-width: 500px;
      }
    `,
  ],
})
export class AboutAdminComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  public content: AboutResource | undefined;
  public languages: Lang[] = [];
  public currentLangToEdit: Lang = 'en';
  public techStackArray: [string, number][] = [];
  public techCloudString = '';

  constructor(private adminAboutService: AdminAboutService) {
    this.adminAboutService.fetch();
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.adminAboutService.content$.subscribe(content => {
        this.content = content;
        this.languages = Object.keys(this.content.introduction) as Lang[];
        this.techStackArray = Object.entries(content.skills).map(([key, value]) => {
          return [key, value];
        });
        this.techCloudString = content.techCloud.join(', ');
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  onMdUpdate(value: string, lang: string): void {
    if (this.content) {
      this.content.introduction[lang as Lang] = value;
    }
  }

  setLangToEdit(lang: Lang): void {
    this.currentLangToEdit = lang;
  }

  onAddSkill(): void {
    this.techStackArray.push(['new skill', 0]);
  }

  onDeleteSkill(i: number): void {
    this.techStackArray.splice(i, 1);
  }

  onSaveAll(): void {
    if (!this.content) return;
    const newSkills = Object.fromEntries(this.techStackArray);
    const newTechCloud = this.techCloudString.split(',').map(str => str.trim());
    const data: AboutResource = {
      introduction: this.content.introduction,
      skills: newSkills,
      techCloud: newTechCloud,
    };
    console.log('DATA to save', data);
    this.adminAboutService.save(data);
  }
}
