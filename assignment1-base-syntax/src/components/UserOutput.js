import React from "react";
import "./UserOutput.css";

const UserOutput = props => {
  console.log(props);
  return (
    <div className="UserOutput">
      <p>This will be overwritten</p>
      <p>Username: {props.username}</p>
    </div>
  );
};

export default UserOutput;
