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
  var data = _taggedTemplateLiteral(["\n    text-align: center;\n    color: ", ";\n    font-size: ", ";\n    font-weight: 400;\n    line-height: 40px;\n    height: 40px;\n\n    abbr {\n        cursor: default;\n        text-transform: capitalize;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledHeaderDays = _styledComponents["default"].th(_templateObject(), _colors.COLOR_GRAY_3, _fontSizes.FONT_SIZE_TEXT_MEDIUM);

var _default = StyledHeaderDays;
exports["default"] = _default;

//# sourceMappingURL=headerDays.js.map