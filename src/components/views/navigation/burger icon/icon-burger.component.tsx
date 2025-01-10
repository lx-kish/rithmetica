interface IProps {
  open: boolean;
  setOpen: () => void;
}

function IconBurger({ open, setOpen }: IProps) {
  return (
    <div className={`burger${open ? " is-active" : ""}`} onClick={setOpen}>
      <span className="line" />
      <span className="line" />
      <span className="line" />
    </div>
  );
}

export default IconBurger;
