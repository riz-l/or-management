// Import: Dependencies
import React from "react";

// Import: Styling
import "./SubPageSubHeader.styles.scss";

// subPageComponent: SubPageSubHeader
function SubPageSubHeader(props) {
  //Render SubPageSubHeader code
  return (
    <div className="SubPageSubHeader">
      <span>{props.text}</span>
    </div>
  );
}

// Export: SubPageSubHeader
export default SubPageSubHeader;
