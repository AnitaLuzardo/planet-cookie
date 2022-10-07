import { configureStore } from '@reduxjs/toolkit';
import sessionReducers from '../modules/sessions/reducers';

export default configureStore({
  reducer: {
    session: sessionReducers,
  },
})
