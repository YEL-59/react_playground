// import React from 'react';

// const TryVideo = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default TryVideo;

import React, { useEffect } from 'react';
import ReactPlayer from 'react-player'

const TryVideo = () => {
  useEffect(() => {
    document.addEventListener("contextmenu", handleContextMenu, false);
    document.addEventListener("keydown", handlePrintScreen, false);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu, false);
      document.removeEventListener("keydown", handlePrintScreen, false);
    };
  }, []);

  const handleContextMenu = (e)=> {
    e.preventDefault();
  };

  const handlePrintScreen = (e) => {
    if (e.key === "PrintScreen") {
      e.preventDefault();
    }
  };

  return <div>
    <ReactPlayer url='https://youtu.be/_1P3RAPnde8'/>
  </div>;
};

export default TryVideo;