import React from "react";
import Inbox from "./Inbox";
import Compose from "./Compose";
import ViewEmail from "./ViewEmail";
import { ReactIcons } from "../utils/ReactIcons";
const CommonButton = React.lazy(() => import("HostApp/CommonButton"));

function EmailMain() {
  const [selectedEmail, setSelectedEmail] = React.useState(null);
  const [view, setView] = React.useState("inbox"); 
  const [ActiveView, setActiveView] = React.useState("inbox"); 

  console.log("view>>>", view);

  React.useEffect(() => {
    const getTabName = localStorage.getItem("tabName");
    if (getTabName) {
      setActiveView(getTabName);
    }
  }, []);

  console.log("ActiveView", ActiveView);

  return (
    <div className="px-2">
      <h1 className="text-xl text-center mt-6 font-semibold">Email Application</h1>
      <div className="flex items-center gap-5 mt-3">
        <CommonButton
          isActive={ActiveView === "inbox"}
          onClick={() => {
            setActiveView("inbox");
            localStorage.setItem("tabName", "inbox");
          }}
          icon={<ReactIcons.InboxIcon size={18} color={"red"} className={"mt-1"} />}
        >
          Inbox
        </CommonButton>

        <CommonButton
          isActive={ActiveView === "compose"}
          onClick={() => {
            setActiveView("compose");
            localStorage.setItem("tabName", "compose");
          }}
          icon={<ReactIcons.SendIcon size={18} color={"red"} className={"mt-1"} />}
        >
          Compose
        </CommonButton>
      </div>
      <div className="mt-5">
        {ActiveView === "inbox" && <Inbox setSelectedEmail={setSelectedEmail} setView={setActiveView} />}
        {ActiveView === "compose" && <Compose setView={setActiveView} />}
        {ActiveView === "view" && <ViewEmail email={selectedEmail} setView={setActiveView} />}
      </div>
    </div>
  );
}

export default EmailMain;
