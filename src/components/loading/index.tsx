import React from "react";
import { LockBody, Picture, ReleaseBody, Spinner } from "./styles/loading";
import { ComponentProp } from "../../types/AllTypes";

const Loading = ({ src, ...restProps }: ComponentProp) => {
  return (
    <>
      <Spinner {...restProps}>
        <LockBody />
        <Picture src={`/images/avatars/${src}`} />
      </Spinner>
    </>
  );
};

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};

export default Loading;
