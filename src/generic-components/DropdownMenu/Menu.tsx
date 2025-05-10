import { motion } from "motion/react";
import { MenuItemProps, MenuListProps } from "../../constants/types";
import "./Menu.css";
import { itemVariants, navVariants } from "../../constants/variants";

const MenuList = ({ items }: MenuListProps) => (
  <motion.ul className="dd-list" variants={navVariants}>
    {items.map((item) => (
      <MenuItem item={item} key={JSON.stringify(item)} />
    ))}
  </motion.ul>
);

const MenuItem = ({ item }: MenuItemProps) => {
  const { text /* icon */ /* subItems */ } = item;

  return (
    <motion.li
      className="dd-list-item"
      variants={itemVariants}
      whileHover={{ scale: 1.1, cursor: "pointer" }}
      whileTap={{ scale: 0.95 }}
    >
      <p className="dd-list-item-text">{text}</p>
      <div className="dd-list-item-icon" />
    </motion.li>
  );
};

export default MenuList;
