class ClientError extends Error {
  constructor(message, status = 400) {
    super(message);
    this.statusCode = status;
  }
}

class ValidationError extends Error {
  constructor(message, status = 403) {
    super(message);
    this.statusCode = status;
  }
}
module.exports = { ClientError, ValidationError };
