export const NavListComplData = [
  { navLink: "nav-home", route: "/" },
  { navLink: "nav-aboutus", route: "/about" },
  { navLink: "nav-features", route: "/feature" },
  {
    navLink: "nav-portfolio",
    route: "/portfolio",
  },
  {
    navLink: "nav-Services",
    route: "/services",
    childNav: [
      "services-ai",
      "services-as",
      "services-cs",
      "services-do",
      "services-dt",
      "services-da",
    ],
  },
  {
    navLink: "nav-Industries",
    route: "/industries",
    childNav: [
      "finance-title",
      "health-care-title",
      "supply-title",
      "mnfctr-title",
      "Retail-title",
      "tele-commun-title",
      "auto-mob-title",
      "edu-title",
      "insurance-title",
      "marketing-title",
    ],
  },
  { navLink: "nav-btn-contactus", route: "/contact" },
];
