import { NgModule } from '@angular/core';
import { IconThemesComponent } from './icon-themes.component';
import { IconLinkedinComponent } from '~/app/components/shared/icons/icon-linkedin.component';
import { IconFacebookComponent } from '~/app/components/shared/icons/icon-facebook.component';
import { IconSkypeComponent } from '~/app/components/shared/icons/icon-skype.component';
import { IconGithubComponent } from '~/app/components/shared/icons/icon-github.component';
import { IconEmailComponent } from '~/app/components/shared/icons/icon-email.component';
import { IconCodepenComponent } from '~/app/components/shared/icons/icon-codepen.component';
import { IconHeartComponent } from '~/app/components/shared/icons/icon-heart.component';

@NgModule({
  declarations: [
    IconThemesComponent,
    IconLinkedinComponent,
    IconFacebookComponent,
    IconSkypeComponent,
    IconGithubComponent,
    IconEmailComponent,
    IconCodepenComponent,
    IconHeartComponent,
  ],
  exports: [
    IconThemesComponent,
    IconLinkedinComponent,
    IconFacebookComponent,
    IconSkypeComponent,
    IconGithubComponent,
    IconEmailComponent,
    IconCodepenComponent,
    IconHeartComponent,
  ],
})
export class IconsModule {}
