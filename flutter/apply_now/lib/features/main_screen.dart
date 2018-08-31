import 'package:apply_now/features/board/board_screen.dart';
import 'package:apply_now/features/home/home_screen.dart';
import 'package:apply_now/features/message/message_screen.dart';
import 'package:apply_now/features/notification/notification_screen.dart';
import 'package:apply_now/resource/colors.dart';
import 'package:apply_now/widgets/main_container.dart';
import 'package:flutter/material.dart';

class MainScreen extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  int currentIndex = 0;

  List<Widget> _children = [
    HomeScreen(),
    MessageScreen(),
    BoardScreen(),
    NotificationScreen(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: MainContainer(
        color: AppColors.main,
        child: Container(
          color: Colors.white,
          child: Stack(
          children: <Widget>[
            Offstage(
              offstage: currentIndex != 0,
              child: TickerMode(
                enabled: currentIndex == 0,
                child: HomeScreen(),
              ),
            ),
            Offstage(
              offstage: currentIndex != 1,
              child: TickerMode(
                enabled: currentIndex == 1,
                child: MessageScreen(),
              ),
            ),
            Offstage(
              offstage: currentIndex != 2,
              child: TickerMode(
                enabled: currentIndex == 2,
                child: BoardScreen(),
              ),
            ),
            Offstage(
              offstage: currentIndex != 3,
              child: TickerMode(
                enabled: currentIndex == 3,
                child: NotificationScreen(),
              ),
            ),
          ],
        ),),
      ),
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.shifting,
        fixedColor: Colors.white,
        onTap: (int) => this.setState(() => currentIndex = int),
        currentIndex: currentIndex,
        // this will be set when a  tab is tapped
        items: [
          BottomNavigationBarItem(
            backgroundColor: AppColors.main,
            icon: Icon(
              Icons.home,
            ),
            title: Text('Home'),
          ),
          BottomNavigationBarItem(
            backgroundColor: AppColors.main,
            icon: Icon(Icons.message),
            title: Text('Messages'),
          ),
          BottomNavigationBarItem(
            backgroundColor: AppColors.main,
            icon: Icon(Icons.dashboard),
            title: Text('Board'),
          ),
          BottomNavigationBarItem(
            backgroundColor: AppColors.main,
            icon: Icon(Icons.notifications),
            title: Text('Notification'),
          )
        ],
      ),
    );
  }
}
