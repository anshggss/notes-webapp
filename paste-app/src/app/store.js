import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from '../redux-slices/pasteSlice'

export default configureStore({
  reducer: {
    paste: pasteReducer,
  },
})