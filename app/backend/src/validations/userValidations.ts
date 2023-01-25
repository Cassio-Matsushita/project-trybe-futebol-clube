export default class UserValidations {
  public static validateEmail(email: string): boolean {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }

  public static validatePassword(password: string): boolean {
    const passwordIsValid = password.length > 6;
    return passwordIsValid;
  }

  public static validateUser(
    email: string,
    password: string,
  ): boolean {
    return (
      this.validateEmail(email)
      && this.validatePassword(password)
    );
  }
}
