// Import: Dependencies
import React from "react";

// Import: Styling
import "./UserDetails.styles.scss";

// Import: Components
import Icon from "../Icon/Icon.component";

// UI: UserDetails
function UserDetails() {
  // Render Home code
  return (
    <div className="UserDetails">
      <div className="UserDetails__text">
        <span>Welcome jldxc</span>
        <span>DXC Super User</span>
        <span>Location not sent</span>
      </div>
      <div className="UserDetails__icon">
        <Icon icon="fas fa-users" />
      </div>
    </div>
  );
}

// Export: UserDetails
export default UserDetails;
