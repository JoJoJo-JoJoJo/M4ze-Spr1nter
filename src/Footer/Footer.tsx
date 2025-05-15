import { GITHUB_LINK, LAST_UPDATE_DATE } from "../constants/constants";
import Anchor from "../generic-components/Anchor";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" aria-label="Footer">
      <p>Last updated: {LAST_UPDATE_DATE}</p>
      <p>
        <Anchor href={GITHUB_LINK} text="Visit my GitHub" />
      </p>
      <p>Copyright © 2025, JoJo, All Rights Reserved.</p>
    </div>
  );
}

export default Footer
