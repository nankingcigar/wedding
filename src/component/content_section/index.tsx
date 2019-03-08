/*
 * @Author: Chao Yang
 * @Date: 2019-02-28 15:16:42
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-03-08 09:46:23
 */
import * as React from "react";
import BridesmaidSection from './bridesmaid_section';
import CoupleSection from "./couple_section";
import GallerySection from "./gallery_section";
import GiftSection from './gift_section';
import GroomsmenSection from './groomsmen_section';
import "./index.less";
import MoreEventsSection from './more_events_section';
import OurStorySection from "./our_story_section";
import RsvpSection from './rsvp_section';
import WhereWhenSection from "./where_when_section";

const ContentSection = () => {
  return (
    <section id="content">
      {/* <!--COUPLE SECTION--> */}
      <CoupleSection />
      {/* <!--END of COUPLE SECTION--> */}
      {/* <!-- PHOTO DIVIDER --> */}
      <section id="photo-divider">
        <div
          className="image-divider fixed-height"
          data-stellar-background-ratio="0.3"
        />
      </section>
      {/* <!--END of PHOTO DIVIDER--> */}
      {/* <!-- OUR STORY SECTION --> */}
      <OurStorySection />
      {/* <!--END of OUR STORY SECTION--> */}
      {/* <!-- PHOTO DIVIDER --> */}
      <section id="photo-divider-1">
        <div
          className="image-divider fixed-height"
          data-stellar-background-ratio="0.3"
        />
      </section>
      {/* <!--END of PHOTO DIVIDER--> */}
      {/* <!-- WHERE WHEN SECTION --> */}
      <WhereWhenSection />
      {/* <!--END of WHERE WHEN SECTION--> */}
      <section id="attending">
        <div
          className="image-divider auto-height"
          data-stellar-background-ratio="0.3"
        >
          <div className="divider-overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-offset-2 col-md-8 text-center">
                <div className="banner-text withlove large light animation fadeInUp">
                  <h2 className="h1">ARE YOU ATTENDING?</h2>
                </div>
                <div className="text-center animation fadeInUp">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer ultrices malesuada ante quis pharetra. Nullam non
                    bibendum dolor. Ut vel turpis accumsan, efficitur dolor
                    fermentum, tincidunt metus. Etiam ut ultrices nibh. Etiam
                    aliquam mauris non hendrerit faucibus. Proin pulvinar congue
                    ex, vitae commodo. Phasellus condimentum, mi ut sodales
                    gravida.
                  </p>
                </div>
                <div className="text-center">
                  <a
                    href="#rsvp-section"
                    className="smooth-scroll de-button outline medium animation fadeInUp"
                  >
                    RSVP
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- GALLERY SECTION --> */}
      <GallerySection />
      {/* <!--END of GALLERY SECTION--> */}
      <section id="dont-miss-it">
        <div
          className="image-divider auto-height"
          data-stellar-background-ratio="0.3"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-offset-2 col-md-8">
                <h2
                  id="dont-miss-it-title"
                  className="text-center animation fadeInUp"
                >
                  Don't Miss It!
                </h2>
                <div className="text-center animation fadeInUp">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer ultrices malesuada ante quis pharetra. Nullam non
                    bibendum dolor. Ut vel turpis accumsan, efficitur dolor
                    fermentum, tincidunt metus. Etiam ut ultrices nibh. Etiam
                    aliquam mauris non hendrerit faucibus. Proin pulvinar congue
                    ex, vitae commodo. Phasellus condimentum, mi ut sodales
                    gravida.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-offset-3 col-md-6">
                <div
                  id="date-countdown"
                  className="circle-countdown animation fadeInUp"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- MORE EVENTS SECTION --> */}
      <MoreEventsSection />
      {/* <!-- END of MORE EVENTS SECTION --> */}
      {/* <!-- PHOTO DIVIDER --> */}
      <section id="photo-divider-2">
        <div className="image-divider fixed-height" data-stellar-background-ratio="0.3" />
      </section>
      {/* <!-- END of PHOTO DIVIDER --> */}
      {/* <!-- GROOMSMEN SECTION --> */}
      <GroomsmenSection />
      {/* <!-- END of GROOMSMEN SECTION --> */}
      {/* <!-- PHOTO DIVIDER --> */}
      <section id="photo-divider-3">
        <div className="image-divider fixed-height" data-stellar-background-ratio="0.3" />
      </section>
      {/* <!-- END of PHOTO DIVIDER --> */}
      {/* <!-- BRIDESMAID SECTION --> */}
      <BridesmaidSection />
      {/* <!-- END of BRIDESMAID SECTION --> */}
      {/* <!-- GIFT SECTION --> */}
      <GiftSection />
      {/* <!-- END of GIFT SECTION --> */}
      {/* <!-- RSVP SECTION --> */}
      <RsvpSection />
      {/* <!-- END of RSVP SECTION --> */}
    </section>
  );
};

export default ContentSection;
