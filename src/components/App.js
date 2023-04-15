import React from "react";
import { Container, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navigation from "./Navbar";

function App() {
  return (
    <Container
      className="align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
      </Router>
      {/* </div> */}
    </Container>
  );
}

export default App;
