import React from "react";

const Comingsoon = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <video
        className="max-w-full max-h-[80vh] object-contain"
        autoPlay
        loop
        muted
      >
        <source src="/Coming_Soon.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Comingsoon;
