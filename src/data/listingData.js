import {
  Utensils, Wifi, Laptop, Car, Waves, Flame, PawPrint, Camera, AlertTriangle, BellRing,
  Tv, Wind, Sun, KeyRound, ShieldCheck, Dumbbell, Coffee, Shirt, Sparkles, MapPin
} from "lucide-react";

export const LISTING_INFO = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  type: "Entire serviced apartment in Candolim, India",
  guests: 3,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  rating: 4.95,
  reviewsCount: 19,
  isGuestFavorite: true,
  basePricePerNight: 5699,
  nightsDefault: 5,
  discountPercent: 10,
  host: {
    name: "Mirashya Homes",
    role: "Host",
    avatar: "/images/exterior.png",
    yearsHosting: 2,
    reviewsCount: 1463,
    rating: 4.68,
    responseRate: "100%",
    responseTime: "within an hour",
    bio: "Passionate about providing memorable vacation experiences in Goa. Designed with luxury and comfort in mind.",
    bornDecade: "Born in the 80s",
    school: "NICMAR GOA",
    coHosts: [
      { name: "Sharath", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" },
      { name: "Aman Dev Pahwa", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" },
      { name: "Maria Karen Priyanka", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" },
      { name: "Simran", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80" },
      { name: "Pallavi", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80" },
      { name: "Sanyukta", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" },
      { name: "Shruti", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80" },
      { name: "Amisha", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80" },
    ]
  },
  highlights: [
    {
      icon: Sun,
      title: "Outdoor entertainment",
      desc: "The pool and alfresco dining deck are great for summer trips."
    },
    {
      icon: Wind,
      title: "Designed for staying cool",
      desc: "Beat the heat with inverter A/C and ceiling fans throughout."
    },
    {
      icon: KeyRound,
      title: "Self check-in",
      desc: "You can check in seamlessly with the building security staff."
    }
  ],
  sleepingArrangements: [
    { room: "Bedroom", detail: "1 double bed", image: "/images/bedroom.png" },
    { room: "Living room", detail: "1 sofa bed", image: "/images/living_room_1.png" },
  ],
  description: `🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻 , Smart TV 📺 , pet-friendly comfort 🐾 , and stylish interiors. Just minutes from Candolim Beach 🏖️ , popular cafés, restaurants, and nightlife 🍹 , it's ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. 💖 🌴`
};

export const PHOTOS = [
  { id: 1, title: "Living room 1", url: "/images/living_room_1.png", category: "Living area" },
  { id: 2, title: "Living room 2", url: "/images/living_room_2.png", category: "Living area" },
  { id: 3, title: "Full kitchen", url: "/images/kitchen.png", category: "Kitchen & dining" },
  { id: 4, title: "Bedroom", url: "/images/bedroom.png", category: "Bedroom" },
  { id: 5, title: "Full bathroom", url: "/images/bathroom.png", category: "Bathroom" },
  { id: 6, title: "Deck", url: "/images/deck.png", category: "Outdoor space" },
  { id: 7, title: "Jacuzzi", url: "/images/jacuzzi.png", category: "Jacuzzi & Spa" },
  { id: 8, title: "Exterior", url: "/images/exterior.png", category: "Property exterior" },
  { id: 9, title: "Balcony", url: "/images/balcony.png", category: "Balcony view" },
  { id: 10, title: "Night Jacuzzi View", url: "/images/jacuzzi.png", category: "Jacuzzi & Spa" },
];

export const AMENITIES = [
  { icon: Utensils, label: "Kitchen", category: "Popular" },
  { icon: Wifi, label: "Fast Wifi – 150 Mbps", category: "Popular" },
  { icon: Laptop, label: "Dedicated workspace", category: "Popular" },
  { icon: Car, label: "Free parking on premises", category: "Popular" },
  { icon: Waves, label: "Shared outdoor pool", category: "Popular" },
  { icon: Flame, label: "Private hot tub / Jacuzzi", category: "Popular" },
  { icon: PawPrint, label: "Pets allowed", category: "Popular" },
  { icon: Camera, label: "Exterior security cameras on property", category: "Safety" },
  { icon: AlertTriangle, label: "Carbon monoxide alarm", category: "Safety" },
  { icon: BellRing, label: "Smoke alarm", category: "Safety" },
  { icon: Tv, label: "55\" HDTV with Netflix & Prime", category: "Entertainment" },
  { icon: Wind, label: "Air conditioning", category: "Heating & cooling" },
  { icon: Coffee, label: "Nespresso Coffee maker", category: "Kitchen & dining" },
  { icon: Shirt, label: "In-unit Washer & Dryer", category: "Bedroom & laundry" },
  { icon: Dumbbell, label: "Fitness center access", category: "Facilities" },
  { icon: Sparkles, label: "Daily housekeeping available", category: "Services" },
];

// Complete list of 50 amenities for modal breakdown
export const ALL_50_AMENITIES = [
  { category: "Scenic views", items: ["Pool view", "Garden view", "Courtyard view"] },
  { category: "Bathroom", items: ["Hair dryer", "Cleaning products", "Hot water", "Shower gel", "Body wash", "Shampoo", "Conditioner"] },
  { category: "Bedroom & laundry", items: ["Washing machine", "Essentials (Towels, bed sheets, soap, toilet paper)", "Hangers", "Bed linen", "Iron", "Drying rack for clothing", "Safe box"] },
  { category: "Entertainment", items: ["55\" Smart TV", "Bluetooth sound bar", "Books and reading material"] },
  { category: "Heating & cooling", items: ["Air conditioning", "Ceiling fan"] },
  { category: "Home safety", items: ["Smoke alarm", "Carbon monoxide alarm", "Fire extinguisher", "First aid kit"] },
  { category: "Internet & office", items: ["Wifi", "Dedicated desk & ergonomic chair"] },
  { category: "Kitchen & dining", items: ["Kitchenette", "Refrigerator", "Microwave", "Cooking basics (Pots, pans, oil, salt, pepper)", "Dishes & cutlery", "Induction stove", "Electric kettle", "Toaster", "Wine glasses"] },
  { category: "Location features", items: ["Private entrance", "Laundromat nearby", "Resort complex"] },
  { category: "Outdoor", items: ["Private patio deck", "Outdoor Jacuzzi", "Balcony furniture", "Alfresco dining area"] },
  { category: "Parking & facilities", items: ["Free parking on premises", "Shared swimming pool", "Elevator in building"] },
  { category: "Services", items: ["Self check-in", "Building staff", "Long-term stays allowed", "Luggage dropoff allowed"] }
];

export const REVIEWS = [
  {
    id: 1,
    name: "Amit",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
    meta: "2 months on Airbnb",
    time: "1 week ago",
    text: "Very helpful and responsive team. Safe and peaceful stay, loved everything about the property.",
    truncated: false,
    rating: 5
  },
  {
    id: 2,
    name: "Aheesh",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80",
    meta: "3 years on Airbnb",
    time: "2 weeks ago",
    text: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. We would definitely recommend this place to anyone visiting Candolim.",
    truncated: true,
    rating: 5
  },
  {
    id: 3,
    name: "Samiksha",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    meta: "8 months on Airbnb",
    time: "May 2026",
    text: "The host nitish was really great help. Quick check-in process and peaceful ambiance.",
    truncated: false,
    rating: 5
  },
  {
    id: 4,
    name: "Vedant",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    meta: "4 years on Airbnb",
    time: "May 2026",
    text: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained. The jacuzzi experience under the stars was the highlight of our vacation!",
    truncated: true,
    rating: 5
  },
  {
    id: 5,
    name: "Vaibhav S",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
    meta: "3 years on Airbnb",
    time: "May 2026",
    text: "Great great experience living out there, can't expect more, will always look for it in the future and will recommend my friends too.",
    truncated: false,
    rating: 5
  },
  {
    id: 6,
    name: "Mohd",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80",
    meta: "5 years on Airbnb",
    time: "May 2026",
    text: "Great place. Exactly as described in the listing. Very close to the beach and main markets.",
    truncated: false,
    rating: 5
  },
  {
    id: 7,
    name: "Rohan",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=100&q=80",
    meta: "1 year on Airbnb",
    time: "April 2026",
    text: "Super clean apartment with top-notch amenities. The Jacuzzi was ready and hot when we arrived!",
    truncated: false,
    rating: 5
  },
  {
    id: 8,
    name: "Priya M",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    meta: "2 years on Airbnb",
    time: "April 2026",
    text: "Wonderful host! Always available over WhatsApp for cafe recommendations and taxi assistance.",
    truncated: false,
    rating: 5
  }
];

export const NEARBY = [
  { title: "Beautiful Studio with a view to die for", price: "₹23,600", rating: "4.91", image: "/images/living_room_1.png" },
  { title: "NAQAB - 1bhk with private pool", price: "₹42,218", rating: "4.95", image: "/images/exterior.png" },
  { title: "Greentique Luxury Flat with plunge pool, Calangute", price: "₹44,306", rating: "4.94", image: "/images/deck.png" },
  { title: "The Tropical Studio | 5 mins to Beach", price: "₹22,824", rating: "4.96", image: "/images/living_room_2.png" },
  { title: "Luxury Casa Bella 1BHK with plunge pool, Calangute", price: "₹39,942", rating: "4.95", image: "/images/balcony.png" },
];
