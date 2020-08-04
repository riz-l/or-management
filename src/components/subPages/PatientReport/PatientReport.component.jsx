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
  // Maps data properties in selectedPatientData
  const currentPatientRender = selectedPatientData.map(
    ({
      Master_ePR_ID,
      PD_Firstname,
      PD_Surname,
      PD_DOB,
      PD_Age_Yrs,
      PD_Age_Mths,
      PD_Gender,
      PD_NHS_No,
      PD_Ethnicity,
      PD_Weight,
      PD_Telephone,
      PD_Housenum,
      PD_Add1,
      PD_Add2,
      PD_Add3,
      PD_Postcode,
      PD_Patient_Allergy,
      PD_Allergy,
      PD_Patient_Meds,
      PD_Medication,
    }) => (
      <div>
        <div className="PatientReport__layout" key={Master_ePR_ID}>
          <div className="PatientReport__layout-col-1">
            <SubPageSubHeader text="Patient Details" />
            <SubPageField
              fieldTitle="Forename"
              fieldData={PD_Firstname ? PD_Firstname : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Surname"
              fieldData={PD_Surname ? PD_Surname : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Date of Birth"
              fieldData={PD_DOB ? PD_DOB : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Age (Years)"
              fieldData={PD_Age_Yrs ? PD_Age_Yrs : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Age (Months)"
              fieldData={PD_Age_Mths ? PD_Age_Mths : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Gender"
              fieldData={PD_Gender ? PD_Gender : "Not recorded"}
            />
            <SubPageField
              fieldTitle="NHS Number"
              fieldData={PD_NHS_No ? PD_NHS_No : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Ethnicity"
              fieldData={PD_Ethnicity ? PD_Ethnicity : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Weight (kg)"
              fieldData={PD_Weight ? PD_Weight : "Not recorded"}
            />
          </div>
          <div className="PatientReport__layout-col-2">
            {/* Needs to be tested //TODO */}
            <SubPageField
              fieldTitle="Telephone"
              fieldData={PD_Telephone ? PD_Telephone : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Address"
              fieldData={
                PD_Housenum || PD_Add1 || PD_Add2 || PD_Add3 || PD_Postcode ? (
                  <div>
                    {PD_Housenum}
                    {PD_Add1}
                    {PD_Add2}
                    {PD_Add3}
                    {PD_Postcode}
                  </div>
                ) : (
                  "Not recorded"
                )
              }
            />
            <SubPageField
              fieldTitle="Does the Patient have allergies?"
              fieldData={
                PD_Patient_Allergy ? PD_Patient_Allergy : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="Allergies"
              fieldData={PD_Allergy ? PD_Allergy : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Does the Patient take medication?"
              fieldData={PD_Patient_Meds ? PD_Patient_Meds : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Medications"
              fieldData={PD_Medication ? PD_Medication : "Not recorded"}
            />
          </div>
          <div className="PatientReport__layout-col-3">
            {/* Next of Kin //TODO */}
            <SubPageSubHeader text="Next of Kin" />
            <SubPageField
              fieldTitle="Forename"
              fieldData={PD_Weight ? PD_Weight : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Surname"
              fieldData={PD_Weight ? PD_Weight : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Relationship to Patient"
              fieldData={PD_Weight ? PD_Weight : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Contact Number"
              fieldData={PD_Weight ? PD_Weight : "Not recorded"}
            />
            <SubPageField
              fieldTitle="GP Surgery Name"
              fieldData={PD_Weight ? PD_Weight : "Not recorded"}
            />
            <SubPageField
              fieldTitle="GP Surgery Address"
              fieldData={PD_Weight ? PD_Weight : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Other"
              fieldData={PD_Weight ? PD_Weight : "Not recorded"}
            />
          </div>
        </div>
      </div>
    )
  );

  // Render PatientReport code
  return (
    <div className="PatientReport">
      <SubPageHeader icon="fas fa-file-medical-alt" text="Patient Report" />
      {selectedPatient === null ? null : currentPatientRender}
    </div>
  );
}

// Export: PatientReport
export default PatientReport;
