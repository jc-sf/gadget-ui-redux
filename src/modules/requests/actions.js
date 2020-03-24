import { createAction } from '@reduxjs/toolkit';

export const fetchRequestsStart = createAction('requests/fetchStart');
export const fetchRequestsSuccess = createAction('requests/fetchSuccess');
export const fetchRequestsError = createAction('requests/fetchError');

export const fetchRequests = () => async (dispatch) => {
  dispatch(fetchRequestsStart());
  try {
    const response = await fetch(process.env.REACT_APP_API_URL);
    const data = await response.json();
    dispatch(fetchRequestsSuccess(data));
  } catch (error) {
    dispatch(fetchRequestsError());
  }
};
