import React from "react";
import {
  Button,
  ButtonEnum,
  useTheme,
} from "ui-design-system";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { toggle } = useTheme();
  const navigate = useNavigate();

  const handleNavigate = (e, route) => {
    e.preventDefault();
    navigate(route);
  };

  return (
    <div className="Navbar">
      <Button variant={ButtonEnum.Underline} clickHandler={(e) => handleNavigate(e, 'forms')}>Forms</Button>
      <Button variant={ButtonEnum.Underline} clickHandler={(e) => handleNavigate(e, 'components')}>Components</Button>
      <Button variant={ButtonEnum.Underline} clickHandler={toggle}>Toggle Theme</Button>
    </div>
  );
}

export default Navbar;
