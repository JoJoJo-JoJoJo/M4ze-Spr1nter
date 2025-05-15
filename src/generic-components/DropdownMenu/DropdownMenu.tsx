import { motion } from "motion/react";
import { DropdownMenuProps, MenuNode } from "../../constants/types";
import { useRef, useState } from "react";
import { useDimensions } from "../../custom_hooks/generic-component-utils";
import { ClickBtn } from "../Btns";
import { sidebarVariants } from "../../constants/variants";
import MenuList from "./Menu";
import "./DropdownMenu.css";

//todo: replace component type with DropdownMenuProps<HTMLButtonElement>
const DropdownMenu = ({ children, items }: DropdownMenuProps<MenuNode>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { height } = useDimensions(containerRef);

  return (
    <div className="dd-container">
      <motion.nav
        className="dd-nav"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="dd-sidebar" variants={sidebarVariants} />
        <MenuList items={items} />
        <ClickBtn
          classNames={["dd-btn"]}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {children}
        </ClickBtn>
      </motion.nav>
    </div>
  );
};

export default DropdownMenu;
