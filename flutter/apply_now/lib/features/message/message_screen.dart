import 'package:apply_now/widgets/header.dart';
import 'package:apply_now/widgets/search_bar.dart';
import 'package:flutter/material.dart';

class MessageScreen extends StatefulWidget {
  MessageScreen({Key key}) : super(key: key);

  @override
  State<StatefulWidget> createState() => _StateMessageScreen();
}

class _StateMessageScreen extends State<MessageScreen> {
  String text =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta sodales mauris. Ut hendrerit odio vel elit venenatis, vel euismod mauris luctus. ";

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Header(
          child: SearchBar(),
          childRight: Icon(Icons.add_comment, color: Colors.white,),
        ),
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
          Flexible(
            child: Column(
              children: <Widget>[
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: <Widget>[
                    Expanded(
                      child: Text(
                        "Name",
                        maxLines: 1,
                      ),
                    ),
                    Text(
                      "23:23 PM",
                      maxLines: 1,
                    ),
                  ],
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: <Widget>[
                    Expanded(
                      child: Text(
                        text,
                        overflow: TextOverflow.ellipsis,
                        textAlign: TextAlign.justify,
                        maxLines: 1,
                      ),
                    ),
                    Icon(
                      Icons.check_circle,
                      size: 15.0,
                    ),
                  ],
                )
              ],
            ),
          )
        ],
      ),
    );
  }
}
