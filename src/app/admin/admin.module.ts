import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from '~/app/admin/pages/admin.component';
import { AdminRoutingModule } from '~/app/admin/admin-routing.module';
import { MdEditorComponent } from '~/app/admin/components/md-editor.component';
import { SharedModule } from '~/app/shared.module';

@NgModule({
  declarations: [AdminComponent, MdEditorComponent],
  imports: [CommonModule, SharedModule, FormsModule, AdminRoutingModule],
})
export class AdminModule {}
