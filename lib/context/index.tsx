import React from "react";

import PageContext from "./PageContext";
import PageCountContext from "./PageCountContext";

const ContextProvider = ({ children }) => {
  return (
    <PageContext>
      <PageCountContext>{children}</PageCountContext>
    </PageContext>
  );
};

export default ContextProvider;