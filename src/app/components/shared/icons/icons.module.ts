import { NgModule } from '@angular/core';
import { IconThemesComponent } from '~/app/components/shared/icons/icon-themes.component';
import { IconLinkedinComponent } from '~/app/components/shared/icons/contacts/icon-linkedin.component';
import { IconFacebookComponent } from '~/app/components/shared/icons/contacts/icon-facebook.component';
import { IconSkypeComponent } from '~/app/components/shared/icons/contacts/icon-skype.component';
import { IconGithubComponent } from '~/app/components/shared/icons/contacts/icon-github.component';
import { IconEmailComponent } from '~/app/components/shared/icons/contacts/icon-email.component';
import { IconCodepenComponent } from '~/app/components/shared/icons/contacts/icon-codepen.component';
import { IconHeartComponent } from '~/app/components/shared/icons/icon-heart.component';
import { IconMdBoldComponent } from '~/app/components/shared/icons/md-editor/icon-md-bold.component';
import { IconMdItalicComponent } from '~/app/components/shared/icons/md-editor/icon-md-italic.component';
import { IconMdStrikeThroughComponent } from '~/app/components/shared/icons/md-editor/icon-md-strike-through.component';
import { IconMdCodeComponent } from '~/app/components/shared/icons/md-editor/icon-md-code.component';
import { IconMdLinkComponent } from '~/app/components/shared/icons/md-editor/icon-md-link.component';
import { IconMdImageComponent } from '~/app/components/shared/icons/md-editor/icon-md-image.component';

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
    IconMdBoldComponent,
    IconMdItalicComponent,
    IconMdStrikeThroughComponent,
    IconMdCodeComponent,
    IconMdLinkComponent,
    IconMdImageComponent,
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
    IconMdBoldComponent,
    IconMdItalicComponent,
    IconMdStrikeThroughComponent,
    IconMdCodeComponent,
    IconMdLinkComponent,
    IconMdImageComponent,
  ],
})
export class IconsModule {}
