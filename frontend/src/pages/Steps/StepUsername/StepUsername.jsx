import React from "react";
import styles from "./StepUsername.module.css";

const StepUsername = (onNext) => {
  return (
    <>
      username component
      <button onClick={onNext}>next</button>
    </>
  );
};

export default StepUsername;
