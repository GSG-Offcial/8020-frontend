import React, { useState } from "react";
import style from "./accordian.module.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
const Accordion = ({ heading, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <li className={style.accordion_item}>
      {isActive && <div className={style.accordion_content}>{content}</div>}
      <div className={style.accordion_toggle} onClick={() => setIsActive(!isActive)}>
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <span style={{
            backgroundColor: "rgb(57, 46, 71)",
            borderRadius: "200px",
            padding:"0px 6px 2px 6px",
            textAlign:"center"
        }}>
            {!isActive ? (
              <FaArrowDown
                style={{
                  color: "blue",
                  fontSize: "14px",
                }}
              />
            ) : (
              <FaArrowUp
                style={{
                  backgroundColor: "rgb(57, 46, 71)",
                  color: "blue",
                  fontSize: "14px",
                }}
              />
            )}
          </span>
        </h3>
      </div>
    </li>
  );
};

export default Accordion;
