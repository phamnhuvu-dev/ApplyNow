import 'package:apply_now/features/account/login/login_bloc.dart';
import 'package:apply_now/generated/i18n.dart';
import 'package:apply_now/modules/api/api_user_service.dart';
import 'package:apply_now/statics/colors.dart';
import 'package:apply_now/statics/widgets.dart';
import 'package:apply_now/widgets/app_text_field.dart';
import 'package:apply_now/widgets/dialog/loading_dialog.dart';
import 'package:apply_now/widgets/dialog/message_dialog.dart';
import 'package:flutter/material.dart';

class LoginScreen extends StatefulWidget {
  final S i18n;
  final LoginBloc loginBloc;

  LoginScreen({Key key, this.i18n, this.loginBloc}) : super(key: key);

  @override
  State<StatefulWidget> createState() => _StateLoginScreen();
}

class _StateLoginScreen extends State<LoginScreen> {

  S i18n;
  LoginBloc loginBloc;

  @override
  void initState() {
    super.initState();
    i18n = widget.i18n;
    loginBloc = widget.loginBloc;
  }

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
      builder: (context) =>
          LoadingDialog(
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
        builder: (context) =>
            MessageDialog(
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
            hint: i18n.email,
            onChanged: (text) => email = text,
          ),
          AppTextField(
            secure: true,
            hint: i18n.password,
            onChanged: (text) => password = text,
          ),
          AppWidgets.createButton(
            title: i18n.login,
            color: Colors.white,
            textColor: AppColors.main,
            onPressed: () =>
                _login(email.trim(), password.trim()),
          ),
          AppWidgets.createButton(
            title: i18n.sign_up,
            color: AppColors.blue,
            textColor: Colors.white,
            onPressed: () => _showSignUpScreen(),
          ),
          GestureDetector(
            onTap: () => _showForgotPasswordScreen(),
            child: Text(
              i18n.forgot_password,
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
