// Import: Dependencies
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//  Import: Styling
import "./Home.styles.scss";

// Import: Components
import Ecg from "../../subPages/Ecg/Ecg.component";
import DiagnosisOfDeath from "../../subPages/DiagnosisOfDeath/DiagnosisOfDeath.component";
import Media from "../../subPages/Media/Media.component";
import Notes from "../../subPages/Notes/Notes.component";
import PatientList from "../../UI/PatientList/PatientList.component";
import PatientNameHeader from "../../UI/PatientNameHeader/PatientNameHeader.component";
import PatientReport from "../../subPages/PatientReport/PatientReport.component";
import ReportHeader from "../../UI/ReportHeader/ReportHeader.component";
import Sbar from "../../subPages/Sbar/Sbar.component";

// Page: Home
function Home() {
  // State = selectedPatient, selectedPatientData
  const [selectedPatient, setSelectedPatient] = useState("");
  const [selectedPatientData, setSelectedPatientData] = useState(null);

  // When selectedPatient changes
  // Fetch selected Patient data from OneResponse API
  // If successful, selectedPatientData === OneResponse API data (for selected Patient), loading === false
  // If unsuccessful, catch error
  useEffect(() => {
    async function getSelectedPatientData() {
      if (selectedPatient !== "") {
        try {
          const oneResponseAPI = `https://cad-message-to-trust-test.azurewebsites.net/PatientDetails/ePRID/${selectedPatient}`;
          const response = await fetch(oneResponseAPI);
          const patientData = await response.json();
          setSelectedPatientData(patientData);
        } catch (error) {
          throw new Error("Selected Patient data unavailable");
        }
      }
    }

    getSelectedPatientData();
  }, [selectedPatient]); // If selectedPatient changes, data fetch from OneResponse API runs again

  // Render Home code
  return (
    <BrowserRouter>
      <div className="Home">
        <div className="Home__patientlist">
          <PatientList setSelectedPatient={setSelectedPatient} />
        </div>
        <div className="Home__patientreport">
          <PatientNameHeader
            selectedPatient={selectedPatient}
            selectedPatientData={selectedPatientData}
          />
          <ReportHeader />
          <Switch>
            <Route path="/sbar" component={Sbar} />
            <Route path="/patient-report">
              <PatientReport selectedPatientData={selectedPatientData} />
            </Route>
            <Route path="/notes" component={Notes} />
            <Route path="/media" component={Media} />
            <Route path="/ecg" component={Ecg} />
            <Route path="/diagnosis-of-death" component={DiagnosisOfDeath} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

// Export: Home
export default Home;
