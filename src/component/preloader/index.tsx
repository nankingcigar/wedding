/*
 * @Author: Chao Yang 
 * @Date: 2019-02-26 10:23:17 
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-02-26 10:24:36
 */
import * as React from 'react';

const PreLoader = () => {
    return (
        <div id="preloader">
            <div className="alignment">
                <div className="v-align center-middle">
                    {/* <!--LEFT HEART--> */}
                    <div className="heart-animation">
                        <i className="de-icon-heart" />
                    </div>
                    {/* <!--RIGHT HEART--> */}
                    <div className="heart-animation-reverse">
                        <i className="de-icon-heart" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreLoader;