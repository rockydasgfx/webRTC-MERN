import React from "react";
import styles from "./StepAvatar.module.css";

const StepAvatar = ({ onNext }) => {
  return (
    <>
      Avatar component
      <button onClick={onNext}>next</button>
    </>
  );
};

export default StepAvatar;
