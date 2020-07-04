import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '~/app/pages/about.component';
import { WebDevComponent } from '~/app/pages/web-dev.component';
import { PensComponent } from '~/app/pages/pens.component';
import { GameAnd3dComponent } from '~/app/pages/game-and-3d.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/about',
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'web-dev',
    component: WebDevComponent,
  },
  {
    path: 'pens',
    component: PensComponent,
  },
  {
    path: 'game-and-3d',
    component: GameAnd3dComponent,
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
