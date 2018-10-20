import 'package:apply_now/generated/i18n.dart';
import 'package:apply_now/providers/app/app_bloc.dart';
import 'package:apply_now/providers/app/app_provider.dart';
import 'package:flutter/material.dart';

class BaseState<T extends StatefulWidget> extends State<T> {
  S i18n;
  AppBloc appBloc;
  var localBloc;

  @override
  Widget build(BuildContext context) {
    appBloc = AppProvider.of(context);
    i18n = S.of(context);
    // TODO: implement build
  }

  @override
  void dispose() {
    super.dispose();
    localBloc.dispose();
  }
}
