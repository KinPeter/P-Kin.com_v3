import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SvgService } from '~/app/services/content/svg.service';
import { Subscription } from 'rxjs';
import { getViewBox, stripSvg } from '~/app/lib/utils/svg';

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
export class SvgIconComponent implements OnInit, OnDestroy {
  @Input() public src!: string;
  @Input() public size = 24;

  public innerHtml?: SafeHtml;
  public viewBox = '0 0 24 24';

  private subscription = new Subscription();

  constructor(private svgService: SvgService, private domSanitizer: DomSanitizer) {}

  ngOnInit() {
    if (!this.src) {
      throw new Error('SVG Component must have a source');
    }
    this.subscription.add(
      this.svgService.getSvg(this.src).subscribe(svg => {
        const viewBox = getViewBox(svg);
        if (viewBox) {
          this.viewBox = viewBox;
        }
        const innerHtml = stripSvg(svg);
        this.innerHtml = this.domSanitizer.bypassSecurityTrustHtml(innerHtml);
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
