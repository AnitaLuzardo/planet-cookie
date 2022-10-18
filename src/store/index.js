import { configureStore } from '@reduxjs/toolkit';
import sessionReducers from '../modules/sessions/reducers';
import userReducers from '../modules/user/reducers';

export default configureStore({
  reducer: {
    session: sessionReducers,
    users: userReducers
  },
})
