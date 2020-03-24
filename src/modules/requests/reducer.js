import { createReducer } from '@reduxjs/toolkit';
import { fetchRequestsSuccess } from './actions';

const reducer = createReducer([], {
  [fetchRequestsSuccess]: (state, action) => action.payload,
});

export default reducer;
