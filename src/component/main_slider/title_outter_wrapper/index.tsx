/*
 * @Author: Chao Yang 
 * @Date: 2019-02-26 12:03:40 
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-02-26 12:16:01
 */
import * as React from 'react';

const MainSliderTitleOutterWrapper = () => {
    return (
        <div className="slide-title-outter-wrapper">
            {/* <!-- MAIN SLIDER TITLE INNER WRAPPER --> */}
            <div className="slide-title-inner-wrapper">
                {/* <!-- TITLE 2 --> */}
                <div className="slide-title align-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-offset-3 col-md-6 animation delay1 fadeInUp">
                                <div id="invited">
                                    You're Invited.
                                </div>
                                <div className="banner-text withlove medium light">
                                    <h1>WE ARE GETTING MARRIED</h1>
                                </div>
                                <div id="banner-date">
                                    - JULY / 20TH / 2019 -
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- END of TITLE 2 --> */}
            </div>
            {/* <!-- END of MAIN SLIDER TITLE INNER WRAPPER --> */}
        </div>
    );
};

export default MainSliderTitleOutterWrapper;