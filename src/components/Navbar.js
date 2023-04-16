import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Navbar, Nav } from "react-bootstrap";
// import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "../../src/App.css";
import logo from "../logo.png"

function Navigation() {
  const [msg, setmsg] = useState("");
  // const emailRef = useRef()
  // const { resetPassword, currentUser } = useAuth()
  // const [error, setError] = useState('')
  // const [message, setMessage] = useState('')
  // const [loading, setLoading] = useState(false)
  // const history = useHistory()

  // async function handleSubmit(e) {
  //     e.preventDefault()

  //     try {
  //         setMessage('')
  //         setError('')
  //         setLoading(true)
  //         await resetPassword(emailRef.current.value)
  //         setMessage('Check your inbox for further instructions')
  //         //history.push('/dashboard')
  //     } catch {
  //         console.log(error)
  //         setError('Failed to reset the password')
  //     }

  //     setLoading(false)

  // }

  return (
    <>
      <Navbar variant="light" className="navbarcss">
        <a href="/" className="brand marg1">
          OneGene
        </a>
        <Nav className="mr-auto marg1">
          <Nav.Link className="pad1" href="/">Home</Nav.Link>
          <Nav.Link className="pad1" href="/about">About</Nav.Link>
          <Nav.Link className="pad1" href="/istatus">Inventory Status</Nav.Link>
          <Nav.Link className="pad1" href="/stock">Safety Stock</Nav.Link>
          <Nav.Link className="pad1" href="/data">Data</Nav.Link>
          {/* <Nav.Link href="/help">Help</Nav.Link> */}
        </Nav>
        <img className="image2 marg1" src={logo} />
      </Navbar>
    </>
  );
}

export default Navigation;