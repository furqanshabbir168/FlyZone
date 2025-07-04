import lhrToDub from '../assets/lahore-to-dubai.jpg'
import karToIst from '../assets/kar-to-ist.jpg'
import lhrToYork from '../assets/lhr-to-york.jpg'
import mulToJedd from '../assets/mul-to-jedd.jpg'

import one from '../assets/one.jpg'
import two from '../assets/two.jpg'
import three from '../assets/three.jpg'
import four from '../assets/four.jpg'
import five from '../assets/five.jpg'
import six from '../assets/six.jpg'

const flights = [
  {
    id: 1,
    title: "Lahore to Dubai – Non-Stop Deal",
    airline: "Emirates",
    tripType: "One-way",
    travelClass: "Economy",
    flightType: "Non-stop",
    duration: "3h 45m",
    description: "Fly non-stop from Lahore to Dubai with a comfortable and quick service ideal for business and leisure travelers.",
    features: [
      "Checked baggage included",
      "Instant booking available",
      "Special discount for today's departures"
    ],
    price: 299,
    isPopular: true,
    image: lhrToDub,
    availableDates: [
      { date: "Jul 1", timeSlots: ["08:00 AM", "03:30 PM"] },
      { date: "Jul 3", timeSlots: ["12:00 PM", "08:45 PM"] },
      { date: "Jul 5", timeSlots: ["06:30 AM", "10:15 PM"] }
    ]
  },
  {
    id: 2,
    title: "Karachi to Istanbul – Premium Saver",
    airline: "Turkish Airlines",
    tripType: "Round-trip",
    travelClass: "Business",
    flightType: "One-Stop",
    duration: "10h 20m",
    description: "Enjoy a luxury journey to Istanbul with added comfort, meals, and lounge access for a premium experience.",
    features: [
      "Business lounge access",
      "In-flight meals included",
      "Flexible date options"
    ],
    price: 799,
    isPopular: true,
    image: karToIst,
    availableDates: [
      { date: "Jul 2", timeSlots: ["09:45 AM", "07:00 PM"] },
      { date: "Jul 4", timeSlots: ["02:00 PM", "11:30 PM"] },
      { date: "Jul 7", timeSlots: ["05:15 AM", "03:00 PM"] }
    ]
  },
  {
    id: 3,
    title: "Islamabad to Maldives – Escape Package",
    airline: "Qatar Airways",
    tripType: "One-way",
    travelClass: "Economy Plus",
    flightType: "1 Stop",
    duration: "8h 15m",
    description: "A relaxing escape to the Maldives with Wi-Fi and hotel add-on options for honeymooners or solo adventurers.",
    features: [
      "20kg baggage allowance",
      "Hotel add-on available",
      "Onboard Wi-Fi"
    ],
    price: 640,
    isPopular: false,
    image: one,
    availableDates: [
      { date: "Jul 3", timeSlots: ["10:30 AM", "08:15 PM"] },
      { date: "Jul 6", timeSlots: ["01:00 PM", "09:00 PM"] }
    ]
  },
  {
    id: 4,
    title: "Lahore to New York – Ultra Long Haul",
    airline: "Etihad Airways",
    tripType: "Round-trip",
    travelClass: "First Class",
    flightType: "One-Stop",
    duration: "18h 30m",
    description: "An ultra-long-haul experience with flatbeds, gourmet cuisine, and world-class in-flight comfort to NYC.",
    features: [
      "Flatbed seating",
      "Gourmet meals",
      "Priority boarding"
    ],
    price: 1950,
    isPopular: true,
    image: lhrToYork,
    availableDates: [
      { date: "Jul 5", timeSlots: ["07:00 AM", "11:45 PM"] },
      { date: "Jul 8", timeSlots: ["09:30 AM", "06:00 PM"] }
    ]
  },
  {
    id: 5,
    title: "Karachi to Doha – Economy Saver",
    airline: "Qatar Airways",
    tripType: "One-way",
    travelClass: "Economy",
    flightType: "Non-stop",
    duration: "2h 50m",
    description: "Quick and budget-friendly direct flight to Doha, perfect for short trips and business travel.",
    features: [
      "Baggage included",
      "Easy cancellation policy",
      "Flexible travel dates"
    ],
    price: 250,
    isPopular: false,
    image: two,
    availableDates: [
      { date: "Jul 1", timeSlots: ["04:00 PM", "09:00 PM"] },
      { date: "Jul 4", timeSlots: ["07:15 AM", "12:45 PM"] }
    ]
  },
  {
    id: 6,
    title: "Islamabad to Kuala Lumpur – Budget Special",
    airline: "AirAsia",
    tripType: "Round-trip",
    travelClass: "Economy",
    flightType: "1 Stop",
    duration: "9h 30m",
    description: "Affordable travel to Malaysia with essentials included and smooth boarding via mobile passes.",
    features: [
      "Paid meal options",
      "Mobile boarding pass support",
      "15kg baggage allowance"
    ],
    price: 520,
    isPopular: false,
    image: three,
    availableDates: [
      { date: "Jul 3", timeSlots: ["01:30 PM", "11:30 PM"] },
      { date: "Jul 7", timeSlots: ["06:00 AM", "10:45 PM"] }
    ]
  },
  {
    id: 7,
    title: "Lahore to Bangkok – Direct Fun",
    airline: "Thai Airways",
    tripType: "One-way",
    travelClass: "Economy",
    flightType: "Non-stop",
    duration: "4h 15m",
    description: "A quick, direct, and family-friendly flight to Bangkok with baggage for easy travel.",
    features: [
      "Family-friendly flight",
      "Instant booking",
      "Hand-carry only baggage"
    ],
    price: 310,
    isPopular: false,
    image: four,
    availableDates: [
      { date: "Jul 2", timeSlots: ["07:00 AM", "01:30 PM"] },
      { date: "Jul 6", timeSlots: ["05:30 PM", "11:00 PM"] }
    ]
  },
  {
    id: 8,
    title: "Karachi to Muscat – Weekend Escape",
    airline: "Oman Air",
    tripType: "One-way",
    travelClass: "Economy",
    flightType: "Non-stop",
    duration: "2h 10m",
    description: "Short getaway flight for weekend travelers—affordable, fast, and e-ticket enabled.",
    features: [
      "Cabin luggage included",
      "Ideal for last-minute trips",
      "E-ticket confirmation"
    ],
    price: 220,
    isPopular: false,
    image: five,
    availableDates: [
      { date: "Jul 1", timeSlots: ["06:00 AM", "02:30 PM"] },
      { date: "Jul 3", timeSlots: ["10:15 AM", "07:45 PM"] }
    ]
  },
  {
    id: 9,
    title: "Multan to Jeddah – Hajj Package",
    airline: "PIA",
    tripType: "Round-trip",
    travelClass: "Economy",
    flightType: "Non-stop",
    duration: "5h 10m",
    description: "Specially designed for pilgrims, with high baggage limit and group support for a stress-free journey.",
    features: [
      "30kg baggage",
      "Group booking options",
      "Spiritual tour support"
    ],
    price: 680,
    isPopular: true,
    image: mulToJedd,
    availableDates: [
      { date: "Jul 4", timeSlots: ["01:45 AM", "04:30 PM"] },
      { date: "Jul 8", timeSlots: ["09:00 AM", "10:15 PM"] }
    ]
  },
  {
    id: 10,
    title: "Lahore to Toronto – Long Haul Luxury",
    airline: "Air Canada",
    tripType: "Round-trip",
    travelClass: "Business",
    flightType: "1 Stop",
    duration: "16h 40m",
    description: "Business-class flight with superior amenities and comfort for long-distance travelers.",
    features: [
      "Lounge access",
      "Recliner seating",
      "Unlimited onboard Wi-Fi"
    ],
    price: 1600,
    isPopular: false,
    image: six,
    availableDates: [
      { date: "Jul 2", timeSlots: ["03:00 AM", "07:00 PM"] },
      { date: "Jul 6", timeSlots: ["11:15 AM", "09:45 PM"] }
    ]
  }
];
export default flights
