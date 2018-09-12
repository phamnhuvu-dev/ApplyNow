import 'package:apply_now/resources/colors.dart';
import 'package:apply_now/resources/widgets.dart';
import 'package:apply_now/widgets/main_container.dart';
import 'package:flutter/material.dart';

class ForgotPasswordScreen extends StatefulWidget {
  ForgotPasswordScreen({Key key}) : super(key: key);

  @override
  State<StatefulWidget> createState() => _StateForgotPasswordScreen();
}

class _StateForgotPasswordScreen extends State<ForgotPasswordScreen> {
  @override
  Widget build(BuildContext context) {
    return AppWidgets.createScaffoldMainColor(
      child: Column(
        children: <Widget>[
          AppWidgets.createTextField(hint: "Email"),
          AppWidgets.createButton(
            title: "LOG IN",
            color: Colors.white,
            textColor: AppColors.main,
          ),
        ],
      ),
    );
  }
}
