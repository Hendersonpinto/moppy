"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = compareDates;

var _getSign = _interopRequireDefault(require("./getSign"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function compareDates(value1, value2) {
  var date1 = new Date(value1).setHours(0, 0, 0, 0);
  var date2 = new Date(value2).setHours(0, 0, 0, 0);
  return (0, _getSign["default"])(date1 - date2);
}

//# sourceMappingURL=compareDates.js.map