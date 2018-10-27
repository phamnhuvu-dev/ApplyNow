import 'package:apply_now/statics/colors.dart';
import 'package:apply_now/widgets/main_container.dart';
import 'package:flutter/material.dart';

class AppWidgets {
  static createTextField({hint, secure = false}) {
    return Theme(
      data: ThemeData(
        primaryColor: Colors.white,
        hintColor: Colors.white70,
      ),
      child: TextField(
        obscureText: secure ? true : false,
        style: TextStyle(color: Colors.white),
        cursorColor: Colors.white,
        decoration: InputDecoration(
          hintText: hint,
        ),
      ),
    );
  }

  static createButton({title, color, textColor, onPressed}) {
    return ButtonTheme(
      minWidth: double.maxFinite,
      child: MaterialButton(
        color: color,
        onPressed: onPressed,
        child: Text(
          title,
          style: TextStyle(color: textColor),
        ),
      ),
    );
  }

  static createScaffoldMainColor({child}) {
    return Scaffold(
      body: MainContainer(
        color: AppColors.main,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Container(
              margin: EdgeInsets.only(
                left: 16.0,
                right: 16.0,
              ),
              padding: EdgeInsets.all(24.0),
              decoration: BoxDecoration(
                color: Colors.white30,
                borderRadius: BorderRadius.all(Radius.circular(5.0)),
              ),
              child: child,
            ),
          ],
        ),
      ),
    );
  }
}
