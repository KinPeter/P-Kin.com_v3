import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '~/app/pages/about.component';
import { ProjectsComponent } from '~/app/pages/projects.component';
import { PensComponent } from '~/app/pages/pens.component';
import { ExperienceComponent } from '~/app/pages/experience.component';
import { ErrorComponent } from '~/app/pages/error.component';
import { RoutePath } from '~/app/types/enums/RoutePath';
import { routerLinks } from '~/app/constants/routerLinks';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: routerLinks.ABOUT,
  },
  {
    path: RoutePath.ABOUT,
    component: AboutComponent,
  },
  {
    path: RoutePath.EXPERIENCE,
    component: ExperienceComponent,
  },
  {
    path: RoutePath.PROJECTS,
    component: ProjectsComponent,
  },
  {
    path: RoutePath.PENS,
    component: PensComponent,
  },
  {
    path: RoutePath.ERROR,
    component: ErrorComponent,
  },
  {
    path: '**',
    redirectTo: routerLinks.ABOUT,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
