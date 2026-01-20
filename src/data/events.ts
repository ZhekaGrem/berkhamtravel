export interface EventCategory {
  id: string;
  title: string;
  items: string[];
}

export const eventsData: EventCategory[] = [
  {
    id: 'sporting',
    title: 'Sporting Events',
    items: [
      'Boxing',
      'Champions League',
      'Cricket',
      'F1',
      'Golf',
      'Horse Racing',
      'La Liga',
      'NBA',
      'NFL',
      'Olympics',
      'Polo',
      'Premier League',
      'Rugby',
      'Tennis',
      'UFC',
    ],
  },
  {
    id: 'entertainment',
    title: 'Entertainment',
    items: [
      'Burning Man',
      'Coachella',
      'Glastonbury',
      'Rolling Loud',
      'Tomorrowland',
    ],
  },
  {
    id: 'red-carpet',
    title: 'Red Carpet',
    items: [
      'Fashion Week',
      'Film Festivals',
      'Film Premieres',
      'Met Gala',
      'Oscars',
    ],
  },
];
