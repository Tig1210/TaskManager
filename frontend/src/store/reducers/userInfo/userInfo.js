import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchLogin, fetchRegistration } from '../../../api/auth/auth'

export const fetchUserLogin = createAsyncThunk('user/login', async (data) =>
  fetchLogin(data)
)

export const fetchUserRegistration = createAsyncThunk(
  'user/registration',
  async (data) => fetchRegistration(data)
)

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    data: {},
    loading: false,
    error: '',
  },
  reducers: {
    resetUserInfoStore: (state) => {
      state.data = {}
      state.loading = false
      state.error = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserLogin.pending, (state) => {
        state.loading = true
        state.data = {}
        state.error = ''
      })
      .addCase(fetchUserLogin.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchUserLogin.rejected, (state, action) => {
        const { error } = action
        state.loading = false
        state.error = error.message
      })
      .addCase(fetchUserRegistration.pending, (state) => {
        state.loading = true
        state.data = {}
        state.error = ''
      })
      .addCase(fetchUserRegistration.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchUserRegistration.rejected, (state, action) => {
        const { error } = action
        state.loading = false
        state.error = error.message
      })
  },
})

export const { resetUserInfoStore } = userInfoSlice.actions

export default userInfoSlice.reducer
