"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isDateBeyondLimit;

var _compareDates = _interopRequireDefault(require("./compareDates"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isDateBeyondLimit(date, limit) {
  return (0, _compareDates["default"])(date, limit) > 0;
}

//# sourceMappingURL=isDateBeyondLimit.js.map