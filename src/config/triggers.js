const userInteractionTriggers = {
  onClick: {
    type: Boolean,
    default: false,
    eventName: "click",
  },
  onDoubleClick: {
    type: Boolean,
    default: false,
    eventName: "dblclick",
  },
  onRightClick: {
    type: Boolean,
    default: false,
    eventName: "contextmenu",
  },
  onMouseDown: {
    type: Boolean,
    default: false,
    eventName: "mousedown",
  },
  onMouseUp: {
    type: Boolean,
    default: false,
    eventName: "mouseup",
  },
  onMouseMove: {
    type: Boolean,
    default: false,
    eventName: "mousemove",
  },
  onMouseOver: {
    type: Boolean,
    default: false,
    eventName: "mouseover",
  },
  onMouseOut: {
    type: Boolean,
    default: false,
    eventName: "mouseout",
  },
  onMouseEnter: {
    type: Boolean,
    default: false,
    eventName: "mouseenter",
  },
  onMouseLeave: {
    type: Boolean,
    default: false,
    eventName: "mouseleave",
  },
  onTouchStart: {
    type: Boolean,
    default: false,
    eventName: "touchstart",
  },
  onTouchMove: {
    type: Boolean,
    default: false,
    eventName: "touchmove",
  },
  onTouchEnd: {
    type: Boolean,
    default: false,
    eventName: "touchend",
  },
  onTouchCancel: {
    type: Boolean,
    default: false,
    eventName: "touchcancel",
  },
  onFocus: {
    type: Boolean,
    default: false,
    eventName: "focus",
  },
  onBlur: {
    type: Boolean,
    default: false,
    eventName: "blur",
  },
  onKeyPress: {
    type: Boolean,
    default: false,
    eventName: "keypress",
  },
  onKeyDown: {
    type: Boolean,
    default: false,
    eventName: "keydown",
  },
  onKeyUp: {
    type: Boolean,
    default: false,
    eventName: "keyup",
  },
  onScroll: {
    type: Boolean,
    default: false,
    eventName: "scroll",
  },
  onDrag: {
    type: Boolean,
    default: false,
    eventName: "drag",
  },
  onDragStart: {
    type: Boolean,
    default: false,
    eventName: "dragstart",
  },
  onDragEnd: {
    type: Boolean,
    default: false,
    eventName: "dragend",
  },
  onDragEnter: {
    type: Boolean,
    default: false,
    eventName: "dragenter",
  },
  onDragLeave: {
    type: Boolean,
    default: false,
    eventName: "dragleave",
  },
  onDragOver: {
    type: Boolean,
    default: false,
    eventName: "dragover",
  },
  onDrop: {
    type: Boolean,
    default: false,
    eventName: "drop",
  },
  onChange: {
    type: Boolean,
    default: false,
    eventName: "change",
  },
  onInput: {
    type: Boolean,
    default: false,
    eventName: "input",
  },
  onSubmit: {
    type: Boolean,
    default: false,
    eventName: "submit",
  },
  onResize: {
    type: Boolean,
    default: false,
    eventName: "resize",
  },
  onWheel: {
    type: Boolean,
    default: false,
    eventName: "wheel",
  },
  // Add any additional events here
};

const scrollTriggers = {
  onScrollToElement: {
    type: Boolean,
    default: false,
  },
};

export { userInteractionTriggers, scrollTriggers };
