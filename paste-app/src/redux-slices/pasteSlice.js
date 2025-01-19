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
      
    },
    removeFromPaste(state,action) {
      state.pastes = state.pastes.filter((paste) => paste.title !== action.payload.title);
    },
    resetAllPastes: (state) => {
      state.pastes = [];
      localStorage.removeItem('pastes');
      console.log("All pastes cleared");
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPaste, updateToPaste, removeFromPaste, resetAllPastes } = pasteSlice.actions

export default pasteSlice.reducer