import 'package:apply_now/resource/colors.dart';
import 'package:apply_now/resource/widgets.dart';
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
