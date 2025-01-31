import React from "react";
import { ReactIcons } from "../utils/ReactIcons";

function ViewEmail({ email, setView }) {
  if (!email) return <div>No email selected.</div>;

  return (
    <div className="bg-green-50 min-h-[90vh] py-5 text-center">
      <ReactIcons.BackIcon size={28} color={"red"} className={'mt-2'}  onClick={() => setView("inbox")} />
      <div className="flex items-center justify-center gap-1 mb-3">
        <h1 className="text-xl font-semibold">View Email</h1>
        <ReactIcons.EmailIcon size={25} />
      </div>
      <p><strong>From:</strong> {email.sender}</p>
      <p className="mt-1"><strong>Subject:</strong> {email.subject}</p>
      <p className="mt-1">{email.body}</p>
    </div>
  );
}

export default ViewEmail;
