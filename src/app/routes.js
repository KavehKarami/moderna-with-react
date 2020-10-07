import Home from "./containers/Home";
import About from "./containers/About";

export const routes = [
  { path: "/", component: Home, exact: true, label: "Home" },
  { path: "/about", component: About, exact: true, label: "About Us" },
  { path: "/services", component: Services, exact: true, label: "Services" },
  { path: "/portfolio", component: Portfolio, exact: true, label: "Portfolio" },
  { path: "/team", component: Team, exact: true, label: "Team" },
  { path: "/blog", component: Blog, exact: true, label: "Blog" },
  { path: "/contact", Component: contact, exact: true, label: "Contact Us" },
];
