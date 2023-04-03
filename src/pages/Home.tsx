import React, { useState } from "react";
import { Scrollbar } from "react-scrollbars-custom";
import HeaderContainer from "../containers/header";
import BannerContainer from "../containers/banner";
import FeatureContainer from "../containers/feature";
import FooterContainer from "../containers/footer";

function Home() {
  const [isHeaderShown, setHeaderShown] = useState(false);

  const handleOnScroll = (scrollTop: number) => {
    if (scrollTop > 100 && !isHeaderShown) {
      setHeaderShown(true);
    } else if (scrollTop <= 100 && isHeaderShown) {
      setHeaderShown(false);
    }
  };
  return (
    <>
      <HeaderContainer isHeaderShown={isHeaderShown} />
      <BannerContainer />
      <FeatureContainer />
      <FooterContainer />
    </>
  );
}

export default Home;
