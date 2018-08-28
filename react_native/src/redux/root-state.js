import HomeState from "../home/home-state";
import MessageState from "../message/message-state";
import BoardState from "../board/board-state";
import NotificationState from "../notification/notification-state";


export default class AppState {


  constructor(home = new HomeState(),
              message = new MessageState(),
              board = new BoardState(),
              notification = new NotificationState()) {
    this.home = home;
    this.message = message;
    this.board = board;
    this.notification = notification;
  }
}