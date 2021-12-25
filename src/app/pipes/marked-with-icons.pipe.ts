import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';
import { SvgService } from '~/app/services/content/svg.service';
import { getSvg, getViewBox, stripSvg } from '~/app/lib/utils/svg';

@Pipe({
  name: 'markedWithIcons',
})
export class MarkedWithIconsPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer, private svgService: SvgService) {}

  async transform(value: string): Promise<SafeHtml> {
    if (value && value.length) {
      const markedStr = marked(value);
      let finalString = markedStr;
      const svgNames: string[] = Array.from(new Set(markedStr.match(/::\w+::/g)));
      for (const item of svgNames) {
        const name = item.replaceAll(':', '');
        const file = await this.svgService.getSvgAsync(`assets/svg/${name}.svg`);
        const innerHtml = stripSvg(file);
        const viewBox = getViewBox(file);
        const svg = getSvg(viewBox, innerHtml);
        finalString = finalString.replaceAll(item, svg);
      }
      return this.sanitizer.bypassSecurityTrustHtml(finalString);
    }
    return value;
  }
}
