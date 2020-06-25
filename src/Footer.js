import React from "react";

const Footer = props => {
  const footerInfo = props.footerInfo;
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        {footerInfo.map((line, index) => {
          return <li key={index}>{line}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
