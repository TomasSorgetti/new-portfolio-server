class ClientError extends Error {
  constructor(message, status = 400) {
    super(message);
    this.statusCode = status;
  }
}

class ValidationError extends Error {
  constructor(
    message = "Access denied: You do not have the necessary permissions to complete this request.",
    status = 403
  ) {
    super(message);
    this.statusCode = status;
  }
}

class UnauthorizedError extends Error {
  constructor(message = "Unauthorized") {
    super(message);
    this.statusCode = 403;
  }
}
module.exports = { ClientError, ValidationError, UnauthorizedError };
