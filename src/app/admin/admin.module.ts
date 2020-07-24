import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from '~/app/admin/admin-routing.module';
import { MdEditorComponent } from '~/app/admin/components/md-editor.component';
import { SharedModule } from '~/app/shared.module';
import { IconsModule } from '../components/shared/icons/icons.module';
import { LoginComponent } from './pages/login.component';
import { AboutAdminComponent } from './pages/about-admin.component';
import { AuthService } from './services/auth.service';
import { AdminApiService } from './services/admin-api.service';
import { AdminComponent } from './components/admin.component';
import { AdminMenuBarComponent } from './components/admin-menu-bar.component';
import { WebdevFiltersAdminComponent } from './pages/webdev-filters-admin.component';
import { WebdevPortfolioAdminComponent } from './pages/webdev-portfolio-admin.component';
import { PensAdminComponent } from './pages/pens-admin.component';
import { GameAnd3dFiltersAdminComponent } from './pages/game-and-3d-filters-admin.component';
import { GameAnd3dPortfolioAdminComponent } from './pages/game-and-3d-portfolio-admin.component';
import { AdminAboutService } from './services/admin-about.service';

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
  ],
  imports: [CommonModule, SharedModule, IconsModule, FormsModule, AdminRoutingModule],
  providers: [AuthService, AdminApiService, AdminAboutService],
})
export class AdminModule {}
