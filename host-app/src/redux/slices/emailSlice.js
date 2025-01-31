import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from "nanoid";

const initialState = {
    inboxData: [
        {
            id: nanoid(),
            sender: "john@example.com",
            subject: "Meeting Update",
            body: "Let's meet at 3 PM.",
            extraText: 'This is non deletable.'
        },
    ]
}

export const emailSlice = createSlice({
    name: 'email',
    initialState,
    reducers: {
        storeInboxData: (state, action) => {
            state.inboxData.unshift(action.payload)
        },
    }
})

export const { storeInboxData } = emailSlice.actions
export default emailSlice.reducer