import React from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useState } from "react";

export default function LikeButton() {
  const [likeButton, setLikeButton] = useState(true);
  const toggleLike = () => {
    setLikeButton(!likeButton);
  };
  return (
    <div>
      {likeButton ? (
        <HeartOutlined
          className="absolute top-2 right-2 text-sky-500 w-4 h-4"
          onClick={toggleLike}
        />
      ) : (
        <HeartFilled
          className="absolute top-2 right-2 text-red-500 w-4 h-4"
          onClick={toggleLike}
        />
      )}
    </div>
  );
}
