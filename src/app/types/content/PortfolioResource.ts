import { PortfolioItem } from './PortfolioItem';

export interface PortfolioResource {
  filters: string[];
  portfolio: PortfolioItem[];
}
