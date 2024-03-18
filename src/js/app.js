export default class Validator {
  static validateUsername(name) {
    const validSymb = /^[a-z][\w-]*[a-z]$/i;
    const validDigits = /\d{4,}/;

    return validSymb.test(name) && !validDigits.test(name);
  }
}
