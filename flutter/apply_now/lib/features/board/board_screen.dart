import 'package:apply_now/resource/colors.dart';
import 'package:apply_now/widgets/header.dart';
import 'package:apply_now/widgets/search_bar.dart';
import 'package:flutter/material.dart';

class BoardScreen extends StatefulWidget {
  BoardScreen({Key key}) : super(key: key);

  @override
  State<StatefulWidget> createState() => _StateBoardScreen();
}

class _StateBoardScreen extends State<BoardScreen> {

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Header(
          child: SearchBar(),
        ),
        Flexible(child: DefaultTabController(
          length: 3,
          child: new Column(
            children: <Widget>[
              new Container(
                constraints: BoxConstraints(maxHeight: 150.0),
                child: new Material(
                  color: Colors.white,
                  child: new TabBar(
                    indicatorColor: AppColors.main,
                    labelColor: AppColors.main,
                    unselectedLabelColor: AppColors.main.withOpacity(0.3),
                    tabs: [
                      Tab(text: "Create Post",),
                      Tab(text: "Apply",),
                      Tab(text: "Offer",),
                    ],
                  ),
                ),
              ),
              new Flexible(
                child: new TabBarView(
                  children: [
                    new Icon(Icons.directions_car),
                    new Icon(Icons.directions_transit),
                    new Icon(Icons.directions_bike),
                  ],
                ),
              ),
            ],
          ),
        ))
      ],
    );
    return new DefaultTabController(
      length: 3,
      child: new Column(
        children: <Widget>[
          new Container(
            constraints: BoxConstraints(maxHeight: 150.0),
            child: new Material(
              color: Colors.white,
              child: new TabBar(
                indicatorColor: AppColors.main,
                labelColor: AppColors.main,
                unselectedLabelColor: AppColors.main.withOpacity(0.3),
                tabs: [
                  new Tab(icon: new Icon(Icons.directions_car)),
                  new Tab(icon: new Icon(Icons.directions_transit)),
                  new Tab(icon: new Icon(Icons.directions_bike)),
                ],
              ),
            ),
          ),
          new Flexible(
            child: new TabBarView(
              children: [
                new Icon(Icons.directions_car),
                new Icon(Icons.directions_transit),
                new Icon(Icons.directions_bike),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

//return DefaultTabController(
//length: 3,
//child: Scaffold(
//appBar: TabBar(
//tabs: [
//Tab(icon: Icon(Icons.directions_car)),
//Tab(icon: Icon(Icons.directions_transit)),
//Tab(icon: Icon(Icons.directions_bike)),
//],
//),
//body: TabBarView(
//children: [
//Icon(Icons.directions_car),
//Icon(Icons.directions_transit),
//Icon(Icons.directions_bike),
//],
//),
//),
//);
