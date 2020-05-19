"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Month;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("./helpers");

var _week = _interopRequireDefault(require("./week"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Month(props) {
  var firstDayMonth = props.firstDayMonth,
      value = props.value,
      minDate = props.minDate,
      maxDate = props.maxDate,
      onChange = props.onChange;
  var lastDayMonth = (0, _helpers.getLastDayMonth)(firstDayMonth);
  var date = new Date(firstDayMonth);

  function Weeks() {
    var weeks = [];
    var dayOfWeek = date.getDay();
    var daysAfter = 6 - dayOfWeek;

    while (date <= lastDayMonth || (0, _helpers.addDays)(date, -dayOfWeek) <= lastDayMonth) {
      var startDate = (0, _helpers.addDays)(date, -dayOfWeek);
      var endDate = (0, _helpers.addDays)(date, daysAfter);
      weeks.push(_react["default"].createElement(_week["default"], {
        value: value,
        startDate: startDate,
        endDate: endDate,
        minDate: minDate,
        maxDate: maxDate,
        firstDayMonth: firstDayMonth,
        key: date.getTime(),
        onChange: onChange
      }));
      date = (0, _helpers.addDays)(date, 7);
    }

    return weeks;
  }

  return _react["default"].createElement("tbody", null, _react["default"].createElement(Weeks, null));
}

Month.propTypes = {
  firstDayMonth: _propTypes["default"].instanceOf(Date),
  minDate: _propTypes["default"].instanceOf(Date),
  maxDate: _propTypes["default"].instanceOf(Date),
  value: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].string]),
  onChange: _propTypes["default"].func
};
Month.defaultProps = {
  firstDayMonth: undefined,
  minDate: undefined,
  maxDate: undefined,
  value: undefined,
  onChange: function onChange() {}
};

//# sourceMappingURL=month.js.map