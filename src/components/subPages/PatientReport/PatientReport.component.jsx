// Import: Dependencies
import React from "react";

// Import: Styling
import "./PatientReport.styles.scss";

// Import: Component
import SubPageHeader from "../../UI/subPageComponents/SubPageHeader/SubPageHeader.component";
import SubPageSubHeader from "../../UI/subPageComponents/SubPageSubHeader/SubPageSubHeader.component";
import SubPageField from "../../UI/subPageComponents/SubPageField/SubPageField.component";

// subPage: PatientReport
function PatientReport({ selectedPatient, selectedPatientData }) {
  // Render PatientReport code
  return (
    <div className="PatientReport">
      <SubPageHeader icon="fas fa-file-medical-alt" text="Patient Report" />
      {selectedPatient && selectedPatientData ? (
        <div className="PatientReport__layout">
          <div className="PatientReport__layout-col-1">
            <SubPageSubHeader text="Patient Details" />
            <SubPageField
              fieldTitle="Forename"
              fieldData={
                selectedPatientData.PD_Firstname
                  ? selectedPatientData.PD_Firstname
                  : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="Surname"
              fieldData={
                selectedPatientData.PD_Surname
                  ? selectedPatientData.PD_Surname
                  : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="Date of Birth"
              fieldData={
                selectedPatientData.PD_DOB
                  ? selectedPatientData.PD_DOB
                  : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="Age (Years)"
              fieldData={
                selectedPatientData.PD_Age_Yrs
                  ? selectedPatientData.PD_Age_Yrs
                  : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="Age (Months)"
              fieldData={
                selectedPatientData.PD_Age_Mths
                  ? selectedPatientData.PD_Age_Mths
                  : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="Gender"
              fieldData={
                selectedPatientData.PD_Gender
                  ? selectedPatientData.PD_Gender
                  : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="NHS Number"
              fieldData={
                selectedPatientData.PD_NHS_No
                  ? selectedPatientData.PD_NHS_No
                  : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="Ethnicity"
              fieldData={
                selectedPatientData.PD_Ethnicity
                  ? selectedPatientData.PD_Ethnicity
                  : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="Weight (kg)"
              fieldData={
                selectedPatientData.PD_Weight
                  ? selectedPatientData.PD_Weight
                  : "Not recorded"
              }
            />
          </div>
          <div className="PatientReport__layout-col-2">
            {/* Needs to be tested //TODO */}
            <SubPageField
              fieldTitle="Telephone"
              fieldData={
                selectedPatientData.PD_Telephone
                  ? selectedPatientData.PD_Telephone
                  : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="Address"
              fieldData={
                selectedPatientData.PD_Housenum ||
                selectedPatientData.PD_Add1 ||
                selectedPatientData.PD_Add2 ||
                selectedPatientData.PD_Add3 ||
                selectedPatientData.PD_Postcode ? (
                  <div>
                    {selectedPatientData.PD_Housenum}
                    {selectedPatientData.PD_Add1}
                    {selectedPatientData.PD_Add2}
                    {selectedPatientData.PD_Add3}
                    {selectedPatientData.PD_Postcode}
                  </div>
                ) : (
                  "Not recorded"
                )
              }
            />
            <SubPageField
              fieldTitle="Does the Patient have allergies?"
              fieldData={
                selectedPatientData.PD_Patient_Allergy
                  ? selectedPatientData.PD_Patient_Allergy
                  : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="Allergies"
              fieldData={
                selectedPatientData.PD_Allergy
                  ? selectedPatientData.PD_Allergy
                  : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="Does the Patient take medication?"
              fieldData={
                selectedPatientData.PD_Patient_Meds
                  ? selectedPatientData.PD_Patient_Meds
                  : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="Medications"
              fieldData={
                selectedPatientData.PD_Medication
                  ? selectedPatientData.PD_Medication
                  : "Not recorded"
              }
            />
          </div>
          <div className="PatientReport__layout-col-3">
            {/* Next of Kin //TODO */}
            <SubPageSubHeader text="Next of Kin" />
            <SubPageField
              fieldTitle="Forename"
              fieldData={
                selectedPatientData.PD_Weight
                  ? selectedPatientData.PD_Weight
                  : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="Surname"
              fieldData={
                selectedPatientData.PD_Weight
                  ? selectedPatientData.PD_Weight
                  : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="Relationship to Patient"
              fieldData={
                selectedPatientData.PD_Weight
                  ? selectedPatientData.PD_Weight
                  : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="Contact Number"
              fieldData={
                selectedPatientData.PD_Weight
                  ? selectedPatientData.PD_Weight
                  : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="GP Surgery Name"
              fieldData={
                selectedPatientData.PD_Weight
                  ? selectedPatientData.PD_Weight
                  : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="GP Surgery Address"
              fieldData={
                selectedPatientData.PD_Weight
                  ? selectedPatientData.PD_Weight
                  : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="Other"
              fieldData={
                selectedPatientData.PD_Weight
                  ? selectedPatientData.PD_Weight
                  : "Not recorded"
              }
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

// Export: PatientReport
export default PatientReport;
