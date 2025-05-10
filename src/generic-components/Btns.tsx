import { ClickBtnProps, HoverBtnProps } from "../constants/types";

const HoverBtn = ({ children, classNames, onMouseOver }: HoverBtnProps) => {
  return (
    <button className={[...classNames].join()} onMouseOver={onMouseOver}>
      {children}
    </button>
  );
};

const ClickBtn = ({ children, classNames, onClick }: ClickBtnProps) => {
  return (
    <button
      className={[...classNames].join()}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { HoverBtn, ClickBtn };
