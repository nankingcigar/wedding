/*
 * @Author: Chao Yang 
 * @Date: 2019-02-26 10:23:25 
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-02-28 15:34:29
 */
import * as React from 'react';
import './App.css';
import { 
  ContentSection,
  Footer,
  MainSlider, 
  PreLoader
} from './component';

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
