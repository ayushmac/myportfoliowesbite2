import Navibar from "./Components/Navibar";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Education from "./Pages/Education";
import Projects from "./Pages/Projects";
import Contacts from "./Pages/Contacts";
import Home from "./Pages/Home";
import Stickybuttons from "./Components/Stickybuttons";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <Navibar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
