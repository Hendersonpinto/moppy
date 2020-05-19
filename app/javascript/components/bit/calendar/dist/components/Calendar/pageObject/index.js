"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Calendar page object class.
 * @class
 * @tutorial calendar
 */
var PageCalendar =
/*#__PURE__*/
function () {
  /**
   * Create a new PageCalendar page object.
   * @constructor
   * @param {string} rootElement - The selector of the PageCalendar root element.
   */
  function PageCalendar(rootElement) {
    _classCallCheck(this, PageCalendar);

    this.rootElement = rootElement;
  }
  /**
   * Clicks the previous month button element.
   * @method
   */


  _createClass(PageCalendar, [{
    key: "clickPrevMonthButton",
    value: function clickPrevMonthButton() {
      $(this.rootElement).$$('button[data-id=button-icon-element]')[0].click();
    }
    /**
     * Clicks the next month button element.
     * @method
     */

  }, {
    key: "clickNextMonthButton",
    value: function clickNextMonthButton() {
      $(this.rootElement).$$('button[data-id=button-icon-element]')[1].click();
    }
    /**
     * Clicks the select year element.
     * @method
     */

  }, {
    key: "clickSelectYear",
    value: function clickSelectYear() {
      $(this.rootElement).$('select').click();
    }
    /**
     * Clicks the specific enabled day button element.
     * @method
     */

  }, {
    key: "clickDay",
    value: function clickDay(day) {
      var buttonEl = $(this.rootElement).$('table').$("button=".concat(day));
      if (buttonEl.isExisting()) buttonEl.click();
    }
    /**
     * Returns the text of the current selected month element.
     * @method
     * @returns {string}
     */

  }, {
    key: "getSelectedMonth",
    value: function getSelectedMonth() {
      return $(this.rootElement).$('h3[data-id=month]').getText();
    }
    /**
     * Returns the value of the select year element.
     * @method
     * @returns {string}
     */

  }, {
    key: "getSelectedYear",
    value: function getSelectedYear() {
      return $(this.rootElement).$('select').getValue();
    }
    /**
     * Returns the text of the current selected day element.
     * @method
     * @returns {string}
     */

  }, {
    key: "getSelectedDay",
    value: function getSelectedDay() {
      return $(this.rootElement).$('button[data-selected=true]').getText();
    }
    /**
     * Set the value of the year select element
     * @method
     * @param {string}
     */

  }, {
    key: "setYear",
    value: function setYear(value) {
      $(this.rootElement).$('select').selectByVisibleText(value);
    }
    /**
     * Returns true when the specific day button element has focus.
     * @method
     * @returns {bool}
     */

  }, {
    key: "isDayFocused",
    value: function isDayFocused(day) {
      var buttonEl = $(this.rootElement).$('table').$("button=".concat(day));
      if (!buttonEl.isExisting()) return false;
      return buttonEl.isFocused();
    }
    /**
     * Returns true when the previous month button element is disabled.
     * @method
     * @returns {bool}
     */

  }, {
    key: "isPrevMonthButtonDisabled",
    value: function isPrevMonthButtonDisabled() {
      var buttonEl = $(this.rootElement).$$('button[data-id=button-icon-element]')[0];
      return !buttonEl.isEnabled();
    }
    /**
     * Returns true when the next month button element is disabled.
     * @method
     * @returns {bool}
     */

  }, {
    key: "isNextMonthButtonDisabled",
    value: function isNextMonthButtonDisabled() {
      var buttonEl = $(this.rootElement).$$('button[data-id=button-icon-element]')[1];
      return !buttonEl.isEnabled();
    }
  }]);

  return PageCalendar;
}();

module.exports = PageCalendar;

//# sourceMappingURL=index.js.map