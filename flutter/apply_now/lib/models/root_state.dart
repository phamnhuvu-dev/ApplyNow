import 'package:apply_now/features/board/board_state.dart';
import 'package:apply_now/features/home/home_state.dart';
import 'package:apply_now/features/message/message_state.dart';
import 'package:apply_now/features/notification/notification_state.dart';
import 'package:meta/meta.dart';

class RootState {
  final HomeState homeState;
  final MessageState messageState;
  final BoardState boardState;
  final NotificationState notificationState;

  RootState({
    @required this.homeState,
    @required this.messageState,
    @required this.boardState,
    @required this.notificationState,
  });

  factory RootState.initial() {
    return RootState(
      homeState: HomeState(),
      messageState: MessageState(),
      boardState: BoardState(),
      notificationState: NotificationState(),
    );
  }

  RootState copyWith({
    homeState,
    messageState,
    boardState,
    notificationState,
  }) {
    return RootState(
      homeState: homeState ?? this.homeState,
      messageState: messageState ?? this.messageState,
      boardState: boardState ?? this.boardState,
      notificationState: notificationState ?? this.notificationState,
    );
  }
}
