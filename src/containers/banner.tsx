import React from "react";
import Banner from "../components/banner";

function BannerContainer() {
  return (
    <>
      <Banner>
        <Banner.Title>Unlimited movies, TV shows, and more.</Banner.Title>
        <Banner.SubTitle>Watch anywhere. Cancel anytime.</Banner.SubTitle>
      </Banner>
    </>
  );
}

export default BannerContainer;
