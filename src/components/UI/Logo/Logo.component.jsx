// Import: Dependencies
import React from "react";

// Import: Styling
import "./Logo.styles.scss";

// Import: Assets
import { ReactComponent as OneResponseLogo } from "../../../assets/images/oneresponselogo.svg";

// UI: Logo
function Logo() {
  // Render Home code
  return (
    <div className="Logo">
      <OneResponseLogo />
    </div>
  );
}

// Export: Logo
export default Logo;
