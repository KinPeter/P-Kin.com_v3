import { NgModule } from '@angular/core';

import { MarkedPipe } from '~/app/pipes/marked.pipe';
import { LinksTargetBlankDirective } from '~/app/directives/links-target-blank.directive';

@NgModule({
  declarations: [MarkedPipe, LinksTargetBlankDirective],
  exports: [MarkedPipe, LinksTargetBlankDirective],
})
export class SharedModule {}
