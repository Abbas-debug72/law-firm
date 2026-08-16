export const SITE = {
  name: "Sterling & Hale",
  url: "https://law-firm.gat6.vercel.app",
  tagline: "Counsel for the long term",
  description:
    "Lorem ipsum dolor sit amet — Sterling & Hale is an established corporate law firm advising businesses on the matters that matter.",
  address: "400 Meridian Tower, Financial District, Example City",
  phone: "+1 (555) 018-3300",
  phoneHref: "tel:+15550183300",
  email: "counsel@sterling-hale.example.com",
  emailHref: "mailto:counsel@sterling-hale.example.com",
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
    { days: "Saturday – Sunday", time: "By appointment" },
  ],
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/attorneys", label: "Attorneys" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;
