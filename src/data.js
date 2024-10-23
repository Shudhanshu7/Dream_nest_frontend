import {
  FaPumpSoap,
  FaShower,
  FaFireExtinguisher,
  FaUmbrellaBeach,
} from "react-icons/fa";
import { FaHouseUser, FaPeopleRoof, FaKitchenSet } from "react-icons/fa6";
import {
  BiSolidWasher,
  BiSolidFirstAid,
  BiWifi,
  BiSolidFridge,
} from "react-icons/bi";
import { BsSnow, BsFillDoorOpenFill, BsPersonWorkspace } from "react-icons/bs";
import { MdMicrowave, MdBalcony, MdYard, MdPets } from "react-icons/md";
import {
  PiBathtubFill,
  PiCoatHangerFill,
  PiTelevisionFill,
} from "react-icons/pi";
import { TbIroning3 } from "react-icons/tb";
import {
  GiHeatHaze,
  GiCctvCamera,
  GiBarbecue,
  GiToaster,
  GiCampfire,
} from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";

export const categories = [
  {
    label: "All",
  },
  {
    img: "assets/apartment.jpg",
    label: "Apartments",
    description: "Located in the heart of the city with easy access to shopping, dining, and entertainment.",
    extraText: "Perfect for those seeking a unique living experience."
  },
  {
    img: "assets/dormatries.jpg",
    label: "Dormitories",
    description: "Affordable living with shared amenities, ideal for students or young professionals.",
    extraText: "Campus housing or private dorms"
  },
  {
    img: "assets/furnished rental.jpg",
    label: "Furnished Rentals",
    description: "Move-in ready with all essentials included for a comfortable stay.",
    extraText: "Homes or apartments that come fully furnished"
  },
  {
    img: "assets/countryside_cat.webp",
    label: "Student Apartments",
    description: "Designed for student living, with study spaces and convenient campus access.",
    extraText: "Shared or single apartments designed for students"
  },
  {
    img: "assets/shared.jpeg",
    label: "Shared Apartments",
    description: "Experience communal living with private rooms and shared common areas.",
    extraText:"Renting a bedroom in a shared apartment"
  },
  {
    img: "assets/festival renters.jpg",
    label: "Festival Rentals",
    description: "Perfectly located for event-goers, offering short-term stays near the festivities.",
    extraText:"Properties available during specific festivals or events in the city"
  },
  {
    img: "assets/summer renters.jpeg",
    label: "Summer Rentals",
    description: "Ideal for seasonal stays, with easy access to summer activities and attractions.",
    extraText:"Properties available during the summer months"
  },
  {
    img: "assets/winter rentals.jpg",
    label: "Winter Rentals",
    description: "Cozy and comfortable, perfect for enjoying winter activities and holiday getaways.",
    extraText:"Cabins or homes available during the winter season"
  },
  {
    img: "assets/plots.jpg",
    label: "Plots",
    description: "This property is a Plot!",
  },
  {
    img: "assets/pool_cat.jpg",
    label: "Extended Stay Hotels",
    description: "Designed for longer visits, offering home-like amenities and flexible living spaces",
    extraText:"Hotels offering long-term stays"
  },
  {
    img: "assets/office.webp",
    label: "Office Spaces",
    description: "Versatile work environments with essential amenities and flexible layouts to suit your business needs",
    extraText:"Small offices, co-working spaces, large office buildings"
  },
  {
    img: "assets/camping_cat.jpg",
    label: "Studios",
    description: "Compact and stylish, offering a functional living space with modern amenities.",
    extraText:"Spaces for photoshoots, music, or art projects"
  },
  {
    img: "assets/resort.jpg",
    label: "Resort Rentals",
    description: "Luxurious and relaxing, with easy access to resort amenities and scenic views.",
    extraText:"Villas or units within a resort"
  },
  {
    img: "assets/senior living.jpeg",
    label: "Senior Living",
    description: "Comfortable and supportive environments designed with senior residents' needs in mind, featuring accessible amenities and community activities",
    extraText:"Apartments or homes tailored for elderly residents"
  },
  {
    img: "assets/lux_cat.jpg",
    label: "Luxury",
    description: "Exquisite living spaces with top-tier finishes, premium amenities, and exceptional attention to detail.",
    extraText: "A luxurious property to spend a wonderful time"
  },
];

export const types = [
  {
    name: "An entire place",
    description: "Guests have the whole place to themselves",
    icon: <FaHouseUser />,
  },
  {
    name: "Room(s)",
    description:
      "Guests have their own room in a house, plus access to shared places",
    icon: <BsFillDoorOpenFill />,
  },
  {
    name: "A Shared Room",
    description:
      "Guests sleep in a room or common area that maybe shared with you or others",
    icon: <FaPeopleRoof />,
  },
];

export const facilities = [
  {
    name: "Bath tub",
    icon: <PiBathtubFill />,
  },
  {
    name: "Personal care products",
    icon: <FaPumpSoap />,
  },
  {
    name: "Shower",
    icon: <FaShower />,
  },
  {
    name: "Washer",
    icon: <BiSolidWasher />,
  },
  {
    name: "Hangers",
    icon: <PiCoatHangerFill />,
  },
  {
    name: "Iron",
    icon: <TbIroning3 />,
  },
  {
    name: "TV",
    icon: <PiTelevisionFill />,
  },
  {
    name: "Dedicated workspace",
    icon: <BsPersonWorkspace />
  },
  {
    name: "Air Conditioning",
    icon: <BsSnow />,
  },
  {
    name: "Heating",
    icon: <GiHeatHaze />,
  },
  {
    name: "Security cameras",
    icon: <GiCctvCamera />,
  },
  {
    name: "Fire extinguisher",
    icon: <FaFireExtinguisher />,
  },
  {
    name: "First Aid",
    icon: <BiSolidFirstAid />,
  },
  {
    name: "Wifi",
    icon: <BiWifi />,
  },
  {
    name: "Cooking set",
    icon: <FaKitchenSet />,
  },
  {
    name: "Refrigerator",
    icon: <BiSolidFridge />,
  },
  {
    name: "Microwave",
    icon: <MdMicrowave />,
  },
  {
    name: "Stove",
    icon: <GiToaster />,
  },
  {
    name: "Barbecue grill",
    icon: <GiBarbecue />,
  },
  {
    name: "Outdoor dining area",
    icon: <FaUmbrellaBeach />,
  },
  {
    name: "Private patio or Balcony",
    icon: <MdBalcony />,
  },
  {
    name: "Camp fire",
    icon: <GiCampfire />,
  },
  {
    name: "Garden",
    icon: <MdYard />,
  },
  {
    name: "Free parking",
    icon: <AiFillCar />,
  },
  {
    name: " Pet allowed",
    icon: <MdPets />
  }
];
