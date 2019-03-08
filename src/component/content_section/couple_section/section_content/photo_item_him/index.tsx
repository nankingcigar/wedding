/*
 * @Author: Chao Yang
 * @Date: 2019-03-01 16:03:51
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-03-08 09:12:27
 */
import * as React from "react";
// import { REACT_APP_VENDOR_IMAGE } from '../../../../../const/variable';

const PhotoItem = () => {
  return (
    <div className="photo-item frame-border animation fadeInLeft">
      {/* <!--PHOTO--> */}
      {/* <img src={REACT_APP_VENDOR_IMAGE + '/him2.jpg'} alt="" className="hover-animation image-zoom-in" /> */}
      <img
        width="519"
        height="519"
        alt=""
        className="hover-animation image-zoom-in"
      />
      {/* <!--END of PHOTO--> */}
      {/* <!--PHOTO OVERLAY--> */}
      <div className="layer wh100 hidden-black-overlay hover-animation fade-in" />
      {/* <!--END of PHOTO OVERLAY--> */}
      {/* <!--ICON LINK--> */}
      <div className="layer wh100 hidden-link hover-animation delay1 fade-in">
        <div className="alignment">
          <div className="v-align center-middle">
            {/* <a href={REACT_APP_VENDOR_IMAGE + '/attachment-couple.jpg'} className="magnific-zoom"> */}
            <a className="magnific-zoom">
              <div className="de-icon circle light medium-size inline">
                <i className="de-icon-zoom-in" />
              </div>
            </a>
            <a className="magnific-ajax" href="him.html">
              <div className="de-icon circle light medium-size inline">
                <i className="de-icon-link" />
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* <!--END of ICON LINK--> */}
    </div>
  );
};

export default PhotoItem;
