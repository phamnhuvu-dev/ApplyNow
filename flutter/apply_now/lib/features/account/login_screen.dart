import 'package:apply_now/resource/colors.dart';
import 'package:apply_now/resource/widgets.dart';
import 'package:apply_now/widgets/main_container.dart';
import 'package:flutter/material.dart';

class LoginScreen extends StatefulWidget {
  LoginScreen({Key key}) : super(key: key);

  @override
  State<StatefulWidget> createState() => _StateLoginScreen();
}

class _StateLoginScreen extends State<LoginScreen> {
  //Click
  final _showMainScreen = (context) => Navigator.pushNamed(context, "/main");
  final _showSignUpScreen =
      (context) => Navigator.pushNamed(context, "/signup");
  final _showForgotPasswordScreen =
      (context) => Navigator.pushNamed(context, "/forgor_password");

  @override
  Widget build(BuildContext context) {
    return AppWidgets.createScaffoldMainColor(
      child: Column(
        children: <Widget>[
          AppWidgets.createTextField(hint: "Email"),
          AppWidgets.createTextField(secure: true, hint: "Password"),
          AppWidgets.createButton(
            title: "LOG IN",
            color: Colors.white,
            textColor: AppColors.main,
            onPressed: () => this._showMainScreen(context),
          ),
          AppWidgets.createButton(
            title: "SIGN UP",
            color: AppColors.blue,
            textColor: Colors.white,
            onPressed: () => this._showSignUpScreen(context),
          ),
          GestureDetector(
            onTap: () => this._showForgotPasswordScreen(context),
            child: Text(
              "Forgot password?",
              style: TextStyle(
                color: Colors.white,
                fontWeight: FontWeight.bold,
                decoration: TextDecoration.underline,
              ),
            ),
          )
        ],
      ),
    );
  }
}
