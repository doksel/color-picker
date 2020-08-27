import React from "react";

import {WrapModal} from "./styles";

const Loader: React.FC = ({children}) => (
      <WrapModal>{children}</WrapModal>
);

export default Loader;