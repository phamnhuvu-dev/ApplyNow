import 'package:apply_now/features/account/forgot_password_screen.dart';
import 'package:apply_now/features/account/login_screen.dart';
import 'package:apply_now/features/account/signup_screen.dart';
import 'package:apply_now/features/main_screen.dart';
import 'package:apply_now/resources/strings.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_localizations/flutter_localizations.dart';

void main() => runApp(new MyApp());

class _LocalizationsDelegate extends LocalizationsDelegate<Strings> {
  @override
  Future<Strings> load(Locale locale) => Strings.load(locale);

  @override
  bool isSupported(Locale locale) =>
      locale.languageCode == 'vi' || locale.languageCode == 'en';

  @override
  bool shouldReload(_LocalizationsDelegate old) => false;
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle.light.copyWith(
      statusBarColor: Colors.transparent,
    ));

    return new MaterialApp(
      title: 'Flutter Demo',
      localizationsDelegates: <LocalizationsDelegate<dynamic>>[
        _LocalizationsDelegate(),
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
      ],
      supportedLocales: const <Locale>[
        Locale('en', 'US'),
        Locale('vi', 'VN'),
      ],
      home: new LoginScreen(),
      routes: <String, WidgetBuilder>{
        '/signup': (BuildContext context) => SignUpScreen(),
        '/forgor_password': (BuildContext context) => ForgotPasswordScreen(),
        '/main': (BuildContext context) => MainScreen(),
      },
    );
  }
}
