import Image from "next/image";
import React from "react";

const Welcome = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center flex-1 px-5">
      <div className="relative w-60 h-72">
        <Image
          src="/logoTodo.jpg"
          alt="Logo"
          fill
          className="rounded-sm"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse at center, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
            maskImage:
              "radial-gradient(ellipse at center, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>
    </div>
  );
};

export default Welcome;
