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
    id: "travel-stay",
    title: "Travel & Stay",
    items: [
      {
        id: "premium-hotels",
        title: "Premium Hotel Accommodation",
        description:
          "The right hotel is about more than availability. Through our network of trusted partners, we arrange preferred conditions and thoughtful details, while taking care of the entire booking process for you. No pressure, no rush — just considered recommendations and seamless arrangements.",
        image: "/premium_hotel.jpg",
      },
      {
        id: "yacht-charters",
        title: "Yacht Charters",
        description:
          "Yachting is about freedom, privacy and the way you experience the journey. We curate tailored yacht experiences worldwide — from relaxed day cruises to extended voyages — carefully matching the yacht, crew and itinerary to your expectations. Every detail is considered to ensure comfort, discretion and a seamless experience from start to finish.",
        image: "/Yacht_Charters.jpg",
      },
      {
        id: "private-aviation",
        title: "Private Aviation",
        description:
          "A way of flying that respects your time and rhythm. From private jet charters to helicopter flights and smooth air transfers, we design aviation solutions that feel eﬀortless. Each arrangement is built around your schedule, ensuring a calm, eﬃcient and discreet experience from departure to arrival.",
        image: "/Private_Aviation.jpg",
      },
      {
        id: "ground-transportation",
        title: "Ground Transportation",
        description:
          "Ground transportation should feel eﬀortless and discreet. We arrange luxury car rentals, professional chauﬀeurs and seamless transfers, carefully planned to ensure comfort, eﬃciency and peace of mind throughout your journey.",
        image: "/premium_berkhamtravel_plane_and_car_2.jpg",
      },
      {
        id: "villa-rentals",
        title: "Exclusive Villa Rentals",
        description:
          "Private villas designed for space, privacy and a sense of place. We carefully select properties with strong design, distinctive locations and the level of discretion that allows you to truly feel at ease.",
        image: "/Exclusive_Villa_Rentals.jpg",
      },
    ],
  },
  {
    id: "access-experiences",
    title: "Restaurants, Clubs & Nightlife",
    items: [
      {
        id: "restaurants-nightlife",
        title: "Restaurants & Nightlife",
        description:
          "Some places require more than a reservation request. We provide access to highly sought-after restaurants, private clubs and venues, carefully arranged to match your plans and preferences.",
        image: "/Restaurants_Clubs_Nightlife.jpg",
      },
      {
        id: "event-access",
        title: "Exclusive Event Access",
        description:
          "Access matters when moments are limited. We arrange priority access to major sporting events, red carpet occasions, concerts and private entertainment experiences — carefully coordinated to ensure a smooth and discreet experience from start to finish.",
        image: "/Exclusive_Event_Access.jpg",
      },
      {
        id: "event-planning",
        title: "Event Planning & Private Celebrations",
        description:
          "Meaningful moments deserve thoughtful planning. We provide full planning and coordination of private events, celebrations and bespoke gatherings — carefully managing every detail to ensure the occasion feels seamless, personal and unforced.",
                  image: "/Event_Planning.jpg",
      },
    ],
  },
  {
    id: "concierge",
    title: "Lifestyle Services",
    items: [
      {
        id: "health-beauty",
        title: "Health, Well-Being & Beauty",
        description:
          "From fitness and wellness to beauty and personal styling, we arrange services that support balance and confidence. Each professional is selected with care, allowing for discreet, seamless and high-quality experiences wherever you are.",
        image: "/Health.jpg",
      },
      {
        id: "gift-shopping",
        title: "Gift Procurement & Personal Shopping",
        description:
          "Finding the right gift often requires more than time. We source exceptional gifts, rare luxury items through our experienced personal shoppers — ensuring discretion, quality and thoughtful selection throughout.",
        image: "/Gift_Procurement.jpg",
      },
      {
        id: "floral",
        title: "Floral Gestures",
        description:
          "Wherever you are, the gesture remains personal. We coordinate global flower deliveries with a focus on elegance, freshness and thoughtful presentation. Each arrangement is selected with care and timed to arrive exactly as intended, making every moment feel con",
        image: "/premium_berkhamtravel_gum_flowers.jpg",
      },
    ],
  },
];
