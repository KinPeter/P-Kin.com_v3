import { Component, Input, OnInit } from '@angular/core';
import { PenItem } from '~/app/types/content/PenItem';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'pk-embedded-pen',
  template: `
    <div class="embedded-pen">
      <iframe
        class="embedded-pen__iframe"
        height="500"
        scrolling="no"
        [title]="pen.codepenTitle"
        [src]="iframeUrl"
        frameborder="no"
        allowtransparency="true"
        allowfullscreen="true"
      >
        See the Pen
        <a [href]="codepenUrl">{{ pen.codepenTitle }}</a>
        by Peter Kin (
        <a href="https://codepen.io/kinpeter">@kinpeter</a>
        ) on
        <a href="https://codepen.io">CodePen</a>
        .
      </iframe>
      <div class="embedded-pen__description">
        <h1>{{ pen.name }}</h1>
        <p>{{ pen.description }}</p>
      </div>
    </div>
  `,
  styles: [
    `
      .embedded-pen {
        width: calc(100vw - 24px);
        margin: 12px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      }

      @media (min-width: 724px) {
        .embedded-pen {
          width: 700px;
        }
      }

      .embedded-pen__iframe {
        background: var(--background-color-secondary);
        width: 100%;
      }

      .embedded-pen__description {
        background: var(--background-color-secondary);
        width: 100%;
        padding: 1rem;
        margin-top: -7px;
      }

      .embedded-pen__description h1 {
        margin: 0;
        font-size: 1.4rem;
      }

      .embedded-pen__description p {
        margin: 0;
      }
    `,
  ],
})
export class EmbeddedPenComponent implements OnInit {
  @Input() pen: PenItem = { codepenId: '', codepenTitle: '', description: '', name: '' };

  iframeUrl: string | SafeResourceUrl = '';
  codepenUrl: string | SafeUrl = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://codepen.io/kinpeter/embed/${this.pen.codepenId}?height=400&theme-id=dark&default-tab=result`
    );
    this.codepenUrl = this.sanitizer.bypassSecurityTrustUrl(`https://codepen.io/kinpeter/pen/${this.pen.codepenId}`);
  }
}
