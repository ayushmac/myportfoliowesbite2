import About from "./About";
import Contacts from "./Contacts";
import Education from "./Education";
import Projects from "./Projects";
import Stickybuttons from "../Components/Stickybuttons";
const Home = () => {
  return (
    <div>
      <About />
      <Education />
      <Projects />
      <Contacts />
      <Stickybuttons />
    </div>
  );
};

export default Home;
