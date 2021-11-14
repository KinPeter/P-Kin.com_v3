import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '~/app/pages/about.component';
import { WebDevComponent } from '~/app/pages/web-dev.component';
import { PensComponent } from '~/app/pages/pens.component';
import { GameDevComponent } from '~/app/pages/game-dev.component';
import { ErrorComponent } from '~/app/pages/error.component';

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
    path: 'game-dev',
    component: GameDevComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: '**',
    redirectTo: '/about',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
