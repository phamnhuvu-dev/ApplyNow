import user from "./user/user-reducer";
import home from "./home/home-reducer"
import message from "./message/message-reducer"
import board from "./board/board-reducer"
import notification from "./notification/notification-reducer"
import RootState from "./root-state";

export default (state = new RootState(), action) => {
  let result = {
    user:         user        (state.user        , action, state),
    home:         home        (state.home        , action, state),
    message:      message     (state.message     , action, state),
    board:        board       (state.board       , action, state),
    notification: notification(state.notification, action, state),
  };
  console.log(result);
  return result;
};