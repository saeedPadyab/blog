import React, { FunctionComponent } from "react";
// import Link from "next/link";
import {
  HeaderWrapper,
  LogoBox,
  Menu,
  MenuItem,
  Actions,
  ActionItem,
} from "./styles";

const Header: FunctionComponent = () => {
  return (
    <HeaderWrapper>
      <LogoBox>
        <img src="/images/logo.png" alt="" />
      </LogoBox>
      <Menu className="">
        <MenuItem>Home</MenuItem>
        <MenuItem>Features</MenuItem>
        <MenuItem>Portfolio</MenuItem>
        <MenuItem selected={true}>Blog</MenuItem>
        <MenuItem>Shop</MenuItem>
      </Menu>
      <Actions>
        <ActionItem>Cart</ActionItem>
        <ActionItem>Search</ActionItem>
      </Actions>
    </HeaderWrapper>
  );
};

export default Header;
