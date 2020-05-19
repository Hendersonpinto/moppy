"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../../../styles/colors");

var _shadows = require("../../../styles/shadows");

var _fontSizes = require("../../../styles/fontSizes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    border: none;\n    outline: none;\n    transition: all 0.2s ease;\n    background-color: transparent;\n    border-radius: 48px;\n    line-height: 36px;\n    height: 36px;\n    width: 36px;\n    margin: 5px auto;\n\n    &:hover {\n        transition: all 0.2s ease;\n        background-color: ", ";\n    }\n\n    &:active {\n        transform: scale(0.85);\n        transition: all 0.2s ease;\n    }\n\n    &:focus,\n    &:active {\n        box-shadow: ", ";\n    }\n\n    @media (max-width: 600px) {\n        margin: 3px auto;\n    }\n\n    ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDayButton = _styledComponents["default"].button(_templateObject(), _colors.COLOR_GRAY_2, _shadows.SHADOW_OUTLINE, function (props) {
  return props.isSelected && "\n            color: white;\n            background-color: ".concat(_colors.COLOR_BRAND, ";\n            text-align: center;\n            font-size: ").concat(_fontSizes.FONT_SIZE_TEXT_MEDIUM, ";\n            font-weight: 600;\n            border-radius: 48px;\n            line-height: 36px;\n            height: 36px;\n            width: 36px;\n            margin: 5px auto;\n            padding: 0;\n            border: none;\n            outline: none;\n        \n            &:active {\n                transform: scale(0.85);\n                transition: all 0.2s ease;\n            }\n        \n            &:hover {\n                background-color: ").concat(_colors.COLOR_BRAND, ";\n            }\n\n            @media (max-width: 600px) {\n                margin: 3px auto;\n            }\n        ");
});

var _default = StyledDayButton;
exports["default"] = _default;

//# sourceMappingURL=dayButton.js.map