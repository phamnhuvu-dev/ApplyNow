import 'package:apply_now/models/post.dart';
import 'package:apply_now/widgets/dialog/create_post_dialog.dart';
import 'package:apply_now/widgets/dialog/loading_dialog.dart';
import 'package:apply_now/widgets/header.dart';
import 'package:apply_now/widgets/search_bar.dart';
import 'package:flutter/material.dart';

class HomeScreen extends StatefulWidget {
  HomeScreen({Key key}) : super(key: key);

  @override
  State<StatefulWidget> createState() => _StateHomeScreen();
}

class _StateHomeScreen extends State<HomeScreen> {

  final Post post = Post();

  final _showDialog = (context) => showDialog(
        context: context,
        builder: (context) => AlertDialog(
              title: new Text("My Super title"),
              content: new Text("Hello World"),
            ),
      );

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Header(
          child: SearchBar(),
          childRight: Icon(
            Icons.note_add,
            color: Colors.white,
          ),
          onTapRightChild: () => showDialog(
                context: context,
                builder: (context) => CreatePostDialog(),
              ),
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
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Text("Job Title"),
          Row(
            children: <Widget>[
              Image.network(
                'https://flutter.io/images/flutter-mark-square-100.png',
                height: 50.0,
                width: 50.0,
              ),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Text("Name"),
                  Text("Description"),
                ],
              ),
            ],
          ),
          Text(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta sodales mauris. Ut hendrerit odio vel elit venenatis, vel euismod mauris luctus. Cras convallis eros pharetra, ornare lectus vel, convallis turpis. Sed sed porta lectus. Pellentesque tempus est mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec mollis nulla eu quam laoreet, nec consectetur velit sollicitudin. Etiam condimentum sapien elit, in lacinia mauris tincidunt a.",
            maxLines: 5,
            overflow: TextOverflow.ellipsis,
            textAlign: TextAlign.justify,
          )
        ],
      ),
    );
  }
}
