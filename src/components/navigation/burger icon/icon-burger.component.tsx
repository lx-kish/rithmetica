import React from "react";

interface IProps {
  open: boolean;
  setOpen: () => void;
};

const IconBurger: React.FC<IProps> = ({ open, setOpen }) => {

  return (
    <div
      className={`burger${open ? ' is-active' : ''}`}
      onClick={setOpen}
    >
      <span className="line" />
      <span className="line" />
      <span className="line" />
    </div>
  );
};

export default IconBurger;
