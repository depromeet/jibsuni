import { createSelector } from 'reselect';

export const selectCommonState = state => state.auth;

export const selectTokenStr = createSelector(
    selectCommonState,
    state => state.tokenStr
  );
  
  export const selectIsCommonInitialized = createSelector(
    selectCommonState,
    state => state.isInitialized
  );
  
  export const selectUser = createSelector(
    selectCommonState,
    state => state.user
  );