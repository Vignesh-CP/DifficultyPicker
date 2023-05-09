import React from "react";
import s from "./MenuList.module.css";
import { MenuListItem } from "../MenuListItems/MenuListItem";

const MenuList = (props) => {
  return (
    <div className={s.container}>
      <MenuListItem difficulty="Low"/>
      <MenuListItem difficulty="High"/>
      <MenuListItem difficulty="Medium"/>
      <MenuListItem difficulty="Insane"/>
    </div>
  );
};

export default MenuList;