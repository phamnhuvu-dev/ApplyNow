import 'package:apply_now/providers/app/app_bloc.dart';
import 'package:flutter/material.dart';

class AppProvider extends InheritedWidget {
  final AppBloc appBloc;

  AppProvider({Key key, @required this.appBloc, @required Widget child})
      : super(key: key, child: child);

  static AppBloc of(BuildContext context) =>
      (context.inheritFromWidgetOfExactType(AppProvider) as AppProvider).appBloc;

  @override
  bool updateShouldNotify(InheritedWidget oldWidget) => true;
}
