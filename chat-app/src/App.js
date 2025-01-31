import React from "react";
import './index.css';
import ChatMain from "./chatComponents/ChatMain";
function App() {
  React.useEffect(() => {
    import("HostApp/IndexCSS"); 
  }, []);
  return (
    <div>
      <ChatMain/>
    </div>
  );
}

export default App;
