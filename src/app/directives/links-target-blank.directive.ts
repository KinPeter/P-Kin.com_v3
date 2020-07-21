import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[linksTargetBlank]' })
export class LinksTargetBlankDirective {
  constructor(el: ElementRef) {
    setTimeout(() => {
      const links: NodeListOf<HTMLAnchorElement> = el.nativeElement.querySelectorAll('a');
      links.forEach(link => {
        link.setAttribute('target', '_blank');
      });
    }, 0);
  }
}
