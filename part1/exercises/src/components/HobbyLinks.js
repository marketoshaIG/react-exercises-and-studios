import React from "react";

const HobbyLinks = () => {
  const hobbyLinks = [
    "https://www.climbkc.com/",
    "https://www.rei.com/",
  ];

  return (
    <>
      <h2>Hobby Links</h2>
      <ul>
        {hobbyLinks.map((link, index) => (
          <li key={index}>
            <a href={link}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HobbyLinks;
