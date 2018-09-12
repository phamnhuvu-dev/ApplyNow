class User {
  int id;
  String name;
  String email;
  String description;

  User({this.id, this.name, this.email, this.description});

  User.fromJson(Map<String, dynamic> json)
      : id = json['id'],
        name = json['name'],
        email = json['email'],
        description = json['description'];
}
