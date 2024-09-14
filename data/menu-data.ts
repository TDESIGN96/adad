import type { IMenuDT } from "@/types/menu-d-t";

// menu data 
const menu_data: IMenuDT[] = [
  {
    id: 1,
    title: "الرئيسية",
    link: "/",
    home_dropdown: false,
    
   
  },
  {
    id: 2,
    title: "خدماتنا",
    link: "/services",
    has_dropdown: false,
  },

  {
    id: 3,
    title: "العملاء",
    link: "/clients",
    has_dropdown: false,
  
  },
  {
    id: 4,
    title: "فريق العمل",
    link: "/team",
    has_dropdown: false,
   
  },
  {
    id: 5,
    title: "من نحن ",
    link: "/about-us",
    has_dropdown: false,
   
  },
  {
    id: 6,
    title: "تواصل معنا",
    link: "/contact-us",
    has_dropdown: false,
  },
];
export default menu_data;