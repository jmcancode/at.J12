import {
  faHome,
  faUser,  
  faStickyNote,
  faFolder,
} from '@fortawesome/free-solid-svg-icons';

export const routesData = [
  {
    route: "/home",
    icon: faHome,
    label: "Home",
    component: "Home",
  },
  {
    route: "/discover",
    icon: faFolder,
    label: "Plans",
  },
  {
    route: "/journal",
    icon: faStickyNote,
    label: "Journal",
  },
  {
    route: "/profile",
    icon: faUser,
    label: "Profile",
  }
];
