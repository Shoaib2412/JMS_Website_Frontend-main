import React from "react";

function Part1() {
  return (
    <div className="relative w-full">
      <div className="relative">
        <img
          src="../../Images/MatheMatics_image.jpg"
          alt=""
          className="object-cover w-full opacity-20 h-[calc(110vh-10vh)]"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src="../../Images/logo.png"
            alt=""
            className="w-auto h-auto"
          />
        </div>
      </div>
    </div>

  );
}

export default Part1;
