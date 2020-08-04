// Import: Dependencies
import React from "react";

// Import: Styling
import "./Icon.styles.scss";

// UI: Icon
function Icon({ icon }) {
  // Render Home code
  return (
    <div className="Icon">
      <i className={icon}></i>
    </div>
  );
}

// Export: Icon
export default Icon;
