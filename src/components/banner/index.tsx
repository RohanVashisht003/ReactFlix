import { ComponentProp } from "../../types/AllTypes";
import { Container, Inner, SubTitle, Title } from "./styles/banner";

function Banner({ children, ...restProps }: ComponentProp) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}
Banner.Title = function BannerTitle({ children, ...restProps }: ComponentProp) {
  return <Title {...restProps}>{children}</Title>;
};

Banner.SubTitle = function BannerSubTitle({
  children,
  ...restProps
}: ComponentProp) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
export default Banner;
