import Image from "next/image";
import React from "react";

const Welcome = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center flex-1">
      <span>Hello there!</span>
      <Image src="/logo.jpg" alt="Logo" width={580} height={386} />
    </div>
  );
};

export default Welcome;
