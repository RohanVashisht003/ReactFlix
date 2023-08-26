import React from "react";
import Collapsible from "../components/collapsible";
import { FAQS } from "../constants/constants";

const FaqsContainer = () => {
  return (
    <>
      <Collapsible>
        <Collapsible.Title>Frequently Asked Questions</Collapsible.Title>
        {FAQS.map(({ id, header, body }) => (
          <Collapsible.Item key={id} id={id}>
            <Collapsible.Header id={id}>{header}</Collapsible.Header>
            <Collapsible.Body id={id}>{body}</Collapsible.Body>
          </Collapsible.Item>
        ))}
      </Collapsible>
    </>
  );
};

export default FaqsContainer;
