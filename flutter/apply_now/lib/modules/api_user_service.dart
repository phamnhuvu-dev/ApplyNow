import 'dart:async';
import 'dart:convert';
import 'package:apply_now/modules/api_service.dart';
import 'package:http/http.dart' as http;
import 'package:apply_now/models/user.dart';

final route = '${host}user/';

Future<User> login(email, password) async {
  final response = await http.Client().post(
    '${route}login',
    body: {'email': email, 'password': password},
  );
  Map userMap = json.decode(response.body);
  if (userMap['login'] == 'fail') {
    throw ('login fail');
  } else {
    return User.fromJson(userMap);
  }
}
