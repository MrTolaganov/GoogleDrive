import { Clock5, Cloud, Star, Tablet, Trash } from "lucide-react";

export const sidebarLinks = [
  { label: "My drive", icon: Tablet, path: "/" },
  { label: "Starred", icon: Star, path: "/starred" },
  { label: "Recent", icon: Clock5, path: "/recent" },
  { label: "Trash", icon: Trash, path: "/trash" },
  { label: "Storage", icon: Cloud, path: "/cloud" },
];

export const planArray = [
  {
    name: "Basic",
    description: "1.5 GB",
    price: "Free",
    options: "15 GB of storage",
  },
  {
    name: "Pro",
    description: "15 GB",
    price: "10",
    options:
      "100 GB of storage, Access to Google experts,  Share with up to 5 others, Extra member benefits, More Google Photos editing features",
    priceId: "price_1PLMeWJ1xkLdVRx2SQoMtuAr",
  },
];
