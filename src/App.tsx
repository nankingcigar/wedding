/*
 * @Author: Chao Yang 
 * @Date: 2019-02-26 10:23:25 
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-02-27 16:58:53
 */
import * as React from 'react';
import './App.css';
import { 
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
      </div>
    );
  }
}

export default App;
