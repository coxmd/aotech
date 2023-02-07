//image source
import store from "../assets/store.png";
import cart from "../assets/cart.png";
import help from "../assets/help.png";
import bag from "../assets/bag.png";

export default function useTextButtonWithImageData() {
  const mobileNavigationButtons = [
    { text: "Bag", imageSource: bag, id: 0, link: "#" },
    { text: "Orders", imageSource: cart, id: 1, link: "#" },
    { text: "Find a Store", imageSource: store, id: 2, link: "#" },
    { text: "Help", imageSource: help, id: 3, link: "#" },
  ];

  return { mobileNavigationButtons };
}
