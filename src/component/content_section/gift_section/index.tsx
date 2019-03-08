/*
 * @Author: Chao Yang
 * @Date: 2019-03-08 09:37:24
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-03-08 10:03:52
 */
import * as React from "react";
import { REACT_APP_VENDOR_IMAGE } from "../../../const/variable";

const GiftSection = () => {
  return (
    <section id="gift-section">
      <div className="container">
        {/* <!-- ROW-1 --> */}
        <div className="row">
          {/* <!-- SECTION TITLE --> */}
          <div className="col-md-offset-2 col-md-8 text-center">
            <div className="section-title animation fadeInUp">
              <h2>GIFT REGISTRY</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ultrices malesuada ante quis pharetra. Nullam notn bibendum
                dolor. Ut vel turpis accumsan, efficitur dolor fermentum,
                tincidunt metus. Etiam ut ultrices nibh. Etiam aliquam mauris
                non hendrerit faucibus. Proin pulvinar congue ex, vitae
              </p>
            </div>
          </div>
        </div>
        {/* <!-- END of ROW-1 --> */}
        {/* <!-- ROW-1 --> */}
        <div className="row">
          <div className="col-md-offset-1 col-md-10 text-center">
            <div id="registry-logo" className="owl-carousel">
              <div className="item">
                <a href="#">
                  <img
                    src={REACT_APP_VENDOR_IMAGE + "/gift-registry-1a.png"}
                    alt=""
                  />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img
                    src={REACT_APP_VENDOR_IMAGE + "/gift-registry-2a.png"}
                    alt=""
                  />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img
                    src={REACT_APP_VENDOR_IMAGE + "/gift-registry-3a.png"}
                    alt=""
                  />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img
                    src={REACT_APP_VENDOR_IMAGE + "/gift-registry-1a.png"}
                    alt=""
                  />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img
                    src={REACT_APP_VENDOR_IMAGE + "/gift-registry-2a.png"}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END of ROW-1 --> */}
    </section>
  );
};

export default GiftSection;
