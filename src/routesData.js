import {
  faHome,
  faFolder,
  faGlobe,
  faBook,
} from '@fortawesome/free-solid-svg-icons';

export const routesData = [
  {
    route: "/home",
    icon: faHome,
    label: "Home",
    component: "Home",
  },
  {
    route: "/myplans",
    icon: faFolder,
    label: " My Plans",
  },
  {
    route: "/plans",
    icon: faGlobe,
    label: "Discover",
  },
  {
    route: "/journal",
    icon: faBook,
    label: "Journal",
  }
];
