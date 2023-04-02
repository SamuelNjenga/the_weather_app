import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./ServiceDropdown.css";

const ServiceDropdownMenu = () => {
  return (
    <>
      <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        menuVariant="dark"
        title="SERVICES"
        className="nav-link-class"
      >
        <Dropdown.Item href="#/action-1">Astronomy Weather</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Realtime Weather</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Forecast Weather</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Others</Dropdown.Item>
      </DropdownButton>
    </>
  );
};

export default ServiceDropdownMenu;
