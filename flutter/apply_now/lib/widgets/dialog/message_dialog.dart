import 'package:apply_now/resources/colors.dart';
import 'package:flutter/material.dart';

class MessageDialog extends StatelessWidget {
  final String message;

  const MessageDialog({Key key, this.message = ''}) : super(key: key);

  Future<bool> _onWillPop(context) async {
    return Navigator.of(context) ?? false;
  }

  @override
  Widget build(BuildContext context) {
    return Dialog(
      child: Container(
        padding: EdgeInsets.all(20.0),
        child: Text(message, style: TextStyle(color: Colors.red),)
      ),
    );
  }
}
