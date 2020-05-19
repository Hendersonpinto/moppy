"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Calendar;
exports.Component = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Select = _interopRequireDefault(require("./../Select"));

var _rightArrow = _interopRequireDefault(require("./icons/rightArrow"));

var _leftArrow = _interopRequireDefault(require("./icons/leftArrow"));

var _daysOfWeek = _interopRequireDefault(require("./daysOfWeek"));

var _month = _interopRequireDefault(require("./month"));

var _helpers = require("./helpers");

var _controlsContainer = _interopRequireDefault(require("./styled/controlsContainer"));

var _monthContainer = _interopRequireDefault(require("./styled/monthContainer"));

var _month2 = _interopRequireDefault(require("./styled/month"));

var _arrowButton = _interopRequireDefault(require("./styled/arrowButton"));

var _constants = require("../../libs/constants");

var _utils = require("../../libs/utils");

var _context = require("../Application/context");

var _context2 = require("./context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CalendarComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(CalendarComponent, _Component);

  function CalendarComponent(props) {
    var _this$keyHandlerMap, _this$keyHandlerMapAl;

    var _this;

    _classCallCheck(this, CalendarComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CalendarComponent).call(this, props));
    _this.state = {
      focusedDate: (0, _helpers.normalizeDate)(props.value),
      currentMonth: (0, _helpers.getFirstDayMonth)((0, _helpers.normalizeDate)(props.value))
    };
    _this.enableNavKeys = false;
    _this.monthLabelId = (0, _utils.uniqueId)('month');
    _this.previousMonth = _this.previousMonth.bind(_assertThisInitialized(_this));
    _this.nextMonth = _this.nextMonth.bind(_assertThisInitialized(_this));
    _this.handleYearChange = _this.handleYearChange.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    _this.handleKeyUpPressed = _this.handleKeyUpPressed.bind(_assertThisInitialized(_this));
    _this.handleKeyDownPressed = _this.handleKeyDownPressed.bind(_assertThisInitialized(_this));
    _this.handleKeyLeftPressed = _this.handleKeyLeftPressed.bind(_assertThisInitialized(_this));
    _this.handleKeyRightPressed = _this.handleKeyRightPressed.bind(_assertThisInitialized(_this));
    _this.handleKeyHomePressed = _this.handleKeyHomePressed.bind(_assertThisInitialized(_this));
    _this.handleKeyEndPressed = _this.handleKeyEndPressed.bind(_assertThisInitialized(_this));
    _this.handleKeyPageUpPressed = _this.handleKeyPageUpPressed.bind(_assertThisInitialized(_this));
    _this.handleKeyPageDownPressed = _this.handleKeyPageDownPressed.bind(_assertThisInitialized(_this));
    _this.handleKeyEnterPressed = _this.handleKeyEnterPressed.bind(_assertThisInitialized(_this));
    _this.handleKeyAltPageUpPressed = _this.handleKeyAltPageUpPressed.bind(_assertThisInitialized(_this));
    _this.handleKeyAltPageDownPressed = _this.handleKeyAltPageDownPressed.bind(_assertThisInitialized(_this));
    _this.keyHandlerMap = (_this$keyHandlerMap = {}, _defineProperty(_this$keyHandlerMap, _constants.UP_KEY, _this.handleKeyUpPressed), _defineProperty(_this$keyHandlerMap, _constants.DOWN_KEY, _this.handleKeyDownPressed), _defineProperty(_this$keyHandlerMap, _constants.LEFT_KEY, _this.handleKeyLeftPressed), _defineProperty(_this$keyHandlerMap, _constants.RIGHT_KEY, _this.handleKeyRightPressed), _defineProperty(_this$keyHandlerMap, _constants.HOME_KEY, _this.handleKeyHomePressed), _defineProperty(_this$keyHandlerMap, _constants.END_KEY, _this.handleKeyEndPressed), _defineProperty(_this$keyHandlerMap, _constants.PAGEUP_KEY, _this.handleKeyPageUpPressed), _defineProperty(_this$keyHandlerMap, _constants.PAGEDN_KEY, _this.handleKeyPageDownPressed), _defineProperty(_this$keyHandlerMap, _constants.SPACE_KEY, _this.handleKeyEnterPressed), _defineProperty(_this$keyHandlerMap, _constants.ENTER_KEY, _this.handleKeyEnterPressed), _this$keyHandlerMap);
    _this.keyHandlerMapAlt = (_this$keyHandlerMapAl = {}, _defineProperty(_this$keyHandlerMapAl, _constants.HOME_KEY, _this.handleKeyHomePressed), _defineProperty(_this$keyHandlerMapAl, _constants.END_KEY, _this.handleKeyEndPressed), _defineProperty(_this$keyHandlerMapAl, _constants.PAGEUP_KEY, _this.handleKeyAltPageUpPressed), _defineProperty(_this$keyHandlerMapAl, _constants.PAGEDN_KEY, _this.handleKeyAltPageDownPressed), _this$keyHandlerMapAl);
    _this.onDayFocus = _this.onDayFocus.bind(_assertThisInitialized(_this));
    _this.onDayBlur = _this.onDayBlur.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CalendarComponent, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevValue = prevProps.value;
      var value = this.props.value;
      var normalizedDate = (0, _helpers.normalizeDate)(value);

      if ((0, _helpers.formatDate)((0, _helpers.normalizeDate)(prevValue)) !== (0, _helpers.formatDate)(normalizedDate)) {
        this.updateCurrentMonth(normalizedDate);
        this.updateFocusedDate(normalizedDate);
      }
    }
  }, {
    key: "onDayFocus",
    value: function onDayFocus() {
      this.enableNavKeys = true;
    }
  }, {
    key: "onDayBlur",
    value: function onDayBlur() {
      this.enableNavKeys = false;
    }
  }, {
    key: "getContext",
    value: function getContext() {
      var focusedDate = this.state.focusedDate;
      return {
        focusedDate: focusedDate,
        useAutoFocus: this.enableNavKeys,
        privateKeyDown: this.handleKeyDown,
        privateOnFocus: this.onDayFocus,
        privateOnBlur: this.onDayBlur
      };
    }
  }, {
    key: "moveFocusedDay",
    value: function moveFocusedDay(increment) {
      var _this$state = this.state,
          currentMonth = _this$state.currentMonth,
          focusedDate = _this$state.focusedDate;
      var nextFocusedDate = (0, _helpers.addDays)(focusedDate, increment);
      var nextFocusedMonth = currentMonth;

      if (!(0, _helpers.isSameMonth)(nextFocusedDate, currentMonth)) {
        nextFocusedMonth = (0, _helpers.getFirstDayMonth)((0, _helpers.addMonths)(currentMonth, (0, _helpers.getSign)(increment)));
      }

      var _this$props = this.props,
          minDate = _this$props.minDate,
          maxDate = _this$props.maxDate;

      var _getCalendarBounds = (0, _helpers.getCalendarBounds)(minDate, maxDate),
          minCalendarDate = _getCalendarBounds.minCalendarDate,
          maxCalendarDate = _getCalendarBounds.maxCalendarDate;

      if ((0, _helpers.isDateBelowLimit)(nextFocusedDate, minCalendarDate)) {
        nextFocusedDate = minCalendarDate;
        nextFocusedMonth = (0, _helpers.getFirstDayMonth)(minCalendarDate);
      } else if ((0, _helpers.isDateBeyondLimit)(nextFocusedDate, maxCalendarDate)) {
        nextFocusedDate = maxCalendarDate;
        nextFocusedMonth = (0, _helpers.getFirstDayMonth)(maxCalendarDate);
      }

      this.setState({
        focusedDate: nextFocusedDate,
        currentMonth: nextFocusedMonth
      });
    }
  }, {
    key: "moveFocusedMonth",
    value: function moveFocusedMonth(increment) {
      var focusedDate = this.state.focusedDate;
      var nextFocusedDate = (0, _helpers.addMonths)(focusedDate, increment);
      var _this$props2 = this.props,
          minDate = _this$props2.minDate,
          maxDate = _this$props2.maxDate;

      var _getCalendarBounds2 = (0, _helpers.getCalendarBounds)(minDate, maxDate),
          minCalendarDate = _getCalendarBounds2.minCalendarDate,
          maxCalendarDate = _getCalendarBounds2.maxCalendarDate;

      if ((0, _helpers.isDateBelowLimit)(nextFocusedDate, minCalendarDate)) {
        nextFocusedDate = minCalendarDate;
      } else if ((0, _helpers.isDateBeyondLimit)(nextFocusedDate, maxCalendarDate)) {
        nextFocusedDate = maxCalendarDate;
      }

      this.setState({
        focusedDate: nextFocusedDate,
        currentMonth: (0, _helpers.getFirstDayMonth)(nextFocusedDate)
      });
    }
  }, {
    key: "updateCurrentMonth",
    value: function updateCurrentMonth(value) {
      this.setState({
        currentMonth: (0, _helpers.getFirstDayMonth)(value)
      });
    }
  }, {
    key: "updateFocusedDate",
    value: function updateFocusedDate(value) {
      this.setState({
        focusedDate: value
      });
    }
  }, {
    key: "nextMonth",
    value: function nextMonth() {
      var newMonth = (0, _helpers.addMonths)(this.state.currentMonth, 1);
      var value = this.props.value;
      var focusedDate = (0, _helpers.getNextFocusedDate)(value, newMonth);
      this.setState({
        focusedDate: focusedDate,
        currentMonth: newMonth
      });
    }
  }, {
    key: "previousMonth",
    value: function previousMonth() {
      var newMonth = (0, _helpers.addMonths)(this.state.currentMonth, -1);
      var value = this.props.value;
      var focusedDate = (0, _helpers.getNextFocusedDate)(value, newMonth);
      this.setState({
        focusedDate: focusedDate,
        currentMonth: newMonth
      });
    }
  }, {
    key: "handleYearChange",
    value: function handleYearChange(event) {
      var year = +event.target.value;
      var newMonth = new Date(this.state.currentMonth);
      newMonth.setFullYear(year);
      var value = this.props.value;
      var focusedDate = (0, _helpers.getNextFocusedDate)(value, newMonth);
      this.setState({
        focusedDate: focusedDate,
        currentMonth: newMonth
      });
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      if (!this.enableNavKeys) return;
      var keyCode = event.keyCode,
          altKey = event.altKey;
      var keyHandler = altKey ? this.keyHandlerMapAlt : this.keyHandlerMap;

      if (keyHandler[keyCode]) {
        event.preventDefault();
        event.stopPropagation();
        keyHandler[keyCode]();
      }
    }
  }, {
    key: "handleKeyUpPressed",
    value: function handleKeyUpPressed() {
      this.moveFocusedDay(-7);
    }
  }, {
    key: "handleKeyDownPressed",
    value: function handleKeyDownPressed() {
      this.moveFocusedDay(7);
    }
  }, {
    key: "handleKeyLeftPressed",
    value: function handleKeyLeftPressed() {
      this.moveFocusedDay(-1);
    }
  }, {
    key: "handleKeyRightPressed",
    value: function handleKeyRightPressed() {
      this.moveFocusedDay(1);
    }
  }, {
    key: "handleKeyHomePressed",
    value: function handleKeyHomePressed() {
      var focusedDate = this.state.focusedDate;
      this.moveFocusedDay(-focusedDate.getDay());
    }
  }, {
    key: "handleKeyEndPressed",
    value: function handleKeyEndPressed() {
      var focusedDate = this.state.focusedDate;
      this.moveFocusedDay(6 - focusedDate.getDay());
    }
  }, {
    key: "handleKeyPageUpPressed",
    value: function handleKeyPageUpPressed() {
      this.moveFocusedMonth(-1);
    }
  }, {
    key: "handleKeyPageDownPressed",
    value: function handleKeyPageDownPressed() {
      this.moveFocusedMonth(1);
    }
  }, {
    key: "handleKeyAltPageUpPressed",
    value: function handleKeyAltPageUpPressed() {
      this.moveFocusedMonth(-12);
    }
  }, {
    key: "handleKeyAltPageDownPressed",
    value: function handleKeyAltPageDownPressed() {
      this.moveFocusedMonth(12);
    }
  }, {
    key: "handleKeyEnterPressed",
    value: function handleKeyEnterPressed() {
      var onChange = this.props.onChange;
      var focusedDate = this.state.focusedDate;
      onChange(new Date(focusedDate));
    }
  }, {
    key: "render",
    value: function render() {
      var currentMonth = this.state.currentMonth;
      var _this$props3 = this.props,
          id = _this$props3.id,
          value = _this$props3.value,
          onChange = _this$props3.onChange,
          minDate = _this$props3.minDate,
          maxDate = _this$props3.maxDate,
          className = _this$props3.className,
          style = _this$props3.style,
          locale = _this$props3.locale;
      var formattedMonth = (0, _helpers.getFormattedMonth)(currentMonth, locale);
      var currentYear = currentMonth.getFullYear();
      var yearsRange = (0, _helpers.getYearsRange)({
        minDate: minDate,
        maxDate: maxDate,
        currentMonth: currentMonth.getMonth()
      });
      var lastYearItem = yearsRange[yearsRange.length - 1];
      var maxSelectableDate = maxDate || new Date(lastYearItem.value, 11, 31);
      var disableNextMonth = (0, _helpers.addMonths)(currentMonth, 1) > maxSelectableDate;
      var minSelectableDate = minDate || new Date(yearsRange[0].value, 0, 1);
      var prevDate = (0, _helpers.getLastDayMonth)((0, _helpers.addMonths)(currentMonth, -1));
      var disablePreviousMonth = prevDate < minSelectableDate;
      return _react["default"].createElement("section", {
        id: id,
        className: className,
        style: style
      }, _react["default"].createElement(_controlsContainer["default"], null, _react["default"].createElement(_monthContainer["default"], null, _react["default"].createElement(_arrowButton["default"], {
        onClick: this.previousMonth,
        size: "medium",
        disabled: disablePreviousMonth,
        icon: _react["default"].createElement(_leftArrow["default"], null),
        assistiveText: "Previous Month"
      }), _react["default"].createElement(_month2["default"], {
        id: this.monthLabelId,
        "data-id": "month"
      }, formattedMonth), _react["default"].createElement(_arrowButton["default"], {
        onClick: this.nextMonth,
        size: "medium",
        disabled: disableNextMonth,
        icon: _react["default"].createElement(_rightArrow["default"], null),
        assistiveText: "Next Month"
      })), _react["default"].createElement(_Select["default"], {
        label: "select year",
        hideLabel: true,
        value: currentYear,
        options: yearsRange,
        onChange: this.handleYearChange
      })), _react["default"].createElement("table", {
        role: "grid",
        "aria-labelledby": this.monthLabelId
      }, _react["default"].createElement(_daysOfWeek["default"], {
        locale: locale
      }), _react["default"].createElement(_context2.Provider, {
        value: this.getContext()
      }, _react["default"].createElement(_month["default"], {
        value: value,
        firstDayMonth: currentMonth,
        minDate: minDate,
        maxDate: maxDate,
        onChange: onChange
      }))));
    }
  }]);

  return CalendarComponent;
}(_react.Component);
/**
 * Calendar provide a simple way to select a single date.
 */


