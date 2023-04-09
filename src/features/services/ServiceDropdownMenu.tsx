import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";
import "./ServiceDropdown.css";

interface ServiceDropdownMenuProps {
  setExpanded: (expanded: boolean) => void;
}

const ServiceDropdownMenu = (props: ServiceDropdownMenuProps) => {
  const { setExpanded } = props;
  return (
    <DropdownButton
      id="dropdown-button-dark-example2"
      variant="secondary"
      menuVariant="dark"
      title="SERVICES"
      className="nav-link-class"
    >
      <Dropdown.Item
        as={Link}
        to={`/service-astronomy`}
        onClick={() => setExpanded(false)}
      >
        Astronomy Weather
      </Dropdown.Item>
      <Dropdown.Item
        as={Link}
        to={`/service-realtime`}
        onClick={() => setExpanded(false)}
      >
        Realtime Weather
      </Dropdown.Item>
      <Dropdown.Item
        as={Link}
        to={`/service-forecast`}
        onClick={() => setExpanded(false)}
      >
        Forecast Weather
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-4">Others</Dropdown.Item>
    </DropdownButton>
  );
};

export default ServiceDropdownMenu;
