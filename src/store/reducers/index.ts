import { usersSlice } from "./userSlice";

const reducers = {
  users: usersSlice,
  usersReducer: usersSlice.reducer,
}


export default reducers;