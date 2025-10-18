import {
  Button,
  ButtonEnum,
  useTheme,
} from "ui-design-system";
import "./Navbar.scss";

function Navbar() {
  const { toggle } = useTheme();

  return (
    <div className="Navbar">
      <Button variant={ButtonEnum.Underline} clickHandler={() => { }}>Button 1</Button>
      <Button variant={ButtonEnum.Underline} clickHandler={() => {}}>Button 2</Button>
      <Button variant={ButtonEnum.Underline} clickHandler={() => {}}>Button 3</Button>
      <Button variant={ButtonEnum.Underline} clickHandler={toggle}>Toggle Theme</Button>
    </div>
  );
}

export default Navbar;
