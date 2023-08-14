"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.ConstructorElement=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireDefault(require("react"));var _clsx2=_interopRequireDefault(require("clsx"));var _icons=require("./icons");require("./constructor-element.css");var ConstructorElement=function ConstructorElement(_ref){var type=_ref.type,text=_ref.text,thumbnail=_ref.thumbnail,price=_ref.price,isLocked=_ref.isLocked,_ref$extraClass=_ref.extraClass,extraClass=_ref$extraClass===void 0?'':_ref$extraClass,handleClose=_ref.handleClose;var className=(0,_clsx2.default)('constructor-element',(0,_defineProperty2.default)({},"constructor-element_pos_".concat(type),type),extraClass);var action=isLocked?/*#__PURE__*/_react.default.createElement(_icons.LockIcon,{type:"secondary"}):/*#__PURE__*/_react.default.createElement(_icons.DeleteIcon,{type:"primary",onClick:handleClose});return/*#__PURE__*/_react.default.createElement("div",{className:className},/*#__PURE__*/_react.default.createElement("span",{className:"constructor-element__row"},/*#__PURE__*/_react.default.createElement("img",{className:"constructor-element__image",src:thumbnail,alt:text}),/*#__PURE__*/_react.default.createElement("span",{className:"constructor-element__text"},text),/*#__PURE__*/_react.default.createElement("span",{className:"constructor-element__price"},price,/*#__PURE__*/_react.default.createElement(_icons.CurrencyIcon,{type:"primary"})),/*#__PURE__*/_react.default.createElement("span",{className:"constructor-element__action pr-2"},action)));};exports.ConstructorElement=ConstructorElement;ConstructorElement.displayName="ConstructorElement";