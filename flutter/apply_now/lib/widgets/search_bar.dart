import 'package:flutter/material.dart';

class SearchBar extends StatelessWidget {
  final Color main = Colors.white;
  final Color sub = Colors.white70;
  final String text;

  const SearchBar({Key key, this.text}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Stack(
      alignment: Alignment.center,
      children: <Widget>[
        Container(
          child: Theme(
            data: ThemeData(
              primaryColor: main,
              hintColor: sub,
            ),
            child: TextField(
              style: TextStyle(color: main),
              cursorColor: main,
              decoration: InputDecoration(
                contentPadding: EdgeInsets.only(left: 8.0, top: 8.0, right: 36.0, bottom: 8.0),
                border: OutlineInputBorder(),
                labelText: text,
                hintText: "Search",
              ),
            ),
          ),
        ),
        Container(
          margin: EdgeInsets.only(right: 8.0),
          child: Align(
            child: Icon(Icons.search, color: Colors.white,),
            alignment: Alignment.centerRight,
          ),
        )
      ],
    );

    return Container(
      child: Center(
        child: Theme(
          data: ThemeData(
            primaryColor: main,
            hintColor: sub,
          ),
          child: TextField(
            style: TextStyle(color: main),
            cursorColor: main,
            decoration: InputDecoration(
              contentPadding:
                  EdgeInsets.only(left: 0.0, top: 0.0, right: 0.0, bottom: 0.0),
              border: OutlineInputBorder(),
              labelText: text,
              hintText: "Search",
            ),
          ),
        ),
      ),
    );
  }
}
