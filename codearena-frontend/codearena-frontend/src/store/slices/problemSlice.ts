import { createSlice } from '@reduxjs/toolkit'

const problemSlice = createSlice({
  name: 'problems',
  initialState: {
    problems: [],
    currentProblem: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
})

export default problemSlice.reducer