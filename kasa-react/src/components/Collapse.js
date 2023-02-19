import React, { useState } from "react";
import Vector from "../assets/images/Vector.png";

const Collapse = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse" id={`collapse-${title}`}>
      <div className="collapse__main">
        <h2 className="collapse__title">{title}</h2>
        <p
          className={`collapse__fleche ${open}`}
          onClick={() => setOpen(!open)}
        >
          <img src={Vector} alt="menu déroulant" />
        </p>
      </div>

      {open && <div className="collapse__description">{children}</div>}
    </div>
  );
};

export default Collapse;
