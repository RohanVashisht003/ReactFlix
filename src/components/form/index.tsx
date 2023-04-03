import { ComponentProp } from "../../types/AllTypes";
import { Container, Inner, Title } from "./styles/form";

function Form({ children, ...restProps }: ComponentProp) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Form.Title = function FormTitle({ children, ...restProps }: ComponentProp) {
  return <Title {...restProps}>{children}</Title>;
};


export default Form;
