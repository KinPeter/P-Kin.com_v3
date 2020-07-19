import { UUID } from '~/app/types/UUID';

export interface PortfolioItem {
  id: UUID;
  name: string;
  image: string;
  badges: string[];
  description: {
    en: string;
    hu: string;
    kr: string;
  };
}
