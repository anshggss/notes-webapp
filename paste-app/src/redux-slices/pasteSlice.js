import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pastes: localStorage.getItem('pastes') ? JSON.parse(localStorage.getItem('pastes')) : [],
  }

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPaste: (state,action) => {
      action.payload["id"] = state.pastes.length;
      state.pastes = [...state.pastes, action.payload]
      localStorage.setItem('pastes', JSON.stringify(state.pastes))
    },
    updateToPaste: (state,action) => {
      state.pastes[action.payload.id] = action.payload;
      localStorage.setItem('pastes', JSON.stringify(state.pastes))
    },
    removeFromPaste(state,action) {
      state.pastes = state.pastes.filter((paste) => paste.title !== action.payload.title);
    },
    resetAllPastes: (state) => {
      state.pastes = [];
      console.log("All pastes cleared");
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPaste, updateToPaste, removeFromPaste, resetAllPastes, returnPaste } = pasteSlice.actions

export default pasteSlice.reducer