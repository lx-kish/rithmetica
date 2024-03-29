import React from "react";

interface IProps {
  className: string;
}

const IconLxKish: React.FC<IProps> = (props) => {
  return (
    <svg
      data-testid="lx-kish-icon"
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 60 60"
      aria-labelledby="title"
    >
      <title id="title">Lx Kish Logo</title>
      <polygon points="1 8 8 1 8 52 59 52 52 59 1 59" />
      <polygon points="15.75 13.5 22.5 6.75 52.25 36.5 45.5 43.25" />
      <polygon points="15.75 36.5 45.5 6.75 52.25 13.5 22.5 43.25" />
    </svg>
  );
};

export default IconLxKish;
