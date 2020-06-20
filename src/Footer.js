import React from "react";

const Footer = () => {
  const footerInfo = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <footer>
      <ul>
        {footerInfo.map(info => {
          return <li>{info}</li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
