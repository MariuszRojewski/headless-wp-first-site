import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import "./style.scss";

export const PersonalTickItem = ({ children }) => {
  return (
    <div className="tick-item">
      <div className="icon">
        <AiFillCheckCircle />
      </div>
      <div className="text">{children}</div>
    </div>
  );
};
