import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '~/app/admin/pages/admin.component';
import { AdminRoutingModule } from '~/app/admin/admin-routing.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
