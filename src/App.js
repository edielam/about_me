//src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Home";

const App = () => {
  //eslint-disable-next-line
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 1000); // Adjust the time as needed
  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/0x1" element={<Home section="about" />} />
        <Route path="/0x2" element={<Home section="projects" />} />
        <Route path="/0x3" element={<Home section="contact" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
