import Image from "next/image";
import React, { useState } from "react";

const Profile = () => {
  const [name] = useState<string>("Himanshu");
  return (
    <div className="flex flex-row gap-1">
      <div>{name}</div>
      <div>
        <button>
          <Image
            src={"/images/down-arrw.png"}
            alt="search"
            height={12}
            width={12}
          />
        </button>
      </div>
    </div>
  );
};

export default Profile;
