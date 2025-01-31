Micro-Frontend Architecture with Webpack ModuleFederation
Host App (running on port 3000)
Redux Setup: Redux is configured in the host app, and the store is shared with both the Email App and Chat App. Any required actions or slices are added in the host app and then shared with the micro apps.
CSS: Host app's CSS is shared with the micro apps, while each micro app also includes its own CSS that is used within the host app.
Chat App (running on port 3002)
Firebase: Firebase is used to handle the real-time chat functionality, allowing users to send and receive messages.
Email App (running on port 3001)
Redux Toolkit: Redux Toolkit is used to manage the state for emails.
Store Sharing: The store from the host app is shared and used in the email app to manage email-related state.
Redux Actions and Slices: If any actions or slices are required for email management, they are added in the host app and used in the email app.
Libraries and Packages Used:
Redux Toolkit
Tailwind CSS
Firebase
Ant Design (Antd)
React Router Dom
React Icons

Note:-its only work when execute all apps at a time then 
