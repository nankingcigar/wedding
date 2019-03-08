/*
 * @Author: Chao Yang
 * @Date: 2019-02-26 10:35:09
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-03-08 09:14:11
 */
import * as React from "react";

import MainSliderTitleOutterWrapper from "./title_outter_wrapper";

import MainSliderImage from "./images";

import MainSliderNavigation from "./navigation";

const MainSlider = () => {
  return (
    <section id="main-slider" className="flexslider fullscreen">
      {/* <!-- MAIN SLIDER TITLE OUTTER WRAPPER --> */}
      <MainSliderTitleOutterWrapper />
      {/* <!-- END of MAIN SLIDER TITLE OUTTER WRAPPER --> */}
      {/* <!-- MAIN SLIDER IMAGES --> */}
      <MainSliderImage />
      {/* <!-- END of MAIN SLIDER IMAGES --> */}
      {/* <!-- MAIN SLIDER NAVIGATION --> */}
      <MainSliderNavigation />
      {/* <!-- END of MAIN SLIDER NAVIGATION --> */}
    </section>
  );
};

export default MainSlider;
