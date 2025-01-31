import React from "react";
import EmailMain from "./EmailComponents/EmailMain";
import './index.css';
function App() {
  React.useEffect(() => {
    import("HostApp/IndexCSS"); 
  }, []);
  return (
    <div>
      <EmailMain />
    </div>
  );
}

export default App;
