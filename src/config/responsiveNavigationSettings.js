import logo from "../react-logo.svg.png";

export const navSettings = { 
  navLinks: [
    {
      path: "/science",
      text: "Science",
      icon: 'ion-ios-flask'
    },
    {
      path: "/politics",
      text: "Politics",
      icon: "ion-ios-megaphone"
    },
    {
      path: "/automotive",
      text: "Automotive",
      icon: "ion-ios-car"
    },
    {
      path: "/hardcoverfiction",
      text: "Hardcover Fiction",
      icon: "ion-ios-book"
    }
  ], 
  background: "#444",
  hoverBackground: "#ddd", 
  linkColor: "#AAA",
  logo: logo,
  icons: {
    moon: "ion-ios-moon",
    sun: "ion-ios-sunny",
  }
};
