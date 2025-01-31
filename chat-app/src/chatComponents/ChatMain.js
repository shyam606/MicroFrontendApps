import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import * as AntdComponents from "antd";
import { IoMdSend } from "react-icons/io";
const CommonButton = React.lazy(() => import("HostApp/CommonButton"));

const ChatMain = () => {
  const [form] = AntdComponents.Form.useForm();
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  // get user list
  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const userList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(userList);
    };

    fetchUsers();
  }, []);

  // get message selected user
  useEffect(() => {
    if (!selectedUser || !currentUser) return;

    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const filteredMessages = snapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter(
          (msg) =>
            (msg.senderId === currentUser.id && msg.receiverId === selectedUser.id) ||
            (msg.senderId === selectedUser.id && msg.receiverId === currentUser.id)
        );

      setMessages(filteredMessages);
    });

    return () => unsubscribe();
  }, [selectedUser, currentUser]);


  const sendMessage = async (values) => {
    let message = values?.message;
    if (!message.trim() || !selectedUser || !currentUser) return;

    await addDoc(collection(db, "messages"), {
      text: message,
      senderId: currentUser.id,
      senderName: currentUser.name,
      receiverId: selectedUser.id,
      receiverName: selectedUser.name,
      timestamp: serverTimestamp(),
    });

    form.resetFields();
  };

  return (
    <div className="chat-container">
      <h1 className="text-xl">Select Your User</h1>
      <div className="user-selection flex gap-4">
        {users.map((user) => (
          <button
            key={user.id}
            onClick={() => setCurrentUser(user)}
            className={`p-2 border rounded-md shadow-md ${
              currentUser?.id === user.id ? "bg-gray-300" : "bg-white"
            }`}
          >
            {user.name}
          </button>
        ))}
      </div>

      {currentUser && (
        <>
          <h2 className="mt-4">Logged in as: {currentUser.name}</h2>
          <h1 className="text-xl mt-4">Select a User to Chat</h1>
          <div className="flex items-start gap-4">
            <div className="w-56 border mt-4 min-h-96">
              {users
                .filter((user) => user.id !== currentUser.id) 
                .map((user) => (
                  <p
                    key={user.id}
                    className={`cursor-pointer shadow-lg mt-1 p-3 ${
                      selectedUser?.id === user.id ? "bg-red-300" : "border border-red-300"
                    }`}
                    onClick={() => setSelectedUser(user)}
                  >
                    {user.name}
                  </p>
                ))}
            </div>

            <div className="chat-window border p-4 w-full min-h-96">
              {selectedUser ? (
                <>
                  <h2 className="mt-5">Chatting with: {selectedUser.name}</h2>
                  <div className="messages min-h-72 border p-2 overflow-auto">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`message p-2 rounded-md mt-1 ${
                          msg.senderId === currentUser.id ? "bg-red-200" : "bg-gray-100"
                        }`}
                      >
                        <strong>{msg.senderName}: </strong> {msg.text}
                      </div>
                    ))}
                  </div>

                  <AntdComponents.Form
                    className="mt-3"
                    form={form}
                    onFinish={sendMessage}
                    layout="vertical"
                    requiredMark={false}
                  >
                    <AntdComponents.Form.Item
                      name={"message"}
                      rules={[
                        {
                          required: true,
                          message: "Please type something..",
                        },
                      ]}
                    >
                      <AntdComponents.Input
                        className="input_box border rounded-md p-2 w-full"
                        placeholder={"Type a message..."}
                      />
                    </AntdComponents.Form.Item>
                    <CommonButton
                      htmlType="submit"
                      className="common_button px-4 py-2 rounded-md bg-blue-500 text-white"
                      icon={<IoMdSend size={18} color="white" />}
                      iconPosition="end"
                    >
                      Send
                    </CommonButton>
                  </AntdComponents.Form>
                </>
              ) : (
                <h2 className="mt-5 text-gray-500">No user selected for chat</h2>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatMain;
