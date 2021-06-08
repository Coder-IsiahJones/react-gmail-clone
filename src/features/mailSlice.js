import { createSlice } from "@reduxjs/toolkit"

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageIsOpen: false,
  },
  reducers: {
    openMessageIsOpen: (state) => {
      state.sendMessageIsOpen = true
    },
    closedMessageIsOpen: (state) => {
      state.sendMessageIsOpen = false
    },
  },
})

export const { openMessageIsOpen, closedMessageIsOpen } = mailSlice.actions

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen

export default mailSlice.reducer
