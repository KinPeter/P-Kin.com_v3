import { NgModule } from '@angular/core';
import { IconThemesComponent } from '~/app/components/shared/icons/icon-themes.component';
import { IconHeartComponent } from '~/app/components/shared/icons/icon-heart.component';
import { IconFilterComponent } from '~/app/components/shared/icons/icon-filter.component';
import { IconCaretRightComponent } from '~/app/components/shared/icons/icon-caret-right.component';
import { IconSadFaceComponent } from '~/app/components/shared/icons/icon-sad-face.component';
import { IconCloseComponent } from '~/app/components/shared/icons/icon-close.component';
import { IconArrowComponent } from '~/app/components/shared/icons/icon-arrow.component';
import { SvgIconComponent } from '~/app/components/shared/icons/svg-icon.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    IconThemesComponent,
    IconHeartComponent,
    IconFilterComponent,
    IconCaretRightComponent,
    IconSadFaceComponent,
    IconCloseComponent,
    IconArrowComponent,
    SvgIconComponent,
  ],
  exports: [
    IconThemesComponent,
    IconHeartComponent,
    IconFilterComponent,
    IconCaretRightComponent,
    IconSadFaceComponent,
    IconCloseComponent,
    IconArrowComponent,
    SvgIconComponent,
  ],
  imports: [CommonModule],
})
export class IconsModule {}
