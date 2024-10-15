import { ReactElement } from "react";

interface IProps {
  className: string;
}

function IconCircle({ className }: IProps): ReactElement<IProps> {
  return (
    <svg
      className={className}
      data-icon="circle"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
    >
      <path d="M24 14c0 6.625-5.375 12-12 12s-12-5.375-12-12 5.375-12 12-12 12 5.375 12 12z" />
    </svg>
  );
}

export default IconCircle;
