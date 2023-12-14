import React from "react";

const socailGroupData = [
  {
    src: "/social/facebook.svg",
    name: "facebook",
    width: 24,
    height: 24,
  },
  {
    src: "/social/insta.svg",
    name: "inastagram",
    width: 24,
    height: 24,
  },
  {
    src: "/social/twitter.svg",
    name: "twitter",
    width: 24,
    height: 24,
  },
  {
    src: "/social/youtub.svg",
    name: "youtub",
    width: 24,
    height: 24,
  },
];

export default function SocialGroup() {
  return (
    <ul>
      {socailGroupData.map(({ src, name, width, height }, index) => {
        return <li key={index}></li>;
      })}
    </ul>
  );
}
