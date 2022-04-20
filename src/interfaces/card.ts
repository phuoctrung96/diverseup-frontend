export type CardType = 'card' | 'company';

export interface ICard {
  type: CardType;
  description: string;
  imageUrl: string;
  link: string;
  rating?: number;
  title?: string;
}
