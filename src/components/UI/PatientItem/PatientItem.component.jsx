// Import: Dependencies
import React from "react";

// Import: Styling
import "./PatientItem.styles.scss";

// Import: Components
import Icon from "../Icon/Icon.component";

// UI: PatientItem
function PatientItem({ PD_Firstname, PD_Surname }) {
  // Render Home code
  return (
    <div className="PatientItem">
      <div className="PatientItem__icon">
        <Icon icon="fas fa-user-alt" />
      </div>
      <div className="PatientItem__name">
        <span className="PatientItem_forename">
          {PD_Firstname ? (
            PD_Firstname
          ) : (
            <span className="PatientItem__name-undisclosed">
              Undisclosed Firstname
            </span>
          )}
        </span>
        <span className="PatientItem_surname">
          {PD_Surname ? (
            PD_Surname
          ) : (
            <span className="PatientItem__name-undisclosed">
              Undisclosed Surname
            </span>
          )}
        </span>
      </div>
    </div>
  );
}

// Export: PatientItem
export default PatientItem;
