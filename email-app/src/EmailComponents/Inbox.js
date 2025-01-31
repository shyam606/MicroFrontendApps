import React from "react";
import { useSelector } from "react-redux";
import { ReactIcons } from "../utils/ReactIcons";

const Inbox = ({ setSelectedEmail, setView }) => {
  const [inboxDataMain,setInboxDataMain] = React.useState([])
  const getInboxData = useSelector((state) => state.email.inboxData)
  React.useEffect(()=>{
    setInboxDataMain(getInboxData)
  },[getInboxData])
  console.log('getInboxData>>', getInboxData);
  const handleDelete = (e, id) => {
    e.stopPropagation()
    let filterData = inboxDataMain?.filter((ele)=>ele?.id!=id)
    setInboxDataMain(filterData)
  }
  return (
    <div>
      <div className="flex items-center">
        <h1 className="text-lg">Inbox</h1>
      </div>
      {inboxDataMain?.map((email) => (
        <div key={email.id} className="inbox_card flex items-center justify-between cursor-pointer"
          onClick={() => { setSelectedEmail(email); setView("view"); }}>
          <div>
            <strong>From:</strong> {email.sender} <br />
            <strong>Subject:</strong> {email.subject}
            <p className="text-red-500">{email.extraText}</p>
          </div>
          {
            !email.extraText&&
          <ReactIcons.DeleteIcon size={30} onClick={(e) => handleDelete(e, email.id)} />
          }
        </div>
      ))}
    </div>
  );
}

export default Inbox;
