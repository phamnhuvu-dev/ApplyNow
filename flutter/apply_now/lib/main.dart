import 'package:apply_now/features/account/forgot_password/forgot_password_screen.dart';
import 'package:apply_now/features/account/sign_up/sign_up_screen.dart';
import 'package:apply_now/features/main_screen.dart';
import 'package:apply_now/generated/i18n.dart';
import 'package:apply_now/providers/app/app_bloc.dart';
import 'package:apply_now/providers/app/app_provider.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_localizations/flutter_localizations.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle.light.copyWith(
      statusBarColor: Colors.transparent,
    ));

    return AppProvider(
      appBloc: AppBloc(),
      child: MaterialApp(
        title: 'Flutter Demo',
        localizationsDelegates: <LocalizationsDelegate<dynamic>>[
          S.delegate,
          GlobalMaterialLocalizations.delegate,
          GlobalWidgetsLocalizations.delegate,
        ],
        supportedLocales: S.delegate.supportedLocales,
        home: MainScreen(),
        routes: <String, WidgetBuilder>{
          '/signup': (BuildContext context) => SignUpScreen(),
          '/forgor_password': (BuildContext context) => ForgotPasswordScreen(),
          '/main': (BuildContext context) => MainScreen(),
        },
      ),
    );
  }
}
