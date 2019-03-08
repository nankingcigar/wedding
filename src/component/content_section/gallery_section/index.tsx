/*
 * @Author: Chao Yang
 * @Date: 2019-03-07 16:11:28
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-03-08 09:11:35
 */
import * as React from "react";
import { REACT_APP_VENDOR_IMAGE } from "../../../const/variable";

const GallerySection = () => {
  return (
    <section id="gallery-section">
      {/* <!-- ROW-1 --> */}
      <div className="row">
        {/*  <!-- SECTION TITLE --> */}
        <div className="col-md-offset-2 col-md-8 text-center">
          <div className="section-title animation fadeInUp">
            <h2>
              OUR
              <img src={REACT_APP_VENDOR_IMAGE + "/heart-icon.png"} alt="" />
              GALLERY
            </h2>
          </div>
        </div>
        {/*  <!-- END of SECTION TITLE --> */}
      </div>
      {/* <!-- END of ROW-1 --> */}
      <div className="row">
        {/*  <!--GALLERY-ITEM-1--> */}
        <div className="col-md-4">
          {/* <!--PHOTO-ITEM--> */}
          <div className="photo-item frame-border animation fadeIn">
            {/* <!--PHOTO--> */}
            <img
              src={REACT_APP_VENDOR_IMAGE + "/gallery-1.jpg"}
              alt=""
              className="hover-animation image-zoom-rotate"
            />
            {/* <!--END of PHOTO--> */}
            {/* <!--PHOTO OVERLAY--> */}
            <div className="layer wh100 hidden-black-overlay hover-animation fade-in" />
            {/* <!--END of PHOTO OVERLAY--> */}
            {/* <!--ICON LINK--> */}
            <div className="layer wh100 hidden-link hover-animation delay1 fade-in">
              <div className="alignment">
                <div className="v-align center-middle">
                  <a
                    href={REACT_APP_VENDOR_IMAGE + "/attachment-1.jpg"}
                    className="magnific-zoom-gallery"
                    title="Attachment-1"
                  >
                    <div className="de-icon circle light medium-size inline">
                      <i className="de-icon-zoom-in" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* <!--END of ICON LINK--> */}
          </div>
          {/* <!--END of PHOTO-ITEM--> */}
        </div>
        {/*  <!--END of GALLERY-ITEM-1--> */}
        {/*  <!--GALLERY-ITEM-2--> */}
        <div className="col-md-4">
          {/*  <!--PHOTO-ITEM--> */}
          <div className="photo-item frame-border animation fadeIn">
            {/*  <!--PHOTO--> */}
            <img
              src={REACT_APP_VENDOR_IMAGE + "/gallery-2.jpg"}
              alt=""
              className="hover-animation image-zoom-rotate"
            />
            {/*  <!--END of PHOTO--> */}
            {/*  <!--PHOTO OVERLAY--> */}
            <div className="layer wh100 hidden-black-overlay hover-animation fade-in" />
            {/*  <!--END of PHOTO OVERLAY--> */}
            {/*  <!--ICON LINK--> */}
            <div className="layer wh100 hidden-link hover-animation delay1 fade-in">
              <div className="alignment">
                <div className="v-align center-middle">
                  <a
                    href={REACT_APP_VENDOR_IMAGE + "/attachment-2.jpg"}
                    className="magnific-zoom-gallery"
                    title="Attachment-2"
                  >
                    <div className="de-icon circle light medium-size inline">
                      <i className="de-icon-zoom-in" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/*  <!--END of ICON LINK--> */}
          </div>
          {/*  <!--END of PHOTO-ITEM-->   */}
        </div>
        {/*  <!--END of GALLERY-ITEM-2--> */}
        {/*  <!--GALLERY-ITEM-3--> */}
        <div className="col-md-4">
          {/*  <!--PHOTO-ITEM--> */}
          <div className="photo-item frame-border animation fadeIn">
            {/*  <!--PHOTO--> */}
            <img
              src={REACT_APP_VENDOR_IMAGE + "/gallery-3.jpg"}
              alt=""
              className="hover-animation image-zoom-rotate"
            />
            {/*  <!--PHOTO OVERLAY--> */}
            <div className="layer wh100 hidden-black-overlay hover-animation fade-in" />
            {/*  <!--END of PHOTO OVERLAY--> */}
            {/*  <!--ICON LINK--> */}
            <div className="layer wh100 hidden-link hover-animation delay1 fade-in">
              <div className="alignment">
                <div className="v-align center-middle">
                  <a
                    href={REACT_APP_VENDOR_IMAGE + "/attachment-3.jpg"}
                    className="magnific-zoom-gallery"
                    title="Attachment-3"
                  >
                    <div className="de-icon circle light medium-size inline">
                      <i className="de-icon-zoom-in" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/*  <!--END of ICON LINK--> */}
          </div>
          {/*  <!--END of PHOTO-ITEM--> */}
        </div>
        {/* <!--END of GALLERY-ITEM-3--> */}
        {/* <!--GALLERY-ITEM-4--> */}
        <div className="col-md-4">
          {/* <!--PHOTO-ITEM--> */}
          <div className="photo-item frame-border animation fadeIn">
            {/* <!--PHOTO--> */}
            <img
              src={REACT_APP_VENDOR_IMAGE + "/gallery-4.jpg"}
              alt=""
              className="hover-animation image-zoom-rotate"
            />
            {/* <!--PHOTO OVERLAY--> */}
            <div className="layer wh100 hidden-black-overlay hover-animation fade-in" />
            {/* <!--END of PHOTO OVERLAY--> */}
            {/* <!--ICON LINK--> */}
            <div className="layer wh100 hidden-link hover-animation delay1 fade-in">
              <div className="alignment">
                <div className="v-align center-middle">
                  <a
                    href={REACT_APP_VENDOR_IMAGE + "/attachment-4.jpg"}
                    className="magnific-zoom-gallery"
                    title="Attachment-4"
                  >
                    <div className="de-icon circle light medium-size inline">
                      <i className="de-icon-zoom-in" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* <!--END of ICON LINK--> */}
          </div>
          {/* <!--END of PHOTO-ITEM--> */}
        </div>
        {/* <!--END of GALLERY-ITEM-4--> */}
        {/* <!--GALLERY-ITEM-5--> */}
        <div className="col-md-4">
          {/* <!--PHOTO-ITEM--> */}
          <div className="photo-item frame-border animation fadeIn">
            {/* <!--PHOTO--> */}
            <img
              src={REACT_APP_VENDOR_IMAGE + "/gallery-5.jpg"}
              alt=""
              className="hover-animation image-zoom-rotate"
            />
            {/* <!--PHOTO OVERLAY--> */}
            <div className="layer wh100 hidden-black-overlay hover-animation fade-in" />
            {/* <!--END of PHOTO OVERLAY--> */}
            {/* <!--ICON LINK--> */}
            <div className="layer wh100 hidden-link hover-animation delay1 fade-in">
              <div className="alignment">
                <div className="v-align center-middle">
                  <a
                    href={REACT_APP_VENDOR_IMAGE + "/attachment-5.jpg"}
                    className="magnific-zoom-gallery"
                    title="Attachment-5"
                  >
                    <div className="de-icon circle light medium-size inline">
                      <i className="de-icon-zoom-in" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* <!--END of ICON LINK--> */}
          </div>
          {/* <!--END of PHOTO-ITEM--> */}
        </div>
        {/* <!--END of GALLERY-ITEM-5--> */}
        {/* <!--GALLERY-ITEM-6--> */}
        <div className="col-md-4">
          {/* <!--PHOTO-ITEM--> */}
          <div className="photo-item frame-border animation fadeIn">
            {/* <!--PHOTO--> */}
            <img
              src={REACT_APP_VENDOR_IMAGE + "/gallery-6.jpg"}
              alt=""
              className="hover-animation image-zoom-rotate"
            />
            {/* <!--PHOTO OVERLAY--> */}
            <div className="layer wh100 hidden-black-overlay hover-animation fade-in" />
            {/* <!--END of PHOTO OVERLAY--> */}
            {/* <!--ICON LINK--> */}
            <div className="layer wh100 hidden-link hover-animation delay1 fade-in">
              <div className="alignment">
                <div className="v-align center-middle">
                  <a
                    href={REACT_APP_VENDOR_IMAGE + "/attachment-6.jpg"}
                    className="magnific-zoom-gallery"
                    title="Attachment-6"
                  >
                    <div className="de-icon circle light medium-size inline">
                      <i className="de-icon-zoom-in" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* <!--END of ICON LINK--> */}
          </div>
          {/* <!--END of PHOTO-ITEM--> */}
        </div>
        {/* <!--END of GALLERY-ITEM-6--> */}
        {/* <!--GALLERY-ITEM-7--> */}
        <div className="col-md-4">
          {/* <!--PHOTO-ITEM--> */}
          <div className="photo-item frame-border animation fadeIn">
            {/* <!--PHOTO--> */}
            <img
              src={REACT_APP_VENDOR_IMAGE + "/gallery-7.jpg"}
              alt=""
              className="hover-animation image-zoom-rotate"
            />
            {/* <!--PHOTO OVERLAY--> */}
            <div className="layer wh100 hidden-black-overlay hover-animation fade-in" />
            {/* <!--END of PHOTO OVERLAY--> */}
            {/* <!--ICON LINK--> */}
            <div className="layer wh100 hidden-link hover-animation delay1 fade-in">
              <div className="alignment">
                <div className="v-align center-middle">
                  <a
                    href={REACT_APP_VENDOR_IMAGE + "/attachment-7.jpg"}
                    className="magnific-zoom-gallery"
                    title="Attachment-7"
                  >
                    <div className="de-icon circle light medium-size inline">
                      <i className="de-icon-zoom-in" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* <!--END of ICON LINK--> */}
          </div>
          {/* <!--END of PHOTO-ITEM--> */}
        </div>
        {/* <!--END of GALLERY-ITEM-7--> */}
        {/* <!--GALLERY-ITEM-8--> */}
        <div className="col-md-4">
          {/* <!--PHOTO-ITEM--> */}
          <div className="photo-item frame-border animation fadeIn">
            {/* <!--PHOTO--> */}
            <img
              src={REACT_APP_VENDOR_IMAGE + "/gallery-8.jpg"}
              alt=""
              className="hover-animation image-zoom-rotate"
            />
            {/* <!--PHOTO OVERLAY--> */}
            <div className="layer wh100 hidden-black-overlay hover-animation fade-in" />
            {/* <!--END of PHOTO OVERLAY--> */}
            {/* <!--ICON LINK--> */}
            <div className="layer wh100 hidden-link hover-animation delay1 fade-in">
              <div className="alignment">
                <div className="v-align center-middle">
                  <a
                    href={REACT_APP_VENDOR_IMAGE + "/attachment-8.jpg"}
                    className="magnific-zoom-gallery"
                    title="Attachment-8"
                  >
                    <div className="de-icon circle light medium-size inline">
                      <i className="de-icon-zoom-in" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* <!--END of ICON LINK--> */}
          </div>
          {/* <!--END of PHOTO-ITEM--> */}
        </div>
        {/* <!--END of GALLERY-ITEM-8--> */}
        {/* <!--GALLERY-ITEM-9--> */}
        <div className="col-md-4">
          {/* <!--PHOTO-ITEM--> */}
          <div className="photo-item frame-border animation fadeIn">
            {/* <!--PHOTO--> */}
            <img
              src={REACT_APP_VENDOR_IMAGE + "/gallery-9.jpg"}
              alt=""
              className="hover-animation image-zoom-rotate"
            />
            {/* <!--PHOTO OVERLAY--> */}
            <div className="layer wh100 hidden-black-overlay hover-animation fade-in" />
            {/* <!--END of PHOTO OVERLAY--> */}
            {/* <!--ICON LINK--> */}
            <div className="layer wh100 hidden-link hover-animation delay1 fade-in">
              <div className="alignment">
                <div className="v-align center-middle">
                  <a
                    href={REACT_APP_VENDOR_IMAGE + "/attachment-9.jpg"}
                    className="magnific-zoom-gallery"
                    title="Attachment-9"
                  >
                    <div className="de-icon circle light medium-size inline">
                      <i className="de-icon-zoom-in" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* <!--END of ICON LINK--> */}
          </div>
          {/* <!--END of PHOTO-ITEM--> */}
        </div>
        {/* <!--END of GALLERY-ITEM-9--> */}
      </div>
    </section>
  );
};

export default GallerySection;
