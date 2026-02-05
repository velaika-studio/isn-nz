// Contains all the text and data related to the venue

import { HotelCategory } from "@/types/information";

export const venueDetails = {
  name: "Hotel Hyatt Centric, Dehradun",
  tagline: "Upscale Lifestyle Hotel in the Heart of Dehradun",
  address: {
    line1: "152/3-4, Jakhan",
    line2: "Rajpur Road, Dehradun",
    line3: "Uttarakhand, India",
    country: "India",
  },
  contact: {
    phone: "+91 135-614-1234",
  },
  conferenceDates: "10-12 April 2026",
  websiteUrl: "https://www.hyatt.com/hyatt-centric/en-US/dedzd-hyatt-centric-rajpur-road-dehradun",
  mapDirectionsUrl: "https://maps.app.goo.gl/DfXGro7HfUcZ4ztD9",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.492077161735!2d78.06762371200075!3d30.365381974658362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d760d9a85bc1%3A0xc15c4fb2aac68aee!2sHyatt%20Centric%20Dehradun!5e0!3m2!1sen!2sin!4v1770225204297!5m2!1sen!2sin",
};

export const venueImages = {
  main: "/images/hyatt-centric.png",
  secondary: "/images/dehradun-view.png",
};

export const tabsContent = {
  info: {
    mainContent: [
      "NZ-ISNCON 2026 will be held at Hotel Hyatt Centric, Dehradun, a premier lifestyle hotel offering state-of-the-art facilities for academic conferences and professional gatherings.",
      "Located on the iconic Rajpur Road, the venue provides easy access to the city's key attractions while offering a serene environment ideal for focused learning and networking.",
      "The conference facilities at Hyatt Centric Dehradun are designed to foster interaction and high-level academic exchange, ensuring a memorable experience for all delegates.",
    ],
  },
  travel: {
    reaching: {
      title: "Reaching Dehradun:",
      content:
        "Jolly Grant Airport (DED) is located approximately 28 km from the venue, with a travel time of 45-60 minutes. Dehradun Railway Station is 6 km from the venue. The city is well-connected by road to Delhi and other major North Indian cities via the Delhi-Dehradun Expressway.",
    },
    local: {
      title: "Local Transportation:",
      content:
        "Taxis, auto-rickshaws, and app-based cab services like Uber and Ola are widely available. For local sightseeing, dedicated day-rental cabs are recommended.",
    },
  },
  hotels: {
    description:
      "Dehradun offers a wide range of accommodation options to suit various preferences and budgets. From luxury hotels near the conference venue to comfortable budget stays, delegates will find convenient options near Hotel Hyatt Centric. The city is known for its excellent hospitality services and rich cultural heritage. Most accommodations provide modern amenities and are well-connected to the venue by public and private transportation options.",
  },
};

