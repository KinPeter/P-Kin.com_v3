import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PortfolioItem } from '~/app/types/content/PortfolioItem';
import { UUID } from '~/app/types/UUID';

@Component({
  selector: 'pk-portfolio-card',
  template: `
    <div class="portfolio-card">
      <div class="portfolio-card-background" [ngStyle]="{ backgroundImage: 'url(' + item?.image + ')' }"></div>
      <div class="portfolio-card-overlay">
        <h1>{{ item?.name }}</h1>
        <div class="portfolio-card-overlay__badges">
          <div *ngFor="let badge of item?.badges" class="portfolio-badge">{{ badge }}</div>
        </div>
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

      .portfolio-card:hover .portfolio-card-overlay {
        height: 100%;
      }

      .portfolio-card:hover .portfolio-card-overlay__badges {
        display: flex;
      }

      .portfolio-card:hover .portfolio-badge {
        animation: blurUpAndFade 0.2s 0.2s forwards;
      }

      .portfolio-card:hover .portfolio-card-background {
        transform: scale(1.1);
      }
    `,
  ],
})
export class PortfolioCardComponent implements OnInit {
  @Input() item: PortfolioItem | undefined;

  @Output() openItem: EventEmitter<UUID> = new EventEmitter<UUID>();

  constructor() {}

  onOpen(): void {
    this.openItem.emit(this.item?.id);
  }

  ngOnInit(): void {}
}
