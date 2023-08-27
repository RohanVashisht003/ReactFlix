import React, { useState } from "react";
import { Header } from "../components";
import { ROUTES } from "../constants/routes";
import { useUser } from "../context/UserContext";
import logoImg from "../images/branding/netflix_logo.png";
import { Profile, ShowOverview } from "../types/AllTypes";
import { HEADER_LINKS } from "../constants/constants";
import { SECTIONS } from "../api/movieEndpoints";
import movieHttp from "../api/movie";

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

  const handleSearch = () => {
    if (setSearchResult) {
      if (searchTerm) {
        const endPoint =
          category === "series"
            ? SECTIONS.series.helpers.searchTV.replace("{{query}}", searchTerm)
            : SECTIONS.movies.helpers.searchMovie.replace(
                "{{query}}",
                searchTerm
              );
        movieHttp
          .get(endPoint)
          .then(({ data }: any) => {
            data.results.sort((a: ShowOverview, b: ShowOverview) =>
              a.popularity > b.popularity
                ? -1
                : b.popularity > a.popularity
                ? 1
                : 0
            );
            setSearchResult(data.results);
          })
          .catch((e: any) => console.log(e));
      } else {
        setSearchResult();
      }
    }
  };
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

  const handleChangeProfile = (profile?: Profile) => {
    setSearchResult && setSearchResult();
    setHeroTrailer && setHeroTrailer();
    setProfile && setProfile(profile);
  };

  const signOut = () => {
    localStorage.clear();
    setUserDetails(undefined);
  };

  return (
    <>
      <Header className={isHeaderShown ? "opaque" : ""}>
        <Header.Panel>
          <Header.Logo
            className={!userDetails ? "large" : ""}
            src={logoImg}
            alt="Roseflix Logo"
            to={ROUTES.HOME.path}
          />
          {!logoOnly && userDetails && (
            <Header.Nav>{renderNavLinks()}</Header.Nav>
          )}
        </Header.Panel>
        <Header.Panel>
          {!logoOnly &&
            (userDetails ? (
              <React.Fragment>
                <Header.Search
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  handleSearch={handleSearch}
                />
                <Header.Dropdown>
                  {profile && (
                    <Header.Avatar
                      src={`/images/avatars/${profile.avatar}`}
                      alt="User Avatar"
                    />
                  )}
                </Header.Dropdown>
                <Header.Menu>
                  {userDetails.profiles &&
                    userDetails.profiles.map((profile) => (
                      <Header.MenuOption
                        key={`${profile._id}_option`}
                        profile={profile}
                        onClick={() => handleChangeProfile(profile)}
                      />
                    ))}
                  <Header.MenuOption
                    className="no-img"
                    onClick={() => handleChangeProfile()}
                  >
                    Manage Profiles
                  </Header.MenuOption>
                  <Header.MenuOption
                    className="no-img"
                    onClick={() => signOut()}
                  >
                    Sign out of Netflix
                  </Header.MenuOption>
                </Header.Menu>
              </React.Fragment>
            ) : (
              <Header.Button to={ROUTES.SIGNIN.path}>Sign In</Header.Button>
            ))}
        </Header.Panel>
      </Header>
    </>
  );
}

export default HeaderContainer;
