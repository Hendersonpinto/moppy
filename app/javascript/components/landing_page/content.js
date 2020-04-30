import Mockup from "../../../assets/images/mobileapp.png";
import Superhero from "../../../assets/images/superhero.png";
import HouseIcon from "../../../assets/images/houseicon.png";
import AddressIcon from "../../../assets/images/addressicon.png";
import MobileIcon from "../../../assets/images/mobicon.png";
import CalendarIcon from "../../../assets/images/calendaricon.png";
import HowItWorksBG from "../../../assets/images/hiw-bg.png";

export const mockupContent = {
  title: "Book your first cleaner",
  message:
    "With our app, the process is pretty simple. You will have your own account where you can customize your home properties, compare cleanears nearby and manage your cleaning appointments.",
  buttonText: "Book a cleaner",
  image: { alt: "mobile app", id: "mockup", file: Mockup },
};
export const superheroContent = {
  classname: "superhero inverse",
  title: "Become a superhero",
  message:
    "Are you looking for an extra income or a flexible job to mix with your studies? Register in our app as a superhero (some people call it cleaner). In the app you’ll find your own calendar where you can choose the days you’ll like to work,  an integrated chat to communicate with your clients and a good overview of all your past and future jobs",
  buttonText: "Join our team",
  image: { alt: "superhero", id: "superhero", file: Superhero },
};

export const howItWorksContent = {
  background: HowItWorksBG,
  title: "How does it work ?",
  message: "It takes less than three minutes to find your next superhero",
  steps: [
    {
      title: "Find your address",
      message:
        "Checkout if moppy is available in your city. Insert your zip code and voila!",
      alt: "address icon",
      file: AddressIcon,
    },
    {
      title: "Book a cleaner",
      message:
        "Find available moppy cleaners everyday of the week. There is no excuse to not have your home impeccable",
      alt: "calendar icon",
      file: CalendarIcon,
    },
    {
      title: "Pay through our app",
      message:
        "Our app makes the booking really simple and secure. Keep track your cleaning history",
      alt: "phone icon",
      file: MobileIcon,
    },
    {
      title: "Enjoy your shiny home",
      message:
        "House cleaning has never been this easy. Spend your time on things that actually matter.",
      alt: "house icon",
      file: HouseIcon,
    },
  ],
};
