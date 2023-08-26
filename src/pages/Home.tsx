import { useState } from "react";
import HeaderContainer from "../containers/header";
import BannerContainer from "../containers/banner";
import FeatureContainer from "../containers/feature";
import FooterContainer from "../containers/footer";
import FaqsContainer from "../containers/faqs";

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
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

export default Home;
