// Import: Dependencies
import React from "react";

// Import: Styling
import "./SubPageField.styles.scss";

// subPageComponent: SubPageField
function SubPageField(props) {
  //Render SubPageField code
  return (
    <div className="SubPageField">
      <span className="SubPageField__title">{props.fieldTitle}</span>
      <span className="SubPageField__data">{props.fieldData}</span>
    </div>
  );
}

// Export: SubPageField
export default SubPageField;
