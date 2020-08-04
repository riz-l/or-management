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
        <div className="Header__patient-list-toggle">
          <Icon icon="fas fa-bars" />
          <span>Patient List</span>
        </div>
        <span>Emergency Department</span>
      </div>
    </div>
  );
}

// Export: Header
export default Header;
