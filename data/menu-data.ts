import type { IMenuDT } from "@/types/menu-d-t";

// menu data 
const menu_data: IMenuDT[] = [
  {
    id: 1,
    title: "menu.home",
    link: "/",
    home_dropdown: false,
    
   
  },
  {
    id: 2,
    title: "menu.services",
    link: "/services",
    has_dropdown: false,
  },

  {
    id: 3,
    title: "menu.clients",
    link: "/clients",
    has_dropdown: false,
  
  },
  {
    id: 4,
    title: "menu.team",
    link: "/team",
    has_dropdown: false,
   
  },
  {
    id: 5,
    title: "menu.aboutUs",
    link: "/about-us",
    has_dropdown: false,
   
  },
  {
    id: 6,
    title: "menu.contactUs",
    link: "/contact-us",
    has_dropdown: false,
  },
];
export default menu_data;