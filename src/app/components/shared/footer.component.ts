import { Component } from '@angular/core';

@Component({
  selector: 'pk-footer',
  template: `
    <footer>
      <div class="footer-left">
        <small>
          With
          <pk-icon-heart [size]="14"></pk-icon-heart>
          from Budapest, © {{ currentYear }}, Peter Kin
        </small>
      </div>
      <div class="footer-right">
        <div class="contact-button button-vertical-animated">
          <pk-icon-email class="contact-button__icon"></pk-icon-email>
        </div>
        <div class="contact-button button-vertical-animated">
          <pk-icon-linkedin class="contact-button__icon"></pk-icon-linkedin>
        </div>
        <div class="contact-button button-vertical-animated">
          <pk-icon-github class="contact-button__icon"></pk-icon-github>
        </div>
        <div class="contact-button button-vertical-animated">
          <pk-icon-codepen class="contact-button__icon"></pk-icon-codepen>
        </div>
        <div class="contact-button button-vertical-animated">
          <pk-icon-skype class="contact-button__icon"></pk-icon-skype>
        </div>
        <div class="contact-button button-vertical-animated">
          <pk-icon-facebook class="contact-button__icon"></pk-icon-facebook>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      footer {
        position: fixed;
        bottom: 0;
        left: 0;
        display: none;
        width: 100vw;
        height: 52px;
        justify-content: space-between;
        align-items: center;
        padding: 0 100px;
        background: var(--background-color);
        color: var(--text-color-light);
        transition: all 0.3s ease;
      }
      @media (min-width: 912px) {
        footer {
          display: flex;
        }
      }
      footer:hover {
        background: var(--background-color-secondary);
        color: var(--text-color);
      }
      .footer-right {
        display: flex;
      }
      .contact-button {
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .contact-button__icon {
        height: 24px;
      }
      pk-icon-heart svg {
        height: 10px;
        width: 10px;
      }
    `,
  ],
})
export class FooterComponent {
  public currentYear = new Date().getFullYear();

  constructor() {}
}
