import 'package:apply_now/resources/colors.dart';
import 'package:flutter/material.dart';

class Dialog extends StatelessWidget {
  final Widget child;

  const Dialog({Key key, this.child}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      color: AppColors.blackBlur,
      child: child,
    );
  }
}
