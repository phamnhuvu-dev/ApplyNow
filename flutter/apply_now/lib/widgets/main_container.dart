import 'package:flutter/material.dart';

class MainContainer extends StatelessWidget {
  final Widget child;
  final Color color;

  const MainContainer({Key key, this.child, this.color = Colors.white}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      color: color,
      child: SafeArea(

        bottom: false,
        child: child,
      ),
    );
  }
}
