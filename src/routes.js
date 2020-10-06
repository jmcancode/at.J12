import {
  faHome,
  faFolder,
  faGlobe,
  faBook,
} from "@fortawesome/react-fontawesome";

const routes = [
  {
    route: "/home",
    icon: faHome,
    label: "Home",
    component: "Home",
  },
  {
    route: "/plan",
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
  },
];

export default routes;