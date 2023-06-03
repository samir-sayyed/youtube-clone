import React from "react";
import ButtonItem from "./ButtonItem";

const ButtonList = () => {
  const list = [
    "Mixes",
    "Music",
    "Bollywood",
    "News",
    "Shorts",
    "Comedy",
    "Sales",
    "AI",
    "Trending",
    "Hollywood",
    "South",
    "Live",
    "Cooking",
  ];

  return (
    <div className="flex">
      {list.map((name) => (
        <ButtonItem key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
