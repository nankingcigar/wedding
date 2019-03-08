/*
 * @Author: Chao Yang
 * @Date: 2019-03-07 16:11:28
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-03-08 09:19:43
 */
import * as React from "react";
import { REACT_APP_VENDOR_IMAGE } from "../../../const/variable";

const MoreEventsSection = () => {
  return (
    <section id="more-events">
      <div className="container">
        {/* <!-- ROW-1 --> */}
        <div className="row">
          {/* <!-- SECTION TITLE --> */}
          <div className="col-md-offset-2 col-md-8 text-center">
            <div className="section-title animation fadeInUp">
              <h2>
                MORE
                <img src={REACT_APP_VENDOR_IMAGE + "/heart-icon.png"} alt="" />
                EVENTS
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
        </div>
        {/* <!-- END of ROW-1 --> */}
        {/* <!-- ROW-2 --> */}
        <div className="row">
          <div className="col-md-12">
            {/* <!-- EVENTS CAROUSEL --> */}
            <div id="events-carousel" className="owl-carousel">
              {/* <!-- ITEM-1 --> */}
              <div className="item">
                {/* <!--PHOTO-ITEM--> */}
                <div className="photo-item animation fadeIn">
                  {/* <!--PHOTO--> */}
                  <img
                    src={ REACT_APP_VENDOR_IMAGE + "/event-1.jpg"}
                    alt=""
                    className="hover-animation image-zoom-in"
                  />
                  {/* <!--PHOTO OVERLAY--> */}
                  <div className="layer wh100 hidden-black-overlay hover-animation fade-in" />
                  {/* <!--END of PHOTO OVERLAY--> */}
                  {/* <!--ICON LINK--> */}
                  <div className="layer wh100 hidden-link hover-animation delay1 fade-in">
                    <div className="alignment">
                      <div className="v-align center-middle">
                        <a
                          href={REACT_APP_VENDOR_IMAGE + "/event-1.jpg"}
                          className="magnific-zoom"
                          title="event-1"
                        >
                          <div className="de-icon circle light medium-size inline">
                            <i className="de-icon-zoom-in" />
                          </div>
                        </a>
                        <a href="#">
                          <div className="de-icon circle light medium-size inline">
                            <i className="de-icon-link" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!--END of ICON LINK--> */}
                </div>
                {/* <!--END of PHOTO-ITEM--> */}
                {/* <!-- TITLE & EXCERPT --> */}
                <div className="title-excerpt animation fadeIn">
                  <h3>
                    <a href="#">DANCING PARTY</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce urna urna, imperdiet et purus ut, ultricies
                    sollicitudin arcu. Cras placerat, arcu non faucibus
                    suscipit, ex arcu consectetur enim.
                  </p>
                </div>
                {/* <!-- END of TITLE & EXCERPT --> */}
              </div>
              {/* <!--END of ITEM-1--> */}
              {/* <!-- ITEM-2 --> */}
              <div className="item">
                {/* <!--PHOTO-ITEM--> */}
                <div className="photo-item animation fadeIn">
                  {/* <!--PHOTO--> */}
                  <img
                    src={REACT_APP_VENDOR_IMAGE + "/event-2.jpg"}
                    alt=""
                    className="hover-animation image-zoom-in"
                  />
                  {/* <!--PHOTO OVERLAY--> */}
                  <div className="layer wh100 hidden-black-overlay hover-animation fade-in" />
                  {/* <!--END of PHOTO OVERLAY--> */}
                  {/* <!--ICON LINK--> */}
                  <div className="layer wh100 hidden-link hover-animation delay1 fade-in">
                    <div className="alignment">
                      <div className="v-align center-middle">
                        <a
                          href={REACT_APP_VENDOR_IMAGE + "/event-2.jpg"}
                          className="magnific-zoom"
                          title="event-2"
                        >
                          <div className="de-icon circle light medium-size inline">
                            <i className="de-icon-zoom-in" />
                          </div>
                        </a>
                        <a href="#">
                          <div className="de-icon circle light medium-size inline">
                            <i className="de-icon-link" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!--END of ICON LINK--> */}
                </div>
                {/* <!--END of PHOTO-ITEM--> */}
                {/* !-- TITLE & EXCERPT --> */}
                <div className="title-excerpt animation fadeIn">
                  <h3>
                    <a href="#">FLOWER AND FLOWER</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce urna urna, imperdiet et purus ut, ultricies
                    sollicitudin arcu. Cras placerat, arcu non faucibus
                    suscipit, ex arcu consectetur enim.
                  </p>
                </div>
                {/* <!-- END of TITLE & EXCERPT --> */}
              </div>
              {/* <!--END of ITEM-2--> */}
              {/* <!-- ITEM-3 --> */}
              <div className="item">
                {/* <!--PHOTO-ITEM--> */}
                <div className="photo-item animation fadeIn">
                  {/* <!--PHOTO--> */}
                  <img
                    src={REACT_APP_VENDOR_IMAGE + "/event-3.jpg"}
                    alt=""
                    className="hover-animation image-zoom-in"
                  />
                  {/* <!--PHOTO OVERLAY--> */}
                  <div className="layer wh100 hidden-black-overlay hover-animation fade-in" />
                  {/* <!--END of PHOTO OVERLAY--> */}
                  {/* <!--ICON LINK--> */}
                  <div className="layer wh100 hidden-link hover-animation delay1 fade-in">
                    <div className="alignment">
                      <div className="v-align center-middle">
                        <a
                          href={REACT_APP_VENDOR_IMAGE + "/event-3.jpg"}
                          className="magnific-zoom"
                          title="event-3"
                        >
                          <div className="de-icon circle light medium-size inline">
                            <i className="de-icon-zoom-in" />
                          </div>
                        </a>
                        <a href="#">
                          <div className="de-icon circle light medium-size inline">
                            <i className="de-icon-link" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!--END of ICON LINK--> */}
                </div>
                {/* <!--END of PHOTO-ITEM--> */}
                {/* <!-- TITLE & EXCERPT --> */}
                <div className="title-excerpt animation fadeIn">
                  <h3>
                    <a href="#">FOOD TRUCK DINNER</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce urna urna, imperdiet et purus ut, ultricies
                    sollicitudin arcu. Cras placerat, arcu non faucibus
                    suscipit, ex arcu consectetur enim.
                  </p>
                </div>
                {/* <!-- END of TITLE & EXCERPT --> */}
              </div>
              {/* <!--END of ITEM-3--> */}
            </div>
            {/* <!--END of EVENTS CAROUSEL--> */}
          </div>
        </div>
        {/* <!--END of ROW-2--> */}
      </div>
    </section>
  );
};

export default MoreEventsSection;
