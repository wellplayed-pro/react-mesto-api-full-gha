const { ERROR_CONFLICT } = require('./typical_errors');

class ErrorConflict extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_CONFLICT;
  }
}

module.exports = ErrorConflict;
