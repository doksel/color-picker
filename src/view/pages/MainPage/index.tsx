import React from 'react';

import ColorPicker from "../../components/ColorPicker";
import {defaultColors} from "../../../helpers/values";

const MainPage: React.FC = () => {
  const onChange = () => {
    console.log("onChange")
  }

  return (
    <div>
      <ColorPicker
        colors={defaultColors}
        value="#000000"
        onChange={onChange}
      />
    </div>
  );
}

export default MainPage;
