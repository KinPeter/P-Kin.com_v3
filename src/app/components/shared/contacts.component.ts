import { Component, Input } from '@angular/core';
import { contacts } from '~/app/ts-content/contacts';
import { Contact } from '~/app/types/content/Contact';

@Component({
  selector: 'pk-contacts',
  template: `
    <div class="contacts">
      <a
        *ngFor="let ctc of contacts"
        class="contact-button button-vertical-animated"
        [href]="ctc.link"
        target="_blank"
      >
        <pk-svg
          [src]="ctc.icon"
          class="contact-button__icon"
          [class.contact-button__icon_hovered]="hovered"
        ></pk-svg>
      </a>
    </div>
  `,
  styles: [
    `
      .contacts {
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
        text-decoration: none;
        color: var(--text-color-light);
        transition: all 0.3s ease;
      }

      .contact-button__icon_hovered {
        color: var(--text-color);
      }
    `,
  ],
})
export class ContactsComponent {
  @Input() hovered = false;

  public contacts: Contact[] = contacts;

  constructor() {}
}
