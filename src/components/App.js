import React from "react";
import { Container, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navigation from "./Navbar";
import InventoryStatus from "./InventoryStatus";
import SafetyStock from "./SafetyStock";
import Data from "./Data";

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
            <Route exact path='/istatus' element={<InventoryStatus />} />
            <Route path='/stock' element={<SafetyStock />} />
            <Route path='/data' element={<Data />} />
          </Routes>
      </Router>
      {/* </div> */}
    </Container>
  );
}

export default App;
