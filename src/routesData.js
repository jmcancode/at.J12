import {
  faHome,
  faStickyNote,
  faFolder,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

export const routesData = [
  {
    route: "/home",
    icon: faHome,
    label: "Home",
  },
  {
    route: "/discover",
    icon: faFolder,
    label: "Plans",
  },
  {
    route: "/addjournal",
    icon: faStickyNote,
    label: "Journal",
  },
  {
    route: "/profile",
    icon: faUserCircle,
    label: "Profile",
  }
];
