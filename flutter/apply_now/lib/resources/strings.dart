import 'dart:ui';

import 'package:apply_now/resources/i18n/messages_all.dart';
import 'package:flutter/widgets.dart';
import 'package:intl/intl.dart';

class Strings {
  Strings(Locale locale) : _localeName = locale.toString();

  final String _localeName;

  static Future<Strings> load(Locale locale) {
    return initializeMessages(locale.toString())
        .then((Object _) {
      return Strings(locale);
    });
  }

  static Strings of(BuildContext context) {
    return Localizations.of<Strings>(context, Strings);
  }

  String email() {
    return Intl.message(
      'Email',
      name: 'email',
      desc: 'Title for the Stocks application',
      locale: _localeName,
    );
  }

  String password() => Intl.message(
    'Password',
    name: 'password',
    desc: 'Label for the Market tab',
    locale: _localeName,
  );

  String login() => Intl.message(
    'LOGIN',
    name: 'login',
    desc: 'Label for the Portfolio tab',
    locale: _localeName,
  );
}