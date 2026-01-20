export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  items: ServiceItem[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: 'travel-stay',
    title: 'Travel & Stay',
    items: [
      {
        id: 'premium-hotels',
        title: 'Premium Hotels',
        description: 'The right hotel is about more than availability. Through our network of trusted partners, we arrange preferred conditions and thoughtful details, while taking care of the entire booking process for you.',
        image: '/premium_berkhamtravel_apartmens.jpg',
      },
      {
        id: 'yacht-charters',
        title: 'Yacht Charters',
        description: 'Yachting is about freedom, privacy and the way you experience the journey. We curate tailored yacht experiences worldwide — from relaxed day cruises to extended voyages.',
        image: '/premium_berkhamtravel_rest_on_a_yacht.jpg',
      },
      {
        id: 'private-aviation',
        title: 'Private Aviation',
        description: 'A way of flying that respects your time and rhythm. From private jet charters to helicopter flights and smooth air transfers, we design aviation solutions that feel effortless.',
        image: '/premium_berkhamtravel_helicopter.jpg',
      },
      {
        id: 'ground-transportation',
        title: 'Ground Transportation',
        description: 'Ground transportation should feel effortless and discreet. We arrange luxury car rentals, professional chauffeurs and seamless transfers, carefully planned to ensure comfort.',
        image: '/premium_berkhamtravel_car.jpg',
      },
      {
        id: 'villa-rentals',
        title: 'Exclusive Villa Rentals',
        description: 'Private villas designed for space, privacy and a sense of place. We carefully select properties with strong design, distinctive locations and the level of discretion that allows you to truly feel at ease.',
        image: '/premium_berkhamtravel_apartmens.jpg',
      },
    ],
  },
  {
    id: 'access-experiences',
    title: 'Access & Experiences',
    items: [
      {
        id: 'restaurants-nightlife',
        title: 'Restaurants & Nightlife',
        description: 'Some places require more than a reservation request. We provide access to highly sought-after restaurants, private clubs and venues, carefully arranged to match your plans and preferences.',
        image: '/premium_berkhamtravel_gum.jpg',
      },
      {
        id: 'event-access',
        title: 'Exclusive Event Access',
        description: 'Access matters when moments are limited. We arrange priority access to major sporting events, red carpet occasions, concerts and private entertainment experiences.',
        image: '/premium_berkhamtravel_cinema.jpg',
      },
      {
        id: 'event-planning',
        title: 'Event Planning',
        description: 'Meaningful moments deserve thoughtful planning. We provide full planning and coordination of private events, celebrations and bespoke gatherings — carefully managing every detail.',
        image: '/premium_berkhamtravel_gum_flowers.jpg',
      },
    ],
  },
  {
    id: 'concierge',
    title: 'Concierge Services',
    items: [
      {
        id: 'health-beauty',
        title: 'Health & Well-Being',
        description: 'From fitness and wellness to beauty and personal styling, we arrange services that support balance and confidence. Each professional is selected with care.',
        image: '/premium_berkhamtravel_shoping.jpg',
      },
      {
        id: 'gift-shopping',
        title: 'Gift & Shopping',
        description: 'Finding the right gift often requires more than time. We source exceptional gifts, rare luxury items through our experienced personal shoppers — ensuring discretion and quality.',
        image: '/premium_berkhamtravel_car_and_chanel.jpg',
      },
      {
        id: 'floral',
        title: 'Floral Gestures',
        description: 'Wherever you are, the gesture remains personal. We coordinate global flower deliveries with a focus on elegance, freshness and thoughtful presentation.',
        image: '/premium_berkhamtravel_gum_flowers.jpg',
      },
    ],
  },
];
