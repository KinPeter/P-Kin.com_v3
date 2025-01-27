import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { PortfolioItem } from '~/app/types/content/PortfolioItem';

@Component({
  selector: 'pk-portfolio-card',
  template: `
    <div
      class="portfolio-card"
      tabindex="0"
      #card
      (focus)="onFocus()"
      (blur)="onBlur()"
      (keyup.enter)="onOpen()"
    >
      <div
        class="portfolio-card-background"
        [ngStyle]="{ backgroundImage: 'url(' + item?.image + ')' }"
      ></div>
      <div class="portfolio-card-overlay">
        <h1>{{ item?.name }}</h1>
        <div class="portfolio-card-overlay__badges">
          <div *ngFor="let badge of item?.badges" class="portfolio-badge">{{ badge }}</div>
        </div>
        <button class="portfolio-card-overlay__button" (click)="onOpen()" tabindex="-1">
          {{ 'c.portfolio-card.show-more' | translate }}
        </button>
      </div>
      <div class="portfolio-card-ribbon" *ngIf="item?.badges?.includes('In Progress')">
        <span>{{ 'c.portfolio-card.in-progress' | translate }}</span>
      </div>
    </div>
  `,
  styles: [
    `
      .portfolio-card {
        height: 320px;
        width: 320px;
        position: relative;
        margin: 5px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        overflow: hidden;
      }

      .portfolio-card-background {
        height: 100%;
        width: 100%;
        transition: all 0.3s 0.1s ease;
      }

      .portfolio-card-background {
        background-color: var(--background-color-secondary);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }

      .portfolio-card-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: var(--background-color-transparent);
        backdrop-filter: blur(4px);
        padding: 0.5rem;
        transition: all 0.3s ease;
      }

      .portfolio-card-overlay h1 {
        margin: 0 0 0.5rem;
        font-size: 1.5rem;
        color: var(--text-color);
        text-align: center;
      }

      .portfolio-card-overlay__badges {
        display: none;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
      }

      .portfolio-badge {
        background: var(--color-accent-light);
        padding: 2px 8px;
        margin: 4px 2px;
        font-size: 0.7rem;
        color: black;
        user-select: none;
        opacity: 0;
      }

      .portfolio-card-overlay__button {
        display: none;
        opacity: 0;
        outline: none;
        background: transparent;
        text-transform: uppercase;
        padding: 0.7rem 1.2rem;
        margin-top: 1rem;
        border: 2px solid var(--color-accent-light);
        color: var(--color-accent);
        cursor: pointer;
        position: relative;
      }

      .portfolio-card-overlay__button::before,
      .portfolio-card-overlay__button::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 50%;
        height: 0;
        background: var(--color-accent);
        opacity: 0.1;
      }

      .portfolio-card-overlay__button::before {
        left: 0;
        transition: all 0.2s ease;
      }

      .portfolio-card-overlay__button::after {
        right: 0;
        transition: all 0.2s 0.1s ease;
      }

      .portfolio-card-overlay__button:hover.portfolio-card-overlay__button::before,
      .portfolio-card-overlay__button:hover.portfolio-card-overlay__button::after {
        height: 100%;
      }

      .portfolio-card:hover .portfolio-card-overlay,
      .portfolio-card.hover-effect .portfolio-card-overlay {
        height: 100%;
      }

      .portfolio-card:hover .portfolio-card-overlay__badges,
      .portfolio-card.hover-effect .portfolio-card-overlay__badges {
        display: flex;
      }

      .portfolio-card:hover .portfolio-badge,
      .portfolio-card.hover-effect .portfolio-badge {
        animation: blurUpAndFade 0.2s 0.2s ease forwards;
      }

      .portfolio-card:hover .portfolio-card-overlay__button,
      .portfolio-card.hover-effect .portfolio-card-overlay__button {
        display: block;
        animation: blurUpAndFade 0.2s 0.4s ease forwards;
      }

      .portfolio-card:hover .portfolio-card-background,
      .portfolio-card.hover-effect .portfolio-card-background {
        transform: scale(1.1);
      }

      .portfolio-card-ribbon {
        position: absolute;
        top: 38px;
        right: -95px;
        width: 300px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: rotate(45deg);
        background: yellow;
        color: black;
        font-weight: bold;
        border: 2px solid black;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
        text-transform: uppercase;
        user-select: none;
      }
    `,
  ],
})
export class PortfolioCardComponent {
  @Input() item: PortfolioItem | undefined;
  @Output() openItem: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('card') card: ElementRef<HTMLDivElement> | undefined;

  constructor() {}

  onOpen(): void {
    this.openItem.emit(this.item?.id);
  }

  onFocus(): void {
    this.card?.nativeElement.classList.add('hover-effect');
  }

  onBlur(): void {
    this.card?.nativeElement.classList.remove('hover-effect');
  }
}
