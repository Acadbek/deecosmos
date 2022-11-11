import Image from "next/image";
import React from "react";

const AutoPlayCard = ({ data }) => {
  return (
    <div className="flex">
      <Image
        className="rounded-lg mb-4"
        src={data?.img}
        alt="img"
        width={437}
        height={250}
      />
    </div>
  );
};

export default AutoPlayCard;
