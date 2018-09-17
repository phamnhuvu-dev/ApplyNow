import 'package:apply_now/resources/colors.dart';
import 'package:flutter/material.dart';

class LoadingDialog extends StatelessWidget {
  final String message;

  const LoadingDialog({Key key, this.message = ''}) : super(key: key);

  Future<bool> _onWillPop(context) async {
    return Navigator.of(context) ?? false;
  }

  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      child: Dialog(
        child: Container(
          padding: EdgeInsets.all(20.0),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: <Widget>[
              CircularProgressIndicator(
                valueColor: AlwaysStoppedAnimation<Color>(AppColors.main),
              ),
              Container(
                margin: EdgeInsets.only(top: 10.0),
                child: Text(message),
              )
            ],
          ),
        ),
      ),
      onWillPop: () => _onWillPop(context),
    );
  }
}
