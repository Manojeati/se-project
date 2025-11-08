import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import problemReducer from './slices/problemSlice'
import contestReducer from './slices/contestSlice'
import userReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    problems: problemReducer,
    contests: contestReducer,
    user: userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch