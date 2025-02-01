import { useState } from "react";

const About = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="flex text-black">
      <p
        className={`cursor-pointer ${isClicked ? "text-blue-500 font-bold text-xl" : "text-black"}`}
        onClick={() => setIsClicked(!isClicked)}
      >
        About
      </p>
    </div>
  );
};

export default About;
