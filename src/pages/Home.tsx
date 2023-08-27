import { useState } from "react";
import HeaderContainer from "../containers/header";
import BannerContainer from "../containers/banner";
import FeatureContainer from "../containers/feature";
import FooterContainer from "../containers/footer";
import FaqsContainer from "../containers/faqs";
import Scrollbar from "react-custom-scrollbars-2";

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
    <Scrollbar
      className="main-scrollbar"
      onScroll={({ scrollTop }: any) => handleOnScroll(scrollTop)}
    >
      <HeaderContainer isHeaderShown={isHeaderShown} />
      <BannerContainer />
      <FeatureContainer />
      <FaqsContainer />
      <FooterContainer />
    </Scrollbar>
  );
}

export default Home;
