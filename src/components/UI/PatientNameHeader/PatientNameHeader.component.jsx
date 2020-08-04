import React from "react";

function PatientNameHeader({ selectedPatient, selectedPatientData }) {
  return (
    <div>
      <h2>
        Patient Name:
        {selectedPatientData !== null && selectedPatientData.Active_ePR
          ? selectedPatientData.Active_ePR
          : "Awaiting PD_Firstname"}
      </h2>
    </div>
  );
}

export default PatientNameHeader;
