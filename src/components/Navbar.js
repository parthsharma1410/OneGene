import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Navbar, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "../../src/App.css";

function Navigation() {
  return (
    <>
      <Navbar variant="light" className="navbarcss">
        <a href="/" className="brand">
          OneGene
        </a>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          {/* <Nav.Link href="/help">Help</Nav.Link> */}
        </Nav>
      </Navbar>
    </>
  );
}

export default Navigation;