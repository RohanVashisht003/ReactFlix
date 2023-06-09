import styled from "styled-components";

type NavLinkProps = {
  readonly isSelected: boolean;
};
export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  place-items: center;
  z-index: 2;
  background: linear-gradient(rgba(20, 20, 20, 0.7), rgba(20, 20, 20, 0));
  transition-timing-function: ease-in;
  transition: all 0.5s;

  &.opaque {
    background: #141414;
  }
`;

export const Panel = styled.div`
  display: flex;
  align-items: center;
`;

export const Nav = styled.div`
  display: inline-block;
  font-size: 0.85rem;
  align-self: center;

  @media (max-width: 700px) {
    font-size: 0.65rem;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  background-color: #141414;
  color: #fff;
  outline: none;
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 0.75rem;
  transition: color 0.4s;
  cursor: pointer;
  font-weight: ${({ isSelected }: NavLinkProps) => (isSelected ? 800 : 400)};
  &:hover {
    color: #b3b3b3;
  }

  @media (max-width: 700px) {
    margin: 0 0.5rem;
  }
`;

export const NavDropdown = styled.select`
  min-width: 4rem;
  padding: 0.35rem;
  background-color: rgb(36, 36, 36);
`;

export const Logo = styled.img`
  width: 8rem;
  margin: 0.5rem 2rem 0m5rem 3rem;
`;
