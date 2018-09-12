import 'package:apply_now/resources/colors.dart';
import 'package:flutter/material.dart';

class Header extends StatelessWidget {
  final Widget childLeft;
  final Widget childRight;
  final Widget child;

  Header({Key key, this.child, this.childLeft, this.childRight})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    final row = Row(
      children: <Widget>[
        Expanded(
          child: Container(
            margin: EdgeInsets.only(left: 24.0, right: 24.0),
            child: child,
          ),
        )
      ],
    );
    if (childLeft != null) {
      row.children.insert(0, childLeft);
    }
    if (childRight != null) {
      row.children.insert(row.children.length, childRight);
    }

    return Container(
      padding: EdgeInsets.only(left: 24.0, right: 24.0),
      height: 56.0,
      color: AppColors.main,
      child: row,
    );
  }
}
