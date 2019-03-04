/*
 * @Author: Chao Yang 
 * @Date: 2019-03-01 17:41:26 
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-03-01 18:00:30
 */
import * as React from 'react';
import { REACT_APP_VENDOR_IMAGE } from '../../../const/variable';

const OurStorySecion = () => {
    return (
        <section id="our-story">
            <div className="container">
                {/* <!-- ROW-1 --> */}
                <div className="row">
                    {/* <!-- SECTION TITLE --> */}
                    <div className="col-sm-12 col-md-offset-2 col-md-8 text-center">
                        <div className="section-title animation fadeInUp">
                            <h2>
                                OUR
                                <img src={REACT_APP_VENDOR_IMAGE+"/heart-icon.png"} alt="" />
                                 STORY
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam notn bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh.  Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar congue  ex, vitae 
                            </p>
                        </div>
                    </div>
                    {/* <!-- END of SECTION TITLE --> */}
                </div>
                {/* <!-- END of ROW-1 --> */}
                {/* <!-- STORY ROW-1 --> */}
                <div className="row story-row">
                    <div className="col-sm-12 col-md-offset-1 col-md-4 text-center">
                        {/* <!-- PHOTO-ITEM --> */}
                        <div className="photo-item frame-border animation delay1 fadeInLeft">
                            {/* <!-- PHOTO --> */}
                            <img src={REACT_APP_VENDOR_IMAGE+"/gallery-1.jpg"} alt="" className="hover-animation image-zoom-in" />
                            {/* <!-- END of PHOTO --> */}
                            {/* <!-- PHOTO OVERLAY --> */}
                            <div className="layer wh100 hidden-black-overlay hover-animation fade-in" />
                            {/* <!-- END of PHOTO OVERLAY --> */}
                            {/* <!-- ICON LINK --> */}
                            <div className="layer wh100 hidden-link hover-animation delay1 fade-in">
                                <div className="alignment">
                                    <div className="v-align center-middle">
                                        <a href={REACT_APP_VENDOR_IMAGE+"/attachment-1.jpg"} className="magnific-zoom" title="Our First Met">
                                            <div className="de-icon circle light medium-size inline">
                                                <i className="de-icon-zoom-in"/>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- END of ICON LINK --> */}
                        </div>
                        {/* <!-- END of PHOTO-ITEM --> */}
                    </div>
                    <div className="col-sm-12 col-md-2 text-center story-date-wrapper animation fadeIn">
                        <div className="arrow-left" />
                        <div className="story-date">
                            <div className="date-only">
                                01
                            </div>
                            <div className="month-year">
                                01.15
                            </div>
                        </div>
                        <div className="arrow-right" />
                        <div className="clearboth" />
                    </div>
                    <div className="col-sm-12 col-md-4 animation delay1 fadeInRight">
                        <h3>
                            OUR FIRST MET
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam notn bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh.  Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar congue  ex, vitae commodo. Phasellus condimentum, mi ut sodales gravida.
                        </p>
                    </div>
                </div>
                {/* <!-- END of STORY ROW-1 --> */}
                {/* <!-- STORY ROW-2 --> */}
                <div className="row story-row">
                    <div className="col-sm-12 col-md-4 col-md-push-6 text-center">
                        {/* <!-- PHOTO-ITEM --> */}
                        <div className="photo-item frame-border animation delay1 fadeInLeft">
                            {/* <!-- PHOTO --> */}
                            <img src={REACT_APP_VENDOR_IMAGE+"/gallery-9.jpg"} alt="" className="hover-animation image-zoom-in" />
                            {/* <!-- END of PHOTO --> */}
                            {/* <!-- PHOTO OVERLAY --> */}
                            <div className="layer wh100 hidden-black-overlay hover-animation fade-in" />
                            {/* <!-- END of PHOTO OVERLAY --> */}
                            {/* <!-- ICON LINK --> */}
                            <div className="layer wh100 hidden-link hover-animation delay1 fade-in">
                                <div className="alignment">
                                    <div className="v-align center-middle">
                                        <a href={REACT_APP_VENDOR_IMAGE+"/attachment-9.jpg"} className="magnific-zoom" title="Our First Dating">
                                            <div className="de-icon circle light medium-size inline">
                                                <i className="de-icon-zoom-in"/>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- END of ICON LINK --> */}
                        </div>
                        {/* <!-- END of PHOTO-ITEM --> */}
                    </div>
                    <div className="col-sm-12 col-md-2 text-center story-date-wrapper animation fadeIn">
                        <div className="arrow-left" />
                        <div className="story-date">
                            <div className="date-only">
                                11
                            </div>
                            <div className="month-year">
                                23.16
                            </div>
                        </div>
                        <div className="arrow-right" />
                        <div className="clearboth" />
                    </div>
                    <div className="col-sm-12 col-md-4 col-md-pull-6 animation delay1 fadeInRight">
                        <h3>
                            OUR FIRST DATING
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam notn bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh.  Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar congue  ex, vitae commodo. Phasellus condimentum, mi ut sodales gravida.
                        </p>
                    </div>
                </div>
                {/* <!-- END of STORY ROW-2 --> */}
                {/* <!-- STORY ROW-3 --> */}
                <div className="row story-row">
                    <div className="col-md-offset-1 col-md-4 text-center">
                        {/* <!-- PHOTO-ITEM --> */}
                        <div className="photo-item frame-border animation delay1 fadeInLeft">
                            {/* <!-- PHOTO --> */}
                            <img src={REACT_APP_VENDOR_IMAGE+"/gallery-2.jpg"} alt="" className="hover-animation image-zoom-in" />
                            {/* <!-- END of PHOTO --> */}
                            {/* <!-- PHOTO OVERLAY --> */}
                            <div className="layer wh100 hidden-black-overlay hover-animation fade-in" />
                            {/* <!-- END of PHOTO OVERLAY --> */}
                            {/* <!-- ICON LINK --> */}
                            <div className="layer wh100 hidden-link hover-animation delay1 fade-in">
                                <div className="alignment">
                                    <div className="v-align center-middle">
                                        <a href={REACT_APP_VENDOR_IMAGE+"/attachment-2.jpg"} className="magnific-zoom" title="He Proposed">
                                            <div className="de-icon circle light medium-size inline">
                                                <i className="de-icon-zoom-in"/>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- END of ICON LINK --> */}
                        </div>
                        {/* <!-- END of PHOTO-ITEM --> */}
                    </div>
                    <div className="col-sm-12 col-md-2 text-center story-date-wrapper animation fadeIn">
                        <div className="arrow-left" />
                        <div className="story-date">
                            <div className="date-only">
                                23
                            </div>
                            <div className="month-year">
                                11.18
                            </div>
                        </div>
                        <div className="arrow-right" />
                        <div className="clearboth" />
                    </div>
                    <div className="col-md-4 animation delay1 fadeInRight">
                        <h3>
                            HE PROPOSED
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam notn bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh.  Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar congue  ex, vitae commodo. Phasellus condimentum, mi ut sodales gravida.
                        </p>
                    </div>
                </div>
                {/* <!-- END of STORY ROW-3 --> */}
                {/* <!-- STORY ROW-4 --> */}
                <div className="row story-row">
                    <div className="col-sm-12 col-md-4 col-md-push-6 text-center">
                        {/* <!-- PHOTO-ITEM --> */}
                        <div className="photo-item frame-border animation delay1 fadeInLeft">
                            {/* <!-- PHOTO --> */}
                            <img src={REACT_APP_VENDOR_IMAGE+"/gallery-3.jpg"} alt="" className="hover-animation image-zoom-in" />
                            {/* <!-- END of PHOTO --> */}
                            {/* <!-- PHOTO OVERLAY --> */}
                            <div className="layer wh100 hidden-black-overlay hover-animation fade-in" />
                            {/* <!-- END of PHOTO OVERLAY --> */}
                            {/* <!-- ICON LINK --> */}
                            <div className="layer wh100 hidden-link hover-animation delay1 fade-in">
                                <div className="alignment">
                                    <div className="v-align center-middle">
                                        <a href={REACT_APP_VENDOR_IMAGE+"/attachment-3.jpg"} className="magnific-zoom" title="Love Ring">
                                            <div className="de-icon circle light medium-size inline">
                                                <i className="de-icon-zoom-in"/>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- END of ICON LINK --> */}
                        </div>
                        {/* <!-- END of PHOTO-ITEM --> */}
                    </div>
                    <div className="col-sm-12 col-md-2 text-center story-date-wrapper animation fadeIn">
                        <div className="arrow-left" />
                        <div className="story-date">
                            <div className="date-only">
                                03
                            </div>
                            <div className="month-year">
                                18.19
                            </div>
                        </div>
                        <div className="arrow-right" />
                        <div className="clearboth" />
                    </div>
                    <div className="col-sm-12 col-md-4 col-md-pull-6 animation delay1 fadeInRight">
                        <h3>
                            LOVE RING
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam notn bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh.  Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar congue  ex, vitae commodo. Phasellus condimentum, mi ut sodales gravida.
                        </p>
                    </div>
                </div>
                {/* <!-- END of STORY ROW-4 --> */}
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div id="end-of-story" className="animation fadeInUp">
                            <h2>
                                AND TODAY... WE ARE GETTING MARRIED
                            </h2>
                            <div className="heart-divider">
                                <span className="grey-line" />
                                <i className="de-icon-heart pink-heart" />
                                <i className="de-icon-heart grey-heart" />
                                <span className="grey-line" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStorySecion;
