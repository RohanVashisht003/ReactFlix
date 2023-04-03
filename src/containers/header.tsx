import React, { useState } from "react";
import { Header } from "../components";
import { ROUTES } from "../constants/routes";
import { useUser } from "../context/UserContext";
import logoImg from "../images/branding/netflix_logo.png";
import { Profile, ShowOverview } from "../types/AllTypes";
import { HEADER_LINKS } from "../constants/constants";
type HeaderContainerType = {
  logoOnly?: boolean;
  profile?: Profile;
  setProfile?: (profile?: Profile) => void;
  category?: string;
  setCategory?: (category: string) => void;
  isHeaderShown?: boolean;
  setSearchResult?: (results?: Array<ShowOverview> | null) => void;
  setHeroTrailer?: (heroTrailer?: string | null | undefined) => void;
};
function HeaderContainer({
  logoOnly,
  profile,
  setProfile,
  isHeaderShown,
  setSearchResult,
  setHeroTrailer,
  category,
  setCategory,
}: HeaderContainerType) {
  const { userDetails, setUserDetails } = useUser();
  const [searchTerm, setSearchTerm] = useState("");

  const renderNavLinks = () => {
    return window.innerWidth <= 600 ? (
      <React.Fragment>
        <Header.NavDropdown
          options={HEADER_LINKS}
          setCategory={setCategory}
          category={category}
        />
      </React.Fragment>
    ) : (
      HEADER_LINKS.map(({ title, value }) => (
        <Header.NavLink
          key={`${value}_navlink`}
          isSelected={category === value}
          onCLick={() => setCategory && setCategory(value)}
        >
          {title}
        </Header.NavLink>
      ))
    );
  };
  return (
    <>
      <Header>
        <Header.Panel>
          <Header.Logo
            className={!userDetails ? "large" : ""}
            src={`${logoImg}`}
            alt="Roseflix Logo"
            to={ROUTES.HOME.path}
          />
          {!logoOnly && userDetails && (
            <Header.Nav>{renderNavLinks()}</Header.Nav>
          )}
        </Header.Panel>
      </Header>
    </>
  );
}

export default HeaderContainer;
