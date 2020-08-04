// Import: Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Import: Styling
import "./ReportHeader.styles.scss";

// Import: Components
import Icon from "../Icon/Icon.component";

// UI: ReportHeader
function ReportHeader() {
  //Render ReportHeader code
  return (
    <div className="ReportHeader">
      <div className="ReportHeader__options">
        <Link className="ReportHeader__option" to="/sbar">
          <Icon icon="fas fa-laptop-medical" />
          <span className="ReportHeader__text">SBAR</span>
        </Link>
        <Link className="ReportHeader__option" to="/patient-report">
          <Icon icon="fas fa-file-medical-alt" />
          <span className="ReportHeader__text">Report</span>
        </Link>
        <Link className="ReportHeader__option" to="/notes">
          <Icon icon="fas fa-sticky-note" />
          <span className="ReportHeader__text">Notes</span>
        </Link>
        <Link className="ReportHeader__option" to="/media">
          <Icon icon="fas fa-camera" />
          <span className="ReportHeader__text">Media</span>
        </Link>
        <Link className="ReportHeader__option" to="/ecg">
          <Icon icon="fas fa-heartbeat" />
          <span className="ReportHeader__text">ECG</span>
        </Link>
        <Link className="ReportHeader__option" to="/diagnosis-of-death">
          <Icon icon="fas fa-procedures" />
          <span className="ReportHeader__text">DoD</span>
        </Link>
      </div>
    </div>
  );
}

// Export: ReportHeader
export default ReportHeader;
