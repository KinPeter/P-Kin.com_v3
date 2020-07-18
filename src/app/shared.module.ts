import { NgModule } from '@angular/core';

import { MarkedPipe } from '~/app/pipes/marked.pipe';

@NgModule({
  declarations: [MarkedPipe],
  exports: [MarkedPipe],
})
export class SharedModule {}