exports.Component = CalendarComponent;

function Calendar(_ref) {
  var locale = _ref.locale,
      rest = _objectWithoutProperties(_ref, ["locale"]);

  return _react["default"].createElement(_context.Consumer, null, function (values) {
    return _react["default"].createElement(CalendarComponent, _extends({
      locale: (0, _utils.getLocale)(values, locale)
    }, rest));
  });
}

Calendar.propTypes = {
  /** Sets the date for the Calendar programmatically. */
  value: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].string]),

  /** The ending of a range of valid dates. The range includes the endDate.
   * The default value is current date + 100 years. */
  maxDate: _propTypes["default"].instanceOf(Date),

  /** The beginning of a range of valid dates. The range includes the startDate.
   * The default value is current date - 100 years. */
  minDate: _propTypes["default"].instanceOf(Date),

  /** The action triggered when a value attribute changes. */
  onChange: _propTypes["default"].func,

  /** A CSS class for the outer element, in addition to the component's base classes. */
  className: _propTypes["default"].string,

  /** An object with custom style applied to the outer element. */
  style: _propTypes["default"].object,

  /** The id of the outer element. */
  id: _propTypes["default"].string,

  /** The Calendar locale. Defaults to browser's language. */
  locale: _propTypes["default"].string
};
Calendar.defaultProps = {
  value: undefined,
  minDate: undefined,
  maxDate: undefined,
  onChange: function onChange() {},
  className: undefined,
  style: undefined,
  id: undefined,
  locale: undefined
};

//# sourceMappingURL=index.js.map