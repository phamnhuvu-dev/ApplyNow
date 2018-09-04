export default class UserState {
  constructor(id = 0, name = '', email = '', image = '') {
    this.id = id;
    this.name = name;
    this.email = email;
    this.image = image;
  }
}