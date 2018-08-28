import home from "./home/home-reducer"
import message from "./message/message-reducer"
import board from "./board/board-reducer"
import notification from "./notification/notification-reducer"
import RootState from "./root-state";

export default (state = new RootState(), action) => {
  console.log(state);
  return {
    home:         home        (state.home        , action, state),
    message:      message     (state.message     , action, state),
    board:        board       (state.board       , action, state),
    notification: notification(state.notification, action, state),
  }
};