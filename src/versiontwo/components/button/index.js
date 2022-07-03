import React from 'react';
import PropTypes from "prop-types";
import style from './index.module.css';

export const Btn = (props) => {
  return (
    // <div>index</div>
    <button
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
      className={style.btn}
      style={{
        background: props.bgColor,
        color: props.color,
        border: props.border,
        padding: props.padding,
        display: props.flex,
        alignItems: props.alignItems,
        flexDirection: props.flexDirection,
      }}
    >
      {props.value && props.value}  
    </button>
  )
};
Btn.propTypes = {
    type: PropTypes.string,
    icon: PropTypes.any,
    onClick: PropTypes.any,
    value: PropTypes.any,
    bgColor: PropTypes.string,
    btnClass: PropTypes.string,
    color: PropTypes.string,
    border: PropTypes.string,
    disabled: PropTypes.bool,
    padding: PropTypes.string,
    flex: PropTypes.string,
    alignItems: PropTypes.string,
    flexDirection: PropTypes.string,
  };
