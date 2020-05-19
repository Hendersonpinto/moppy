"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Day;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("./context");

var _day = _interopRequireDefault(require("./styled/day"));

var _dayAdjacent = _interopRequireDefault(require("./styled/dayAdjacent"));

var _dayButton = _interopRequireDefault(require("./styled/dayButton"));

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function DayComponent(props) {
  var date = props.date,
      firstDayMonth = props.firstDayMonth,
      isSelected = props.isSelected,
      minDate = props.minDate,
      maxDate = props.maxDate,
      onChange = props.onChange;
  var useAutoFocus = props.useAutoFocus,
      focusedDate = props.focusedDate,
      privateKeyDown = props.privateKeyDown,
      privateOnFocus = props.privateOnFocus,
      privateOnBlur = props.privateOnBlur;
  var day = date.getDate();
  var isAdjacentDate = date.getMonth() !== firstDayMonth.getMonth();
  var isDisabled = (0, _helpers.compareDates)(date, maxDate) > 0 || (0, _helpers.compareDates)(date, minDate) < 0;
  var tabIndex = (0, _helpers.isSameDay)(focusedDate, date) ? 0 : -1;
  var buttonRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    if (!useAutoFocus || !buttonRef.current || tabIndex === -1) return;
    buttonRef.current.focus();
  }, [tabIndex, useAutoFocus]);

  if (isAdjacentDate || isDisabled) {
    return _react["default"].createElement(_day["default"], {
      role: "gridcell",
      "aria-selected": "false"
    }, _react["default"].createElement(_dayAdjacent["default"], null, day));
  }

  return _react["default"].createElement(_day["default"], {
    role: "gridcell"
  }, _react["default"].createElement(_dayButton["default"], {
    ref: buttonRef,
    tabIndex: tabIndex,
    onClick: function onClick() {
      return onChange(new Date(date));
    },
    isSelected: isSelected,
    "data-selected": isSelected,
    onKeyDown: privateKeyDown,
    onFocus: privateOnFocus,
    onBlur: privateOnBlur
  }, day));
}

function Day(props) {
  return _react["default"].createElement(_context.Consumer, null, function (values) {
    return _react["default"].createElement(DayComponent, _extends({}, values, props));
  });
}

Day.propTypes = {
  date: _propTypes["default"].instanceOf(Date),
  firstDayMonth: _propTypes["default"].instanceOf(Date),
  minDate: _propTypes["default"].instanceOf(Date),
  maxDate: _propTypes["default"].instanceOf(Date),
  isSelected: _propTypes["default"].bool,
  onChange: _propTypes["default"].func
};
Day.defaultProps = {
  date: undefined,
  firstDayMonth: undefined,
  minDate: undefined,
  maxDate: undefined,
  isSelected: false,
  onChange: function onChange() {}
};

//# sourceMappingURL=day.js.map