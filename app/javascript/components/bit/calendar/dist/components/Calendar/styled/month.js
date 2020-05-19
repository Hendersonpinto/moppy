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
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n    color: ", ";\n    text-transform: capitalize;\n    font-weight: 500;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledMonth = _styledComponents["default"].h3(_templateObject(), _fontSizes.FONT_SIZE_HEADING_MEDIUM, _colors.COLOR_DARK_1);

var _default = StyledMonth;
exports["default"] = _default;

//# sourceMappingURL=month.js.map