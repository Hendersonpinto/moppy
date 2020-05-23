import Mockup from "../../../assets/images/mobileapp.png";
import Superhero from "../../../assets/images/guy.png";
import Avatar from "../../../assets/images/avatar.png";
import HouseIcon from "../../../assets/images/houseicon.png";
import HouseIconPink from "../../../assets/images/houseiconp.svg";
import AddressIcon from "../../../assets/images/addressicon.png";
import AddressIconPink from "../../../assets/images/addressiconp.svg";
import MobileIcon from "../../../assets/images/mobicon.png";
import MobileIconPink from "../../../assets/images/mobiconp.svg";
// import CalendarIcon from "../../../assets/images/calendaricon.png";
import CalendarIcon from "../../../assets/images/calendaricon.svg";
import CalendarIconPink from "../../../assets/images/calendariconp.svg";
import HowItWorksBG from "../../../assets/images/hiw-bgm2.png";
import TestimonialBG from "../../../assets/images/flowers.svg";
import QuoteIcon from "../../../assets/images/quotes.svg";
import PolyIcon from "../../../assets/images/poly.png";
import Plants from "../../../assets/images/plants.png";
import Yoga from "../../../assets/images/yoga.svg";

export const cTAContent = {
  title: "A tidy place, brings peace to mind",
  buttonClass: "mybutton rose-button  lg",
  buttonText: "Sign up",
  yoga: { alt: "yoga", id: "yoga", file: Yoga },
  plants: { alt: "plants", id: "plants", file: Plants },
};

export const mockupContent = {
  title: "Book your first cleaner",
  message:
    "With our app, the process is pretty simple. You will have your own account where you can customize your home properties, compare cleanears nearby and manage your cleaning appointments.",
  buttonText: "Book a cleaner",
  image: { alt: "mobile app", id: "mockup", file: Mockup },
  avatar: null,
  buttonURL: "/hosts/book",
};
export const superheroContent = {
  classname: "superhero",
  title: "Become a superhero",
  message:
    "Are you looking for an extra income or a flexible job? Register in our app as a superhero (some people call it cleaner) and start earning money.",
  buttonText: "Join our team",
  image: { alt: "superhero", id: "superhero", file: Superhero },
  avatar: Avatar,
  buttonURL: "/",
};

export const howItWorksContent = {
  background: HowItWorksBG,
  title: "How does it work ?",
  message: "It takes less than three minutes to find your next superhero",
  steps: [
    {
      title: "Find your address",
      message:
        "Check out if moppy is available in your city. Insert your zip code and voila!",
      alt: "address icon",
      file: AddressIcon,
      filePink: AddressIconPink,
      id: "addresssvg",
    },
    {
      title: "Book a cleaner",
      message:
        "Find available and dedicated moppy cleaners everyday of the week.",
      alt: "calendar icon",
      file: CalendarIcon,
      filePink: CalendarIconPink,
      id: "calendarsvg",
    },
    {
      title: "Pay through our app",
      message:
        "Our app makes the booking really simple and secure. Keep track your cleaning history",
      alt: "phone icon",
      file: MobileIcon,
      filePink: MobileIconPink,
      id: "mobilesvg",
    },
    {
      title: "Enjoy your shiny home",
      message:
        "House cleaning has never been this easy. Spend your time on what actually matters.",
      alt: "house icon",
      file: HouseIcon,
      filePink: HouseIconPink,
      id: "housesvg",
    },
  ],
};

export const testimonialsContent = {
  title: "Our customers have nice things to say about us",
  quotes: [
    {
      owner: "Jaime Pinto",
      message:
        "Moppy is the perfect solution to keep my place tidy in busy weeks",
    },
    {
      owner: "Engiber Lozada",
      message: "Simplicity translated into a platform",
    },
    {
      owner: "Kristin Larsen",
      message:
        "We spend less time worrying about cleaning. With the app calendar I can easily plan my upcoming weeks",
    },
  ],
  image: { alt: "flowers", id: "flowers", file: TestimonialBG },
  quoteIcon: QuoteIcon,
  polyIcon: PolyIcon,
};
