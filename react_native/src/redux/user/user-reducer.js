import {ACTION_SYNC_USER} from "./user-actions";

export default (state, action, root) => {
  switch (action.type) {
    case ACTION_SYNC_USER:
      return { ...state, ...action.user };

    default:
      return state;
  }
}