import 'package:apply_now/modules/api_user_service.dart';
import 'package:apply_now/resources/colors.dart';
import 'package:apply_now/resources/strings.dart';
import 'package:apply_now/resources/widgets.dart';
import 'package:apply_now/widgets/AppTextField.dart';
import 'package:apply_now/widgets/main_container.dart';
import 'package:flutter/material.dart';

class LoginScreen extends StatefulWidget {
  LoginScreen({Key key}) : super(key: key);

  @override
  State<StatefulWidget> createState() => _StateLoginScreen();
}

class _StateLoginScreen extends State<LoginScreen> {

  String email = '';
  String password = '';

  //Click
  final _showMainScreen = (context) => Navigator.pushNamed(context, "/main");
  final _showSignUpScreen =
      (context) => Navigator.pushNamed(context, "/signup");
  final _showForgotPasswordScreen =
      (context) => Navigator.pushNamed(context, "/forgor_password");

  final _login = (context, String email, String password, showMainScreen) =>
      login(email, password).then((user) {
        print(user);
        showMainScreen(context);
      }).catchError((error) => print(error));

  @override
  Widget build(BuildContext context) {
    return AppWidgets.createScaffoldMainColor(
      child: Column(
        children: <Widget>[
          AppTextField(
            hint: Strings.of(context).email(),
            onChanged: (text) => email = text,
          ),
          AppTextField(
            secure: true,
            hint: Strings.of(context).password(),
            onChanged: (text) => password = text,
          ),
          AppWidgets.createButton(
            title: Strings.of(context).login(),
            color: Colors.white,
            textColor: AppColors.main,
            onPressed: () =>
                _login(context, email.trim(), password.trim(), _showMainScreen),
          ),
          AppWidgets.createButton(
            title: "SIGN UP",
            color: AppColors.blue,
            textColor: Colors.white,
            onPressed: () => _showSignUpScreen(context),
          ),
          GestureDetector(
            onTap: () => _showForgotPasswordScreen(context),
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
