import DropdownMenu from "../generic-components/DropdownMenu/DropdownMenu";
import "./Header.css";
import HomeBtn from "./HomeBtn/HomeBtn";
import SettingsIcon from "./SettingsIcon/SettingsIcon";

//todo: Style HomeBtn similarly to the closed variant of DropdownMenu - title bar between both

const Header = () => {
  return (
    <>
      <HomeBtn />
      <header className="header" aria-label="Header">
        <h1 className="title">M4ze Spr1nter</h1>
      </header>
      <DropdownMenu
        items={[
          { text: "Profile" },
          { text: "Settings" },
          { text: "Shop" },
          { text: "Level" },
          { text: "New maze" },
        ]}
      >
        <SettingsIcon />
      </DropdownMenu>
    </>
  );
};

export default Header;
