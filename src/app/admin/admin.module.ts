import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from '~/app/admin/admin-routing.module';
import { MdEditorComponent } from '~/app/admin/components/md-editor.component';
import { SharedModule } from '~/app/shared.module';
import { IconsModule } from '~/app/components/shared/icons/icons.module';
import { LoginComponent } from '~/app/admin/pages/login.component';
import { AboutAdminComponent } from '~/app/admin/pages/about-admin.component';
import { AuthService } from '~/app/admin/services/auth.service';
import { AdminApiService } from '~/app/admin/services/admin-api.service';
import { AdminComponent } from '~/app/admin/components/admin.component';
import { AdminMenuBarComponent } from '~/app/admin/components/admin-menu-bar.component';
import { WebdevFiltersAdminComponent } from '~/app/admin/pages/webdev-filters-admin.component';
import { WebdevPortfolioAdminComponent } from '~/app/admin/pages/webdev-portfolio-admin.component';
import { PensAdminComponent } from '~/app/admin/pages/pens-admin.component';
import { GameAnd3dFiltersAdminComponent } from '~/app/admin/pages/game-and-3d-filters-admin.component';
import { GameAnd3dPortfolioAdminComponent } from '~/app/admin/pages/game-and-3d-portfolio-admin.component';
import { AdminAboutService } from '~/app/admin/services/admin-about.service';
import { AdminWebdevService } from '~/app/admin/services/admin-webdev.service';
import { AdminGameAnd3dService } from '~/app/admin/services/admin-game-and-3d.service';
import { PortfolioItemListComponent } from '~/app/admin/components/portfolio-item-list.component';
import { AdminPensService } from '~/app/admin/services/admin-pens.service';

@NgModule({
  declarations: [
    AdminComponent,
    MdEditorComponent,
    LoginComponent,
    AboutAdminComponent,
    AdminMenuBarComponent,
    WebdevFiltersAdminComponent,
    WebdevPortfolioAdminComponent,
    PensAdminComponent,
    GameAnd3dFiltersAdminComponent,
    GameAnd3dPortfolioAdminComponent,
    PortfolioItemListComponent,
  ],
  imports: [CommonModule, SharedModule, IconsModule, FormsModule, AdminRoutingModule],
  providers: [
    AuthService,
    AdminApiService,
    AdminAboutService,
    AdminWebdevService,
    AdminGameAnd3dService,
    AdminPensService,
  ],
})
export class AdminModule {}
