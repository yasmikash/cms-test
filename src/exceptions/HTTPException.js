module.exports = class HTTPException {
  static createValidationError(message) {
    const error = new Error(
      message || "Invalid input. Please check your input"
    );
    error.statusCode = 400;
    return error;
  }

  static createConfigurationError(message) {
    const error = new Error(message || "Configuration error");
    error.statusCode = 500;
    return error;
  }
};