export const nearbyHotels: Record<"luxury" | "midRange" | "budget", HotelCategory> = {
  luxury: {
    title: "Luxury Hotels",
    subtitle: "Premium accommodations with world-class amenities",
    hotels: [
      {
        id: "hyatt-regency-dehradun",
        name: "Hyatt Regency Dehradun Resort and Spa",
        image: "/images/hyatt-regency.png", 
        priceRange: {
          min: 16000,
          max: 22000,
          currency: "₹",
        },
        distance: "8.5 km from venue",
        distanceFromVenue: 8.5,
        features: [
          { icon: "🏨", label: "5 Star Resort" },
          { icon: "🌲", label: "Edge of Malsi Forest" },
          { icon: "🏊", label: "Pool" },
        ],
        contact: {
          phone: "+91 135 617 1234",
          website: "https://www.hyatt.com/hyatt-regency/en-US/delrh-hyatt-regency-dehradun",
        },
        rating: 4.8,
        location: "Mussoorie Road",
      },
      {
        id: "fairfield-marriott-dehradun",
        name: "Fairfield by Marriott Dehradun",
        image: "/images/tsd.png",
        priceRange: {
          min: 8500,
          max: 11000,
          currency: "₹",
        },
        distance: "1.9 km from venue",
        distanceFromVenue: 1.9,
        features: [
          { icon: "🏨", label: "4.5 Star Hotel" },
          { icon: "🏊", label: "Outdoor Pool" },
          { icon: "🏔️", label: "Mountain Views" },
        ],
        contact: {
          phone: "+91 135-6620222",
          website: "https://www.marriott.com/en-us/hotels/dedfi-fairfield-dehradun",
        },
        rating: 4.5,
        location: "Malsi, Mussoorie Road",
      },
      {
        id: "lemon-tree-rajpur",
        name: "Lemon Tree Hotel, Dehradun",
        image: "/images/lemon-tree.png",
        priceRange: {
          min: 7000,
          max: 9500,
          currency: "₹",
        },
        distance: "200 m from venue (Walking distance)",
        distanceFromVenue: 0.2,
        features: [
          { icon: "📍", label: "Inside Pacific Mall" },
          { icon: "🛍️", label: "Shopping Access" },
          { icon: "💼", label: "Business Center" },
        ],
        contact: {
          phone: "+91 135 273 7000",
          website: "https://www.lemontreehotels.com/lemon-tree-hotel/dehradun/hotel-dehradun",
        },
        rating: 4.3,
        location: "Rajpur Road (Pacific Mall)",
      },
    ],
  },
  midRange: {
    title: "Mid-Range Hotels",
    subtitle: "Comfortable stays with essential amenities",
    hotels: [
      {
        id: "spree-hotel-kriday",
        name: "Spree Hotel Kriday",
        image: "/images/kriday.png",
        priceRange: {
          min: 4500,
          max: 6500,
          currency: "₹",
        },
        distance: "250 m from venue",
        distanceFromVenue: 0.25,
        features: [
          { icon: "📍", label: "Very close to venue" },
          { icon: "🍽️", label: "Rooftop Restaurant" },
          { icon: "✨", label: "Modern Rooms" },
        ],
        contact: {
          phone: "+91 88801 58158",
          website: "https://www.spreehotels.com/spree-hotel-kriday/",
        },
        rating: 4.4,
        location: "Rajpur Road (Near Pacific Mall)",
      },
      {
        id: "ginger-dehradun",
        name: "Ginger Dehradun, Rajpur Road",
        image: "/images/ginger.png",
        priceRange: {
          min: 3500,
          max: 5000,
          currency: "₹",
        },
        distance: "2.2 km from venue",
        distanceFromVenue: 2.2,
        features: [
          { icon: "🛡️", label: "Safe & Hygienic" },
          { icon: "🏋️", label: "Fitness Center" },
          { icon: "☕", label: "All Day Dining" },
        ],
        contact: {
          phone: "+91 135 691 0600",
          website: "https://www.gingerhotels.com/ginger-dehradun",
        },
        rating: 4.1,
        location: "Rajpur Road",
      },
      {
        id: "hotel-aketa",
        name: "Hotel Aketa",
        image: "/images/aketa.png",
        priceRange: {
          min: 4000,
          max: 6000,
          currency: "₹",
        },
        distance: "4.4 km from venue",
        distanceFromVenue: 4.4,
        features: [
          { icon: "🌳", label: "Large Lawns" },
          { icon: "🏸", label: "Health Club" },
        ],
        contact: {
          phone: "+91 135 274 4302",
          website: "https://hotelaketadehradun.com/",
        },
        rating: 4.2,
        location: "Rajpur Road",
      },
    ],
  },
  budget: {
    title: "Budget Hotels",
    subtitle: "Affordable options with basic amenities",
    hotels: [
      {
        id: "hotel-o-canal-road",
        name: "Hotel O Canal Road",
        image: "/images/hotel-o.png",
        priceRange: {
          min: 1500,
          max: 3500,
          currency: "₹",
        },
        distance: "2 km from venue",
        distanceFromVenue: 2,
        features: [
          { icon: "📍", label: "Kishanpur Area" },
          { icon: "📶", label: "Free WiFi" },
        ],
        contact: {
          phone: "",
          website: "",
        },
        rating: 3.9,
        location: "Canal Road, Kishanpur",
      },
      {
        id: "hotel-pacific-dehradun",
        name: "Hotel Pacific Dehradun",
        image: "/images/pacific.png",
        priceRange: {
          min: 3000,
          max: 4500,
          currency: "₹",
        },
        distance: "7 km from venue",
        distanceFromVenue: 7,
        features: [
          { icon: "📍", label: "City Center (Clock Tower)" },
          { icon: "🍽️", label: "Paradise Restaurant" },
        ],
        contact: {
          phone: "+91 135 271 2355",
          website: "",
        },
        rating: 4.1,
        location: "Subhash Road (Near Clock Tower)",
      },
      {
        id: "hotel-kamla-palace",
        name: "Hotel Kamla Palace",
        image: "/images/kamla.png",
        priceRange: {
          min: 1500,
          max: 3000,
          currency: "₹",
        },
        distance: "12.5 km from venue",
        distanceFromVenue: 12.5,
        features: [
          { icon: "🛣️", label: "On GMS Road" },
          { icon: "🚗", label: "Parking Available" },
        ],
        contact: {
          phone: "+91 135-2720596",
          website: "https://www.hotelkamlapalace.com/",
        },
        rating: 3.8,
        location: "GMS Road",
      },
    ],
  },
};
