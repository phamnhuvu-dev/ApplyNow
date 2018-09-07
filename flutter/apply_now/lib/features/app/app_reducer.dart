import 'package:apply_now/features/app/app_state.dart';

AppState appReducer(AppState state, actions) {
  return AppState(
      user: state.user,
      home: state.home,
      message: state.message,
      board: state.board,
      notification: state.notification,
      information: state.information);
}
