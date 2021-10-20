import React from "react";
import styles from "./StepOtp.module.css";

const StepOtp = ({ onNext }) => {
  return (
    <>
      Otp component
      <button onClick={onNext}>next</button>
    </>
  );
};

export default StepOtp;
