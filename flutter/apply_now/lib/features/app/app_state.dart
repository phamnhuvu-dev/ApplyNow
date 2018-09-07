import 'package:apply_now/features/account/user_state.dart';
import 'package:apply_now/features/board/board_state.dart';
import 'package:apply_now/features/home/home_state.dart';
import 'package:apply_now/features/message/message_state.dart';
import 'package:apply_now/features/notification/notification_state.dart';
import 'package:apply_now/features/information/information_state.dart';

class AppState {
  final UserState user;
  final HomeState home;
  final MessageState message;
  final BoardState board;
  final NotificationState notification;
  final InformationState information;

  AppState({
    this.user,
    this.home,
    this.message,
    this.board,
    this.notification,
    this.information,
  });
}
