import React, { createContext, useContext, useState } from "react";
import { ComponentProp } from "../../types/AllTypes";
import {
  Body,
  Container,
  Header,
  Inner,
  Item,
  Title,
} from "./styles/collapsible";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";

type CollapsibleContextType = {
  selected: number;
  setSelected: (userDetails: number) => void;
};

type CollapsibleProp = {
  children: any;
  id: number;
  [x: string]: any;
};

const CollapsibleContext = createContext<CollapsibleContextType>({
  selected: -1,
  setSelected: () => {},
});
const Collapsible = ({ children, ...restProps }: ComponentProp) => {
  const [selected, setSelected] = useState(-1);
  return (
    <>
      <CollapsibleContext.Provider value={{ selected, setSelected }}>
        <Container {...restProps}>
          <Inner>{children}</Inner>
        </Container>
      </CollapsibleContext.Provider>
    </>
  );
};
Collapsible.Title = function CollapsibleTitle({
  children,
  ...restProps
}: ComponentProp) {
  return <Title {...restProps}>{children}</Title>;
};

Collapsible.Item = function CollapsibleItem({
  children,
  id,
  ...restProps
}: CollapsibleProp) {
  const { selected, setSelected } = useContext(CollapsibleContext);
  return (
    <Item onClick={() => setSelected(selected === id ? -1 : id)} {...restProps}>
      {children}
    </Item>
  );
};

Collapsible.Header = function CollapsibleHeader({
  children,
  id,
  ...restProps
}: CollapsibleProp) {
  const { selected } = useContext(CollapsibleContext);
  return (
    <Header {...restProps}>
      {children}
      {selected === id ? <AiOutlineCloseCircle /> : <IoMdAddCircleOutline />}
    </Header>
  );
};

Collapsible.Body = function CollapsibleBody({
  children,
  id,
  ...restProps
}: CollapsibleProp) {
  const { selected } = useContext(CollapsibleContext);
  return (
    <Body
      className={selected === id ? "collapsible__Body--selected" : ""}
      {...restProps}
    >
      {children}
    </Body>
  );
};

export default Collapsible;
