export default class Authentication {

  async register(data) {
    if (data.name.length === 0) {

    }

    if (data.email.length === 0) {

    }

    if (data.password !== data.rePassword) {

    }
  }

  async login(data) {

  }

  async forgotPassword() {

  }

  async _checkEmail(email) {

  }

  async _checkPassword(password) {
    if (password.isEmpty()) {
      return "Empty";
    } else if (password.length < 6) {
      return "Short";
    }
    return "OK";
  }
}