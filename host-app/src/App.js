import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyLayout from "./Layout/MyLayout";

const EmailMain = React.lazy(() => import("EmailApp/EmailMain"));
const ChatMain = React.lazy(() => import("ChatApp/ChatMain"));
function App() {
  React.useEffect(() => {
    import("EmailApp/IndexCSS");
    import("ChatApp/IndexCSS");
  }, []);
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route element={<MyLayout />}>
              <Route path="/" element={<EmailMain />} />
              <Route path="/chat-micro-app" element={<ChatMain />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
