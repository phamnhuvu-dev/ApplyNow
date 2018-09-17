import 'package:apply_now/modules/api/api_user_service.dart';
import 'package:apply_now/resources/colors.dart';
import 'package:apply_now/resources/strings.dart';
import 'package:apply_now/resources/widgets.dart';
import 'package:apply_now/widgets/app_text_field.dart';
import 'package:apply_now/widgets/dialog/loading_dialog.dart';
import 'package:apply_now/widgets/dialog/message_dialog.dart';
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
  _showMainScreen() => Navigator.pushNamed(context, "/main");

  _showSignUpScreen() => Navigator.pushNamed(context, "/signup");

  _showForgotPasswordScreen() =>
      Navigator.pushNamed(context, "/forgor_password");

  _login(String email, String password) {
    showDialog(
      context: context,
      builder: (context) => LoadingDialog(
            message: "Logging...",
          ),
    );
    login(email, password).then(
      (user) {
        Navigator.of(context).pop();
        _showMainScreen();
      },
    ).catchError((error) {
      Navigator.of(context).pop();
      showDialog(
        context: context,
        builder: (context) => MessageDialog(
              message: error.toString(),
            ),
      );
    });
  }

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
                _login(email.trim(), password.trim()),
          ),
          AppWidgets.createButton(
            title: "SIGN UP",
            color: AppColors.blue,
            textColor: Colors.white,
            onPressed: () => _showSignUpScreen(),
          ),
          GestureDetector(
            onTap: () => _showForgotPasswordScreen(),
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
