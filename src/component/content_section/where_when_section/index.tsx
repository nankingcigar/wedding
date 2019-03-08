/*
 * @Author: Chao Yang
 * @Date: 2019-03-04 16:48:53
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-03-08 09:13:09
 */
import * as React from "react";
import "./index.less";

const WhereWhenSection = () => {
  return (
    <section id="where-when">
      <div className="container">
        {/* <!-- ROW-1 --> */}
        <div className="row">
          {/* <!-- SECTION TITLE --> */}
          <div className="col-md-offset-2 col-md-8 text-center">
            <div className="section-title animation fadeInUp">
              <h2>
                WHERE
                <span className="and">&amp;</span>
                WHERE
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ultrices malesuada ante quis pharetra. Nullam notn bibendum
                dolor. Ut vel turpis accumsan, efficitur dolor fermentum,
                tincidunt metus. Etiam ut ultrices nibh. Etiam aliquam mauris
                non hendrerit faucibus. Proin pulvinar congue ex, vitae
              </p>
            </div>
          </div>
          {/* <!-- END of SECTION TITLE --> */}
        </div>
        {/* <!-- END of ROW-1 --> */}
        {/* <!-- ROW-2 --> */}
        <div className="row">
          {/* <!-- SECTION TITLE --> */}
          <div className="col-md-12 text-center">
            <div className="banner-text dark full animation fadeIn">
              <div className="row">
                <div className="col-md-4">
                  <h3>JULY / 20TH / 2019</h3>
                </div>
                <div className="col-md-4">
                  <div className="border-column">
                    <h3>FIVE THIRTY IN THE EVENING</h3>
                  </div>
                </div>
                <div className="col-md-4">
                  <h3>JINLING LIYANG PALACE</h3>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- END of SECTION TITLE --> */}
        </div>
        {/* <!-- END of ROW-2 --> */}
        {/* <!-- ROW-3 --> */}
        <div className="row">
          <div className="col-md-6 animation fadeIn">
            <div className="de-icon circle small-size inline de-icon-1">
              <i className="de-icon-bell-alt" />
            </div>
            <h3 className="inline">CEREMONY</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ultrices malesuada ante quis pharetra. Nullam non bibendum dolor.
              Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt
              metus. Etiam ut ultrices nibh. Etiam aliquam mauris non hendrerit
              faucibus. Proin pulvinar congue
            </p>
            <div className="de-icon circle small-size inline de-icon-2">
              <i className="de-icon-food" />
            </div>
            <h3 className="inline">RECEPTION</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ultrices malesuada ante quis pharetra. Nullam non bibendum dolor.
              Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt
              metus. Etiam ut ultrices nibh. Etiam aliquam mauris non hendrerit
              faucibus. Proin pulvinar congue
            </p>
            <div className="de-icon circle small-size inline de-icon-3">
              <i className="de-icon-home-1" />
            </div>
            <h3 className="inline">ACCOMODATION</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ultrices malesuada ante quis pharetra. Nullam non bibendum dolor.
              Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt
              metus. Etiam ut ultrices nibh. Etiam aliquam mauris non hendrerit
              faucibus. Proin pulvinar congue
            </p>
          </div>
          <div className="col-md-6 animation fadeIn">
            <div id="map-canvas" />
          </div>
        </div>
        {/* <!-- END of ROW-3 --> */}
      </div>
    </section>
  );
};

export default WhereWhenSection;
