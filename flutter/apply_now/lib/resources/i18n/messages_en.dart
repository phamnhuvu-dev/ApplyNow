import 'package:intl/message_lookup_by_library.dart';

final messages = new MessageLookup();

class MessageLookup extends MessageLookupByLibrary {
  get localeName => 'en';

  final messages = _notInlinedMessages(_notInlinedMessages);
  static _notInlinedMessages(_) => <String, Function> {
    "email" : MessageLookupByLibrary.simpleMessage("Email"),
    "password" : MessageLookupByLibrary.simpleMessage("Password"),
    "login" : MessageLookupByLibrary.simpleMessage("LOGIN")
  };
}