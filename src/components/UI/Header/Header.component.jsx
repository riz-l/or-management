// Import: Dependencies
import React from "react";

// Import: Styling
import "./Header.styles.scss";

// Import: Components
import Logo from "../Logo/Logo.component";
import UserDetails from "../UserDetails/UserDetails.component";
import Icon from "../Icon/Icon.component";

// UI: Header
function Header() {
  // Render Home code
  return (
    <div className="Header">
      <div className="Header__primary">
        <div className="Header__logo-container">
          <Logo />
        </div>
        <div className="Header__userdetails-containter">
          <UserDetails />
        </div>
      </div>
      <div className="Header__secondary">
        <span>Emergency Department</span>
        <div className="Header__patient-list-toggle">
          <span>Patient List</span>
          <Icon icon="fas fa-bars" />
        </div>
      </div>
    </div>
  );
}

// Export: Header
export default Header;
