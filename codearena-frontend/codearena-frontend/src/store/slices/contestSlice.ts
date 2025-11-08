import { createSlice } from '@reduxjs/toolkit'

const contestSlice = createSlice({
  name: 'contests',
  initialState: {
    contests: [],
    currentContest: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
})

export default contestSlice.reducer