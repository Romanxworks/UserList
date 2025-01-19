import { createSlice } from '@reduxjs/toolkit'
import { getUsers } from '../../mock/userData'

const initial = getUsers();

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: initial
  },
  reducers: {
    setUser: (state, action) => {
      state.users = [...action.payload]
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser } = usersSlice.actions

export default usersSlice.reducer