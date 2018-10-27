import 'package:apply_now/data/repository/demo_repository.dart';
import 'package:flutter/material.dart';

class Injector extends InheritedWidget {
  final DemoRepository demoRepository;

  Injector({Key key, this.demoRepository, Widget child})
      : super(key: key, child: child);

  @override
  bool updateShouldNotify(Injector oldWidget) =>
      demoRepository != oldWidget.demoRepository;
}
