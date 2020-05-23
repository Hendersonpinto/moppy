import React from "react";

const MoppyButton = (props) => {
  const classes = props.className ? props.className : "";

  const onClick = (e) => {
    if (props.disabled) {
      e.preventDefault();
      return;
    }

    if (props.onClick) {
      props.onClick(e);
    }
  };
  return (
    <button
      className={`mybutton ${classes} ${props.disabled ? "disabled" : ""}`}
      onClick={onClick}
      disabled={props.disabled}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default MoppyButton;
