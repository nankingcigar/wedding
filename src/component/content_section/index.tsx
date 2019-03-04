/*
 * @Author: Chao Yang 
 * @Date: 2019-02-28 15:16:42 
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-03-04 17:26:49
 */
import * as React from 'react';
import CoupleSection from './couple_section';
import './index.less';
import OurStorySection from './our_story_section'
import WhereWhenSection from './where_when_section';

const ContentSection = () => {
    return (
        <section id="content">
            {/* <!--COUPLE SECTION--> */}
            <CoupleSection />
            {/* <!--END of COUPLE SECTION--> */}
            {/* <!-- PHOTO DIVIDER --> */}
            <section id="photo-divider">
            	<div className="image-divider fixed-height" data-stellar-background-ratio="0.3" />
            </section>
            {/* <!--END of PHOTO DIVIDER--> */}
            {/* <!-- OUR STORY SECTION --> */}
            <OurStorySection />
            {/* <!--END of OUR STORY SECTION--> */}
            {/* <!-- PHOTO DIVIDER --> */}
            <section id="photo-divider-1">
                <div className="image-divider fixed-height" data-stellar-background-ratio="0.3" />
            </section>
            {/* <!--END of PHOTO DIVIDER--> */}
            {/* <!-- WHERE WHEN SECTION --> */}
            <WhereWhenSection />
            {/* <!--END of WHERE WHEN SECTION--> */}
            <section id="attending">
                <div className="image-divider auto-height" data-stellar-background-ratio="0.3">
                    <div className="divider-overlay" />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-offset-2 col-md-8 text-center">
                                <div className="banner-text withlove large light animation fadeInUp">
                                    <h2 className="h1">
                                        ARE YOU ATTENDING?
                                    </h2>
                                </div>
                                <div className="text-center animation fadeInUp">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh.  Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar congue  ex, vitae commodo. Phasellus condimentum, mi ut sodales gravida.
                                    </p>
                                </div>
                                <div className="text-center">
                                    <a href="#rsvp-section" className="smooth-scroll de-button outline medium animation fadeInUp">
                                    	RSVP
                                  	</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
};

export default ContentSection;
