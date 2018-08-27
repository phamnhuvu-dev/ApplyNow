import {combineReducers} from "redux";
import home from "./home/home-reducer"
import message from "./message/message-reducer"
import board from "./board/board-reducer"
import notification from "./notification/notification-reducer"

const reducers = combineReducers({
  home,
  message,
  board,
  notification
});

export default reducers;