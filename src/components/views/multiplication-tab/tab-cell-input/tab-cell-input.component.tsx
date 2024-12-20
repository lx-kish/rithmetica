import { ReactElement } from "react";

import InputNumeric from "../../input-numeric/input-numeric.component";

interface IProps {
  className: string;
  answer: number;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TabCellInput({
  className,
  answer,
  value,
  handleChange,
}: IProps): ReactElement {
  return (
    <div className="component__input-box">
      <InputNumeric
        pattern="[0-9]*"
        step="1"
        result={answer.toString()}
        className={className}
        handleChange={handleChange}
        value={value}
      />
    </div>
  );
}

export default TabCellInput;
