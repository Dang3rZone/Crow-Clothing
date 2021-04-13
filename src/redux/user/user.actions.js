import { UserActionTpes } from './user.types';

export const setCurrentUser = (user) => ({
  type: UserActionTpes.SET_CURRENT_USER,
  payload: user,
});
