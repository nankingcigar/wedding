/*
 * @Author: Chao Yang
 * @Date: 2019-02-26 12:10:36
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-03-08 09:13:37
 */
import * as React from "react";

import "./index.less";

const MainSliderImage = () => {
  return (
    <ul className="slides">
      <li>
        <div data-stellar-ratio="0.5" className="slide-image" />
        <div className="slide-overlay" />
      </li>
    </ul>
  );
};

export default MainSliderImage;
