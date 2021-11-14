import { NgModule } from '@angular/core';
import { IconThemesComponent } from '~/app/components/shared/icons/icon-themes.component';
import { IconLinkedinComponent } from '~/app/components/shared/icons/contacts/icon-linkedin.component';
import { IconFacebookComponent } from '~/app/components/shared/icons/contacts/icon-facebook.component';
import { IconGithubComponent } from '~/app/components/shared/icons/contacts/icon-github.component';
import { IconEmailComponent } from '~/app/components/shared/icons/contacts/icon-email.component';
import { IconCodepenComponent } from '~/app/components/shared/icons/contacts/icon-codepen.component';
import { IconHeartComponent } from '~/app/components/shared/icons/icon-heart.component';
import { IconFilterComponent } from '~/app/components/shared/icons/icon-filter.component';
import { IconCaretRightComponent } from '~/app/components/shared/icons/icon-caret-right.component';
import { IconSadFaceComponent } from '~/app/components/shared/icons/icon-sad-face.component';
import { IconCloseComponent } from '~/app/components/shared/icons/icon-close.component';
import { IconArrowComponent } from '~/app/components/shared/icons/icon-arrow.component';

@NgModule({
  declarations: [
    IconThemesComponent,
    IconLinkedinComponent,
    IconFacebookComponent,
    IconGithubComponent,
    IconEmailComponent,
    IconCodepenComponent,
    IconHeartComponent,
    IconFilterComponent,
    IconCaretRightComponent,
    IconSadFaceComponent,
    IconCloseComponent,
    IconArrowComponent,
  ],
  exports: [
    IconThemesComponent,
    IconLinkedinComponent,
    IconFacebookComponent,
    IconGithubComponent,
    IconEmailComponent,
    IconCodepenComponent,
    IconHeartComponent,
    IconFilterComponent,
    IconCaretRightComponent,
    IconSadFaceComponent,
    IconCloseComponent,
    IconArrowComponent,
  ],
})
export class IconsModule {}
