import 'package:flutter/material.dart';

class NotificationScreen extends StatefulWidget {
  NotificationScreen({Key key}) : super(key: key);

  @override
  State<StatefulWidget> createState() => _StateNotificationScreen();
}

class _StateNotificationScreen extends State<NotificationScreen> {

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Flexible(
          child: ListView.builder(
            padding: EdgeInsets.only(left: 24.0, right: 24.0),
            itemCount: 20,
            itemBuilder: (context, index) => this._createItemLayout(index),
          ),
        )
      ],
    );
  }

  _createItemLayout(index) {
    return Container(
      margin: EdgeInsets.only(top: index == 0 ? 16.0 : 0.0, bottom: 16.0),
      child: Row(
        children: <Widget>[
          Image.network(
            'https://flutter.io/images/flutter-mark-square-100.png',
            height: 50.0,
            width: 50.0,
          ),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Text("Description"),
                Text("Time"),
              ],
            ),
          ),
          Image.network(
            'https://flutter.io/images/flutter-mark-square-100.png',
            height: 50.0,
            width: 50.0,
          )
        ],
      ),
    );
  }
}
