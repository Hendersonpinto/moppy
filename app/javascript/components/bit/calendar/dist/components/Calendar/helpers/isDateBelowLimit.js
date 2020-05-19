"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isDateBelowLimit;

var _compareDates = _interopRequireDefault(require("./compareDates"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isDateBelowLimit(date, limit) {
  return (0, _compareDates["default"])(date, limit) < 0;
}

//# sourceMappingURL=isDateBelowLimit.js.map