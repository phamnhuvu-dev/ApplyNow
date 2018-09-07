import 'package:flutter/material.dart';

class CreateDialog extends StatelessWidget {
  final Widget child;
  final String title;
  final String rightButtonTitle;
  final String leftButtonTitle;

  const CreateDialog(
      {Key key,
      this.title,
      this.rightButtonTitle,
      this.leftButtonTitle,
      this.child})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Dialog(
      child: Container(
        color: Colors.white,
        child: Column(
          children: <Widget>[
            Text("Title"),
            child,
            Row(children: <Widget>[

            ],)
          ],
        ),
      ),
    );
  }
}
