import 'package:flutter/material.dart';

class CreateChatGroupDialog extends StatefulWidget {
  CreateChatGroupDialog({Key key}) : super(key: key);

  @override
  State<StatefulWidget> createState() => _StateCreateChatGroupDialog();
}

class _StateCreateChatGroupDialog extends State<CreateChatGroupDialog> {
  @override
  Widget build(BuildContext context) {
    return Dialog(
      child: Container(
        color: Colors.white,
        child: Column(children: <Widget>[

        ],),
      ),
    );
  }
}
