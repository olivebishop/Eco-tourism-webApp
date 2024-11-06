export interface Included {
    id: number;
    item: string;
  }
  
  export interface Destination {
    id: number;
    name: string;
    location: string;
    description: string;
    imageUrl: string;
    price: number;
    duration: string;
    bestTime: string;
    difficulty: 'Easy' | 'Moderate' | 'Challenging';
    included: Included[];
    category: string;
    totalReviews?: number;
    rating?: number;
  }

  