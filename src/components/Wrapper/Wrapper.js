import "./index.scss";

import React from "react";

const Wrapper = ({ title, children }) => (
  <>
    <h1 className={`wrapper-title`}>{title}</h1>
    {children}
  </>
);

export default Wrapper;
