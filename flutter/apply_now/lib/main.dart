import 'package:apply_now/features/account/forgot_password/forgot_password_screen.dart';
import 'package:apply_now/features/account/login/login_bloc.dart';
import 'package:apply_now/features/account/login/login_screen.dart';
import 'package:apply_now/features/account/sign_up/sign_up_screen.dart';
import 'package:apply_now/features/main_screen.dart';
import 'package:apply_now/generated/i18n.dart';
import 'package:apply_now/providers/app/app_bloc.dart';
import 'package:apply_now/providers/app/app_provider.dart';
import 'package:apply_now/statics/routes.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_localizations/flutter_localizations.dart';

void main() {
  SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle.light.copyWith(
    statusBarColor: Colors.transparent,
  ));
  runApp(
    AppProvider(
      appBloc: AppBloc(),
      child: MaterialApp(
        title: 'Flutter Demo',
        localizationsDelegates: <LocalizationsDelegate<dynamic>>[
          S.delegate,
          GlobalMaterialLocalizations.delegate,
          GlobalWidgetsLocalizations.delegate,
        ],
        supportedLocales: S.delegate.supportedLocales,
        routes: <String, WidgetBuilder>{
          Routes.initial: (BuildContext context) => LoginScreen(
                i18n: S.of(context),
                loginBloc: LoginBloc(),
              ),
          Routes.sign_up: (BuildContext context) => SignUpScreen(),
          Routes.forgot_password: (BuildContext context) =>
              ForgotPasswordScreen(),
          Routes.main: (BuildContext context) => MainScreen(),
        },
        initialRoute: Routes.initial,
      ),
    ),
  );
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
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
        routes: <String, WidgetBuilder>{
          Routes.initial: (BuildContext context) => LoginScreen(),
          Routes.sign_up: (BuildContext context) => SignUpScreen(),
          Routes.forgot_password: (BuildContext context) =>
              ForgotPasswordScreen(),
          Routes.main: (BuildContext context) => MainScreen(),
        },
        initialRoute: Routes.initial,
      ),
    );
  }
}
