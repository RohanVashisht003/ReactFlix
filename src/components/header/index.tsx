import React from "react";
import { ComponentProp } from "../../types/AllTypes";
import {
  Container,
  Logo,
  Nav,
  NavDropdown,
  NavLink,
  Panel,
} from "./styles/header";
import { useNavigate } from "react-router-dom";

type LogoProp = {
  to: string;
  [x: string]: any;
};
type HeaderSearchProp = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  handleSearch: () => void;
  [x: string]: any;
};
type HeaderNavLinkProp = {
  isSelected: boolean;
  children: any;
  [x: string]: any;
};
type DropdownOption = {
  title: string;
  value: string;
};

function Header({ children, ...restProps }: ComponentProp) {
  return <Container {...restProps}>{children}</Container>;
}
Header.Panel = function HeaderPanel({ children, ...restProps }: ComponentProp) {
  return <Panel {...restProps}>{children}</Panel>;
};

Header.Nav = function HeaderNav({ children, ...restProps }: ComponentProp) {
  return <Nav {...restProps}>{children}</Nav>;
};

Header.NavLink = function HeaderNavLink({
  children,
  isSelected,
  ...restProps
}: HeaderNavLinkProp) {
  return (
    <NavLink isSelected={isSelected} {...restProps}>
      {children}
    </NavLink>
  );
};
Header.Logo = function HeaderLogo({ to, ...restProps }: LogoProp) {
  let navigate = useNavigate();
  return <Logo onClick={() => navigate(to)} {...restProps} />;
};
Header.NavDropdown = function EpisodeDropdown({
  options,
  category,
  setCategory,
  ...restProps
}: ComponentProp) {
  return (
    <NavDropdown
      {...restProps}
      onChange={(e) => setCategory(e.target.value)}
      value={category}
    >
      {options.map(({ title, value }: DropdownOption) => (
        <option key={`${value}_option`} value={value}>
          {title}
        </option>
      ))}
    </NavDropdown>
  );
};
export default Header;
