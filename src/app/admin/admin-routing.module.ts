import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login.component';
import { AboutAdminComponent } from './pages/about-admin.component';
import { AuthGuard } from './services/auth.guard';
import { AdminComponent } from './components/admin.component';
import { WebdevFiltersAdminComponent } from './pages/webdev-filters-admin.component';
import { WebdevPortfolioAdminComponent } from './pages/webdev-portfolio-admin.component';
import { PensAdminComponent } from './pages/pens-admin.component';
import { GameAnd3dFiltersAdminComponent } from './pages/game-and-3d-filters-admin.component';
import { GameAnd3dPortfolioAdminComponent } from './pages/game-and-3d-portfolio-admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'about', component: AboutAdminComponent, canActivate: [AuthGuard] },
      { path: 'webdev-filters', component: WebdevFiltersAdminComponent, canActivate: [AuthGuard] },
      { path: 'webdev-portfolio', component: WebdevPortfolioAdminComponent, canActivate: [AuthGuard] },
      { path: 'pens', component: PensAdminComponent, canActivate: [AuthGuard] },
      { path: 'game-and-3d-filters', component: GameAnd3dFiltersAdminComponent, canActivate: [AuthGuard] },
      { path: 'game-and-3d-portfolio', component: GameAnd3dPortfolioAdminComponent, canActivate: [AuthGuard] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AdminRoutingModule {}
