import 'package:apply_now/statics/colors.dart';
import 'package:apply_now/statics/widgets.dart';
import 'package:flutter/material.dart';

class SignUpScreen extends StatefulWidget {
  SignUpScreen({Key key}) : super(key: key);

  @override
  State<StatefulWidget> createState() => _StateSignUpScreen();
}

class _StateSignUpScreen extends State<SignUpScreen> {
  @override
  Widget build(BuildContext context) {
    return AppWidgets.createScaffoldMainColor(
      child: Column(
        children: <Widget>[
          AppWidgets.createTextField(hint: "Name"),
          AppWidgets.createTextField(hint: "Email"),
          AppWidgets.createTextField(hint: "Password"),
          AppWidgets.createTextField(hint: "Confirm password"),
          AppWidgets.createButton(
            title: "Sign Up",
            color: Colors.white,
            textColor: AppColors.main,
          ),
        ],
      ),
    );
  }
}
