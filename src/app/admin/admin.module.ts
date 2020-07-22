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

@NgModule({
  declarations: [MdEditorComponent, LoginComponent, AboutAdminComponent],
  imports: [CommonModule, SharedModule, IconsModule, FormsModule, AdminRoutingModule],
  providers: [AuthService],
})
export class AdminModule {}
