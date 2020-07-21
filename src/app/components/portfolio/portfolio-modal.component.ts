import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { LoadedItem } from '~/app/types/content/LoadedItem';

@Component({
  selector: 'pk-portfolio-modal',
  template: `
    <div class="portfolio-modal-overlay" (click)="onOverlayClick($event)">
      <div class="portfolio-modal" (scroll)="onScroll()" #modal>
        <h1 class="portfolio-modal__title">{{ item?.name }}</h1>
        <div class="portfolio-modal__badges">
          <div *ngFor="let badge of item?.badges" class="portfolio-modal-badge">{{ badge }}</div>
        </div>
        <div
          class="portfolio-modal-content markdown-text"
          linksTargetBlank
          [innerHTML]="item.description | marked"
        ></div>
      </div>
      <div
        class="portfolio-modal__close-button"
        [class.portfolio-modal__close-button_scrolled]="scrolled"
        (click)="onClose()"
      >
        <span>&times;</span>
      </div>
    </div>
  `,
  styles: [
    `
      .portfolio-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(3px);
        display: flex;
        justify-content: center;
        z-index: 10;
        opacity: 0;
        animation: fadeIn 0.2s forwards;
      }

      .portfolio-modal {
        position: relative;
        background: var(--background-color-secondary);
        z-index: 11;
        opacity: 0;
        animation: blurUpAndFade 0.3s 0.1s ease forwards;
        padding: 2.5rem 0.75rem 0.75rem;
        overflow: auto;
        width: 100%;
        max-height: 100%;
      }

      .portfolio-modal__title {
        margin-bottom: 0.3rem;
      }

      .portfolio-modal__badges {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 1rem;
      }

      .portfolio-modal-badge {
        background: var(--color-accent-light);
        padding: 4px 8px;
        margin: 3px;
        font-size: 0.85rem;
        color: black;
        user-select: none;
      }

      .portfolio-modal__close-button {
        position: fixed;
        top: 0.5rem;
        right: 0.5rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        z-index: 11;
      }

      .portfolio-modal__close-button span {
        color: var(--text-color-light);
        font-weight: 300;
        font-size: 5rem;
        opacity: 0.8;
      }

      .portfolio-modal__close-button:hover {
        transform: rotate(90deg);
      }

      .portfolio-modal__close-button_scrolled {
        background: var(--background-color-transparent);
      }

      @media (min-width: 768px) {
        .portfolio-modal {
          margin-top: 3rem;
          padding: 1.5rem;
          width: 768px;
          max-height: calc(100% - 6rem);
          -ms-overflow-style: none;
        }
        .portfolio-modal::-webkit-scrollbar {
          display: none;
        }
        .portfolio-modal__close-button {
          top: 1.5rem;
          right: 2.5rem;
        }
        .portfolio-modal__close-button_scrolled {
          background: transparent;
        }
      }
    `,
  ],
})
export class PortfolioModalComponent {
  @Input() item: LoadedItem = {
    name: '',
    badges: [],
    description: '',
  };

  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('modal') modal: ElementRef<HTMLDivElement> | undefined;

  scrolled = false;

  constructor() {}

  onOverlayClick(event: MouseEvent): void {
    if (
      !event
        .composedPath()
        .map(el => (el as Element).className)
        .includes('portfolio-modal')
    ) {
      this.onClose();
    }
  }

  onClose(): void {
    this.closeModal.emit();
  }

  onScroll(): void {
    if (this.modal) {
      this.scrolled = this.modal.nativeElement.scrollTop !== 0;
    }
  }
}
