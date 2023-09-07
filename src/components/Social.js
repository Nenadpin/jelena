import React from "react";
import Phone from "@mui/icons-material/Phone";
import Twitter from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Email";
import GitHub from "@mui/icons-material/GitHub";

const Social = () => {
  return (
    <div className="socialMedia">
      <span className="icon-link">
        <a href="tel:+381641227779">
          <Phone titleAccess="Phone" />
        </a>
      </span>
      <span className="icon-link">
        <a href="https://linkedin.com/in/nenadpin" target="blank">
          <LinkedIn titleAccess="LinkedIn" />
        </a>
      </span>
      <span className="icon-link">
        <a href="https://github.com/nenadpin" target="blank">
          <GitHub titleAccess="GitHub" />
        </a>
      </span>
      <span className="icon-link">
        <a href="mailto:nenadpin@yahoo.com">
          <Email titleAccess="e-mail" />
        </a>
      </span>
      <span className="icon-link">
        <a href="https://twitter.com/nenadpin" target="blank">
          <Twitter titleAccess="Twitter" />
        </a>
      </span>
    </div>
  );
};

export default Social;
