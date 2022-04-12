import React from "react";

const logo =
  "https://assets-global.website-files.com/61c9fe00acd90d7271f7014e/6217f2d42e9ce757903a91c8_Webclip.svg";

const Hero = () => (
  <div className="text-center hero">
    <img className="mb-3 app-logo" src={logo} alt="Chili Piper logo" width="70" />
    <h1 className="mb-4">Gmail Mimic App</h1>
    <p className="lead">
      This is a Mimic  application for Gmail which is integrated with Chili Piper task to automate Gmail APIs {" "}
      <a
        href="/login"
      >
        Login
      </a>
    </p>
  </div>
);

export default Hero;
