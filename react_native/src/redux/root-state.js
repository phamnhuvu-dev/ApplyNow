import HomeState from "./home/home-state";
import MessageState from "./message/message-state";
import BoardState from "./board/board-state";
import NotificationState from "./notification/notification-state";
import UserState from "./user/user-state"

export default class RootState {
  constructor(user = new UserState(),
              home = new HomeState(),
              message = new MessageState(),
              board = new BoardState(),
              notification = new NotificationState()) {
    this.user = user;
    this.home = home;
    this.message = message;
    this.board = board;
    this.notification = notification;
  }
}