function validatePassword(password) {
    // Define the regular expressions for different criteria
    const regexLength = /.{8,}/; // Minimum 8 characters
    const regexLowercase = /[a-z]/; // At least one lowercase letter
    const regexUppercase = /[A-Z]/; // At least one uppercase letter
    const regexDigit = /[0-9]/; // At least one digit
    const regexSpecial = /[$@$!%*?&]/; // At least one special character

    // Test the password against each regular expression
    const isLengthValid = regexLength.test(password);
    const hasLowercase = regexLowercase.test(password);
    const hasUppercase = regexUppercase.test(password);
    const hasDigit = regexDigit.test(password);
    const hasSpecial = regexSpecial.test(password);

    // Combine the tests to check the overall password strength
    const isValid =
        isLengthValid && hasLowercase && hasUppercase && hasDigit && hasSpecial;

    return {
        isValid,
        errors: {
            isLengthValid: !isLengthValid,
            hasLowercase: !hasLowercase,
            hasUppercase: !hasUppercase,
            hasDigit: !hasDigit,
            hasSpecial: !hasSpecial,
        },
    };
}

module.exports = validatePassword;