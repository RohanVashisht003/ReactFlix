import React, { useState } from "react";
import { ComponentProp } from "../../types/AllTypes";
import {
  Avatar,
  Button,
  Container,
  Dropdown,
  Logo,
  Menu,
  MenuOption,
  Nav,
  NavDropdown,
  NavLink,
  Panel,
  Search,
  SearchInput,
} from "./styles/header";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

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

Header.Avatar = function HeaderAvatar({ ...restProps }: ComponentProp) {
  return <Avatar {...restProps} />;
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
Header.Button = function HeaderButton({
  children,
  to,
  ...restProps
}: ComponentProp) {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(to)} {...restProps}>
      {children}
    </Button>
  );
};

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  handleSearch,
  ...restProps
}: HeaderSearchProp) {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <Search {...restProps}>
      <BsSearch
        onClick={() => setSearchActive((searchActive) => !searchActive)}
      />
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        onKeyDown={({ code }) => (code === "Enter" ? handleSearch() : null)}
        isActive={searchActive}
        placeholder="Type film or series title"
      />
    </Search>
  );
};

Header.Dropdown = function HeaderDropdown({
  children,
  ...restProps
}: ComponentProp) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Menu = function HeaderMenu({ children, ...restProps }: ComponentProp) {
  return <Menu {...restProps}>{children}</Menu>;
};

Header.MenuOption = function HeaderMenuOption({
  profile,
  children,
  ...restProps
}: ComponentProp) {
  return (
    <MenuOption {...restProps}>
      {profile && profile.avatar ? (
        <React.Fragment>
          <Avatar
            src={`/images/avatars/${profile.avatar}`}
            alt={`${profile.name} Avatar`}
            isOption
          />
          {profile.name}
        </React.Fragment>
      ) : (
        children
      )}
    </MenuOption>
  );
};
export default Header;
