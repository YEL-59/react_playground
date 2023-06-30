import React from "react";

const Footer = () => {
  const hour = new Date().getHours()
  const openHour = 12
  const closeHour=22
  const isOpen = hour>=openHour && hour<=closeHour 
  console.log(isOpen)
  // if (hour>=openHour && hour<=closeHour) {
  //     alert('We are open')
  // } else {
  //     alert('We are close')
  // }

  return (
    <>
      <p>
        Hey it's{" "}
        <span className="text-orange-500 text-sm border-2 rounded p-1 px-3">
          -{new Date().toLocaleTimeString()}-
        </span>{" "}
        We'r Currently {isOpen &&  <p>Open</p>}!.
      </p>
    </>
  );
};

export default Footer;
