/*
 * @Author: Chao Yang 
 * @Date: 2019-02-26 17:07:59 
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-02-26 17:37:41
 */
import * as React from 'react';

import './index.less';

const MainSliderNavigation = () => {
    return (
        <header id="nav-header">
            <nav id="nav-bar" className="bottom-bar outside fluid-width block-color nav-center sticky-nav animation fadeIn">
                <div id="nav-wrapper">
                    {/* <!-- LOGO --> */}
                    <div className="logo-wrapper">
                        {/* <!-- CSS LOGO -->  */}
                            <a href="index.html">
                                <div className="css-logo rounded">
                                    <div className="css-logo-text">
                                        <strong className="strong1">
                                            J
                                        </strong>
                                        <i className="de-icon-heart-1" />
                                        <strong className="strong2">
                                            C
                                        </strong>
                                    </div>
                                </div>
                            </a>
                            {/*
                                <!-- IMG LOGO 
                                <div class="img-logo">
                                    <img src="images/slide1.jpg">
                                </div>-->
                            */}
                        {/* <!-- END of CSS LOGO -->  */}
                    </div>
                    {/* <!-- END of LOGO --> */}
                    <div id="mobile-nav">
                        <i className="de-icon-menu" />
                    </div>
                    <ul id="nav-menu" className="nav-smooth-scroll">
                        <li className="first-child">
                            <a href="#main-slider">
                                HOME
                            </a>
                        </li>
                        <li>
                            <a href="#our-story">
                                STORY
                            </a>
                        </li>
                        <li>
                            <a href="#where-when">
                                WHERE &amp; WHEN
                            </a>
                        </li>
                        <li>
                            <a href="#gallery-section">
                                GALLERY
                            </a>
                        </li>
                        <li className="first-child split-margin">
                            <a href="#more-events">
                                EVENTS
                            </a>
                        </li>
                        <li>
                            <a href="#groomsmen-section">
                                GROOMSMEN
                            </a>
                        </li>
                        <li>
                            <a href="#bridesmaid-section">
                                BRIDESMAID
                            </a>
                        </li>
                        <li>
                            <a href="#rsvp-section">
                                RSVP
                            </a>
                        </li>
                    </ul>
                    <div className="clearboth" />
                </div>
            </nav>
        </header>
    );
};

export default MainSliderNavigation;