import 'package:apply_now/features/account/forgot_password_screen.dart';
import 'package:apply_now/features/account/login_screen.dart';
import 'package:apply_now/features/account/signup_screen.dart';
import 'package:apply_now/features/main_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle.light.copyWith(
      statusBarColor: Colors.transparent,
    ));

    return new MaterialApp(
      title: 'Flutter Demo',
      home: new LoginScreen(),
      routes: <String, WidgetBuilder>{
        '/signup': (BuildContext context) => SignUpScreen(),
        '/forgor_password': (BuildContext context) => ForgotPasswordScreen(),
        '/main': (BuildContext context) => MainScreen(),
      },
    );
  }
}
