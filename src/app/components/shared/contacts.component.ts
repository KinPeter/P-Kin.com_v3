import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'pk-contacts',
  template: `
    <div class="contacts">
      <a class="contact-button button-vertical-animated" [href]="ctc.email" target="_blank">
        <pk-icon-email class="contact-button__icon" [class.contact-button__icon_hovered]="hovered"></pk-icon-email>
      </a>
      <a class="contact-button button-vertical-animated" [href]="ctc.linkedIn" target="_blank">
        <pk-icon-linkedin
          class="contact-button__icon"
          [class.contact-button__icon_hovered]="hovered"
        ></pk-icon-linkedin>
      </a>
      <a class="contact-button button-vertical-animated" [href]="ctc.github" target="_blank">
        <pk-icon-github class="contact-button__icon" [class.contact-button__icon_hovered]="hovered"></pk-icon-github>
      </a>
      <a class="contact-button button-vertical-animated" [href]="ctc.codePen" target="_blank">
        <pk-icon-codepen class="contact-button__icon" [class.contact-button__icon_hovered]="hovered"></pk-icon-codepen>
      </a>
      <a class="contact-button button-vertical-animated" [href]="ctc.skype" target="_blank">
        <pk-icon-skype class="contact-button__icon" [class.contact-button__icon_hovered]="hovered"></pk-icon-skype>
      </a>
      <a class="contact-button button-vertical-animated" [href]="ctc.facebook" target="_blank">
        <pk-icon-facebook
          class="contact-button__icon"
          [class.contact-button__icon_hovered]="hovered"
        ></pk-icon-facebook>
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
export class ContactsComponent implements OnInit {
  @Input() hovered = false;

  constructor(private sanitizer: DomSanitizer) {}

  public ctc = {
    email: 'mailto:kinpeter85@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/peter-kin-6b7794172/',
    github: 'https://github.com/KinPeter',
    codePen: 'https://codepen.io/kinpeter',
    skype: this.sanitizer.bypassSecurityTrustUrl('skype:kinpeter?chat'),
    facebook: 'https://www.facebook.com/peter.kin',
  };

  ngOnInit(): void {}
}
