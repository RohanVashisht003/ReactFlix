import { ComponentProp } from "../../types/AllTypes";
import {
  Button,
  Container,
  Inner,
  Input,
  Panel,
  Title,
} from "./styles/subscribe";

const Subscribe = ({ children, ...restProps }: ComponentProp) => {
  return (
    <>
      <Container {...restProps}>
        <Inner>{children}</Inner>
      </Container>
    </>
  );
};

Subscribe.Title = ({ children, ...restProps }: ComponentProp) => {
  return <Title {...restProps}>{children}</Title>;
};

Subscribe.Panel = ({ children, ...restProps }: ComponentProp) => {
  return <Panel {...restProps}>{children}</Panel>;
};
Subscribe.Input = ({ children, ...restProps }: ComponentProp) => {
  return <Input {...restProps}>{children}</Input>;
};
Subscribe.Button = ({ children, ...restProps }: ComponentProp) => {
  return <Button {...restProps}>{children}</Button>;
};

export default Subscribe;
