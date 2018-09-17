import 'package:flutter/material.dart';

class AppTextField extends StatefulWidget {

  final String hint;
  final bool secure;
  final ValueChanged<String> onChanged;

  AppTextField({Key key, this.hint, this.secure = false, this.onChanged}) : super(key: key);

  @override
  State<StatefulWidget> createState() => _StateAppTextField();
}

class _StateAppTextField extends State<AppTextField> {


  @override
  Widget build(BuildContext context) {
    return Theme(
      data: ThemeData(
        primaryColor: Colors.white,
        hintColor: Colors.white70,
      ),
      child: TextField(
        onChanged: widget.onChanged,
        obscureText: widget.secure ? true : false,
        style: TextStyle(color: Colors.white),
        cursorColor: Colors.white,
        decoration: InputDecoration(
          hintText: widget.hint,
        ),
      ),
    );
  }
}