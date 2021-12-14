import { RouterLinks } from '~/app/types/RouterLinks';
import { RoutePath } from '~/app/types/enums/RoutePath';

export const routerLinks: RouterLinks = {
  ABOUT: `/${RoutePath.ABOUT}`,
  ERROR: `/${RoutePath.ERROR}`,
  EXPERIENCE: `/${RoutePath.EXPERIENCE}`,
  PENS: `/${RoutePath.PENS}`,
  PROJECTS: `/${RoutePath.PROJECTS}`,
};
