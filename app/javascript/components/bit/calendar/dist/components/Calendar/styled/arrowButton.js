"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ButtonIcon = _interopRequireDefault(require("../../ButtonIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledArrowButton = (0, _styledComponents["default"])(_ButtonIcon["default"])(_templateObject(), function (props) {
  return props.disabled && "\n            svg {\n                fill: #e3e5ed;\n            }\n        ";
});
var _default = StyledArrowButton;
exports["default"] = _default;

//# sourceMappingURL=arrowButton.js.map