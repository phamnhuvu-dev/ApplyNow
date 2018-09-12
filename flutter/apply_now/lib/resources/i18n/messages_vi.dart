import 'package:intl/message_lookup_by_library.dart';

final messages = new MessageLookup();

class MessageLookup extends MessageLookupByLibrary {
  get localeName => 'vi';

  final messages = _notInlinedMessages(_notInlinedMessages);
  static _notInlinedMessages(_) => <String, Function> {
    "email" : MessageLookupByLibrary.simpleMessage("Tài khoản Email"),
    "password" : MessageLookupByLibrary.simpleMessage("Mật khẩu"),
    "login" : MessageLookupByLibrary.simpleMessage("ĐĂNG NHẬP")
  };
}