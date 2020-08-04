// Import: Dependencies
import React from "react";

// Import: Styling
import "./PatientNameHeader.styles.scss";

// Import: Components
import Icon from "../Icon/Icon.component";

// UI: PatientNameHeader
function PatientNameHeader({ selectedPatient, selectedPatientData }) {
  // Maps data properties in selectedPatientData
  const currentPatientRender = selectedPatientData.map(
    ({ Master_ePR_ID, PD_Firstname, PD_Surname }) => (
      <div className="PatientNameHeader" key={Master_ePR_ID}>
        <div className="PatientNameHeader__name-container">
          <div className="PatientNameHeader__name-container-row">
            <span className="PatientNameHeader__pre-text">Patient Name:</span>
            <span className="PatientNameHeader__patient-name">
              {PD_Firstname ? (
                PD_Firstname
              ) : (
                <span className="PatientNameHeader__placeholder">Forename</span>
              )}
            </span>
            <span className="PatientNameHeader__patient-name">
              {PD_Surname ? (
                PD_Surname
              ) : (
                <span className="PatientNameHeader__placeholder">Surname</span>
              )}
            </span>
          </div>
          <div className="PatientNameHeader__master-epr-id">
            <span>Master ePR ID:</span>
            <span className="PatientNameHeader__patient-id">
              {Master_ePR_ID ? (
                Master_ePR_ID
              ) : (
                <span className="PatientNameHeader__patient-id-placeholder">
                  No Master_ePR_ID
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    )
  );

  // Render PatientNameHeader code
  // If selectedPatient === null, render "Please select a Patient from the Patient list"
  // If selectedPatient !== null, render {currentPatientRender}
  return (
    <div>
      {selectedPatient === null ? (
        <div className="PatientNameHeader__warning">
          <Icon icon="fas fa-exclamation-triangle" />
          <span>Please select a Patient from the Patient List</span>
        </div>
      ) : (
        currentPatientRender
      )}
    </div>
  );
}

// Export: PatientNameHeader
export default PatientNameHeader;
