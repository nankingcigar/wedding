/*
 * @Author: Chao Yang
 * @Date: 2019-03-08 09:15:02
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-03-08 16:45:55
 */
import * as React from "react";
import "./App.less";
import { ContentSection, Footer, MainSlider, PreLoader } from "./component";

class App extends React.Component {
  public render() {
    return (
      <div>
        {/* <!--PRELOADER--> */}
        <PreLoader />
        {/* <!--END of PRELOADER--> */}
        {/* <!--MAIN SLIDER--> */}
        <MainSlider />
        {/* <!--END of MAIN SLIDER--> */}
        {/* <!--CONTENT SECTION--> */}
        <ContentSection />
        {/* <!--END of CONTENT SECTION--> */}
        {/* <!--FOOTER--> */}
        <Footer />
        {/* <!--END of FOOTER--> */}
      </div>
    );
  }
}

export default App;
