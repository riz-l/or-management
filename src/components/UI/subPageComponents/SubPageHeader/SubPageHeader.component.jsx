// Import: Dependencies
import React from "react";

// Import: Styling
import "./SubPageHeader.styles.scss";

// Import: Components
import Icon from "../../Icon/Icon.component";

// subPageComponent: SubPageHeader
function SubPageHeader(props) {
  // Render SubPageHeader code
  return (
    <div className="SubPageHeader">
      <div className="SubPageHeader__container">
        <Icon icon={props.icon} />
        <span>{props.text}</span>
      </div>
    </div>
  );
}

// Export: SubPageHeader
export default SubPageHeader;
