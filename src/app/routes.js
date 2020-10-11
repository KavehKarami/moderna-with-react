import Home from "./containers/Home";
import About from "./containers/About";
import Services from "./containers/Services";
import Portfolio from "./containers/Portfolio";
import Team from "./containers/Team";
import Blog from "./containers/Blog";
import BlogSingle from "./containers/BlogSingle";
import Contact from "./containers/Contact";

export const routes = [
  { path: "/", component: Home, exact: true, label: "Home" },
  { path: "/about", component: About, exact: true, label: "About Us" },
  { path: "/services", component: Services, exact: true, label: "Services" },
  { path: "/portfolio", component: Portfolio, exact: true, label: "Portfolio" },
  { path: "/team", component: Team, exact: true, label: "Team" },
  { path: "/blog", component: Blog, exact: true, label: "Blog" },
  { path: "/blog/:id", component: BlogSingle, exact: true },
  { path: "/contact", component: Contact, exact: true, label: "Contact Us" },
];
