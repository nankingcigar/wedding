/*
 * @Author: Chao Yang 
 * @Date: 2019-02-26 10:23:25 
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-02-26 11:40:24
 */

import * as React from 'react';

import { 
  MainSlider, 
  PreLoader
} from './component';

import './App.css';

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
      </div>
    );
  }
}

export default App;
