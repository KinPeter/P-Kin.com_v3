import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '~/app/admin/pages/login.component';
import { AboutAdminComponent } from '~/app/admin/pages/about-admin.component';
import { AuthGuard } from '~/app/admin/services/auth.guard';
import { AdminComponent } from '~/app/admin/admin.component';
import { WebdevFiltersAdminComponent } from '~/app/admin/pages/webdev-filters-admin.component';
import { WebdevPortfolioAdminComponent } from '~/app/admin/pages/webdev-portfolio-admin.component';
import { PensAdminComponent } from '~/app/admin/pages/pens-admin.component';
import { GameDevFiltersAdminComponent } from './pages/game-dev-filters-admin.component';
import { GameDevPortfolioAdminComponent } from './pages/game-dev-portfolio-admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'about', component: AboutAdminComponent, canActivate: [AuthGuard] },
      { path: 'webdev-filters', component: WebdevFiltersAdminComponent, canActivate: [AuthGuard] },
      {
        path: 'webdev-portfolio',
        component: WebdevPortfolioAdminComponent,
        canActivate: [AuthGuard],
      },
      { path: 'pens', component: PensAdminComponent, canActivate: [AuthGuard] },
      {
        path: 'game-dev-filters',
        component: GameDevFiltersAdminComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'game-dev-portfolio',
        component: GameDevPortfolioAdminComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AdminRoutingModule {}
