"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../../../styles/colors");

var _fontSizes = require("../../../styles/fontSizes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    background-color: transparent;\n    color: ", ";\n    text-align: center;\n    font-size: ", ";\n    font-weight: 400;\n    line-height: 36px;\n    height: 36px;\n    margin: 5px auto;\n    cursor: not-allowed;\n    user-select: none;\n\n    @media (max-width: 600px) {\n        margin: 3px auto;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDayAdjacent = _styledComponents["default"].span(_templateObject(), _colors.COLOR_GRAY_2, _fontSizes.FONT_SIZE_TEXT_MEDIUM);

var _default = StyledDayAdjacent;
exports["default"] = _default;

//# sourceMappingURL=dayAdjacent.js.map