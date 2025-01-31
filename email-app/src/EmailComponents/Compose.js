import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import * as AntdComponents from 'antd'
import { ReactIcons } from "../utils/ReactIcons";
const CommonButton = React.lazy(() => import("HostApp/CommonButton"));
import { storeInboxData } from "HostApp/emailSlice";

const forms = [
  {
    placeholder: 'To',
    label: 'To',
    name: 'email',
    type: 'email',
    rules: [
      {
        type: 'email',
        message: 'Please enter a valid email!',
      },
      {
        required: true,
        message: 'Please Enter your email.',
      },
    ]
  },
  {
    placeholder: 'Subject',
    label: 'Subject',
    name: 'subject',
    type: 'text',
  },
  {
    placeholder: 'Type your message here...',
    label: 'Message',
    name: 'message',
    type: 'textArea',
  },
]
function Compose({ setView }) {
  const dispatch = useDispatch()

  const handleSubmit = (values) => {
    let payload = { id: nanoid(), sender: values?.email, subject: values?.subject, body: values?.message }
    dispatch(storeInboxData(payload))
    setView("inbox");
  }
  return (
    <div>
      <div className="flex items-center gap-1">
        <h3>Compose Email</h3>
        <ReactIcons.EditIcon />
      </div>
      <div className="mt-2" style={{ width: '30%' }}>
        <AntdComponents.Form onFinish={handleSubmit} layout="vertical" requiredMark={false}>
          {
            forms?.map((ele, index) => {
              return (
                <AntdComponents.Form.Item
                  key={index}
                  name={ele?.name}
                  autoComplete="off"
                  rules={ele?.rules}
                >
                  {
                    ele?.type == 'textArea' ?
                      <AntdComponents.Input.TextArea rows={6} className="input_box" placeholder={ele?.placeholder} />
                      :
                      <AntdComponents.Input className="input_box" placeholder={ele?.placeholder} />
                  }
                </AntdComponents.Form.Item>
              )
            })
          }
          <CommonButton
            htmlType="submit"
            className={`common_button`}
            icon={<ReactIcons.SendIcon />}
            iconPosition="end"
          >
            Send
          </CommonButton>
        </AntdComponents.Form>
      </div>
    </div>
  );
}

export default Compose;
