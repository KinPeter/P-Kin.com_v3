import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from '~/app/admin/admin-routing.module';
import { MdEditorComponent } from '~/app/admin/components/md-editor.component';
import { SharedModule } from '~/app/shared.module';
import { IconsModule } from '../components/shared/icons/icons.module';
import { LoginComponent } from './pages/login.component';

@NgModule({
  declarations: [AdminComponent, MdEditorComponent, LoginComponent],
  imports: [CommonModule, SharedModule, IconsModule, FormsModule, AdminRoutingModule],
})
export class AdminModule {}
