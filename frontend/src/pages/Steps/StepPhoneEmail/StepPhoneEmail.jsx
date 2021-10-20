import React from "react";
import styles from "./StepPhoneEmail.module.css";
const StepPhoneEmail = ({ onNext }) => {
  return (
    <>
      phone & Email components
      <button onClick={onNext}>next</button>
    </>
  );
};

export default StepPhoneEmail;
