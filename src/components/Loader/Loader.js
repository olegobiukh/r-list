import "./index.scss";

import React from "react";

const Loader = () => (
  <div className="preloader-wrapper big active">
    <div className="spinner-layer spinner-green">
      <div className="circle-clipper left">
        <div className="circle" />
      </div>
      <div className="gap-patch">
        <div className="circle" />
      </div>
      <div className="circle-clipper right">
        <div className="circle" />
      </div>
    </div>
  </div>
);

export default Loader;
