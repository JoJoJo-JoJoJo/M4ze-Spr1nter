import "./Header.css";
import HomeBtn from "./HomeBtn/HomeBtn";
import SettingsBtn from "./SettingsBtn/SettingsBtn";

const Header = () => {
  return (
    <div className="header" aria-label="Header">
      <HomeBtn />
      <h1>M4ze Spr1nter</h1>
      <SettingsBtn />
    </div>
  )
}

export default Header
