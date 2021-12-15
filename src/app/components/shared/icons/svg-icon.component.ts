import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'pk-svg',
  template: `
    <svg
      *ngIf="innerHtml"
      [innerHTML]="innerHtml"
      xmlns="http://www.w3.org/2000/svg"
      [attr.viewBox]="viewBox"
      [attr.width]="size + 'px'"
      [attr.height]="size + 'px'"
    ></svg>
  `,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `,
  ],
})
export class SvgIconComponent implements OnInit {
  @Input() public src!: string;
  @Input() public size = 24;

  public innerHtml?: SafeHtml;
  public viewBox = '0 0 24 24';

  constructor(private http: HttpClient, private domSanitizer: DomSanitizer) {}

  ngOnInit() {
    if (!this.src) {
      throw new Error('SVG Component must have a source');
    }
    this.http.get(this.src, { responseType: 'text' }).subscribe(svg => {
      console.log({ svg });
      const viewBoxMatches = svg.match(/(?:viewBox=")([\d\s.]+)(?:")/);
      if (viewBoxMatches?.length) {
        this.viewBox = viewBoxMatches[1];
      }
      const innerHtml = svg
        .replace(/(<svg[^>]+>)/, '')
        .replace(/(<\/svg>)/, '')
        .trim();
      this.innerHtml = this.domSanitizer.bypassSecurityTrustHtml(innerHtml);
    });
  }
}
