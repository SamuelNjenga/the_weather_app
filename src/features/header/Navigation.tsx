import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ServiceDropdownMenu from "./../services/ServiceDropdownMenu";
import "./Navigation.css";

const Navigation = (): JSX.Element => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [expanded, setExpanded] = useState<boolean>(false);

  const logit = (): void => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    const watchScroll = (): void => {
      window.addEventListener("scroll", logit);
    };
    watchScroll();
    // Remove listener (just like componentWillUnmount)
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        fixed="top"
        style={{
          padding: scrollY > 40 ? "10px 10px" : "12px 10px",
          transition: "0.4s",
        }}
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand>
            <Avatar
              className="avatar-padding"
              alt="Sam Njenga"
              src={"/assets/nav_image.jpg"}
              sx={{ width: 56, height: 56 }}
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="navbar-toggler"
            onClick={() => setExpanded(!expanded)}
          >
            <span>
              MENU
              <i className="bi bi-list"></i>
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link
                eventKey={1}
                className="nav-link-class"
                to="/"
                as={Link}
                onClick={() => setExpanded(false)}
              >
                HOME
              </Nav.Link>
              <ServiceDropdownMenu setExpanded={setExpanded} />
              <Nav.Link
                eventKey={3}
                className="nav-link-class"
                to="/portfolio"
                as={Link}
                onClick={() => setExpanded(false)}
              >
                PORTFOLIO
              </Nav.Link>
              <Nav.Link
                className="nav-link-class"
                eventKey={4}
                to="/about"
                as={Link}
                onClick={() => setExpanded(false)}
              >
                ABOUT
              </Nav.Link>
              <Nav.Link
                className="nav-link-class"
                eventKey={5}
                to="/contact"
                as={Link}
                onClick={() => setExpanded(false)}
              >
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
