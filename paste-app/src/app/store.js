import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from '../redux-slices/PASTEslice'

export default configureStore({
  reducer: {
    paste: pasteReducer,
  },
})