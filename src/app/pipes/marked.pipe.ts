import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';

@Pipe({
  name: 'marked',
})
export class MarkedPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    if (value && value.length) {
      return this.sanitizer.bypassSecurityTrustHtml(marked(value));
    }
    return value;
  }
}
