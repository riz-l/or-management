// Import: Dependencies
import React from "react";

// Import: Styling
import "./index.css";

// Import: Components
import Header from "./components/UI/Header/Header.component";

// Import: Pages
import Home from "./components/pages/Home/Home.component";

// Component: App
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

// Export: App
export default App;
