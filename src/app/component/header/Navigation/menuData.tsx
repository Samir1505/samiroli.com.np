import { HeaderItem } from "@/app/types/menu";


export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Skills", href: "/skills" },
  { label: "Project", href: "/project" },
  {
    label: "other",
    href: "",
    submenu: [
      { label: "Gallery", href: "/gallery" },
      { label: "Teams", href: "/teams" },
      { label: "Certificates", href: "/certificates" },
    ],
  },
  { label: "Contact", href: "/contact" },
];  