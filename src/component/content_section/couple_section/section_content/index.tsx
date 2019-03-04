/*
 * @Author: Chao Yang 
 * @Date: 2019-03-01 16:00:25 
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-03-01 17:30:00
 */
import * as React from 'react';
import PhotoItemHer from './photo_item_her';
import PhotoItemHim from './photo_item_him';

const SectionContent = () => {
    return (
        <div className="row">
            <div className="col-md-6">
                {/* <!-- PHOTO-ITEM --> */}
                <PhotoItemHim />
                {/* <!-- END of PHOTO-ITEM --> */}
                <div className="his-her-name">
                    <h2 className="text-center">
                        CHAO
                        <span className="last-name">
                            -&nbsp;Yang&nbsp;-
                        </span>
                    </h2>                                 
                    <div className="heart-wrapper">
                        <div className="de-icon circle medium-size custom-heart">
                            <i className="de-icon-heart" />
                        </div>
                    </div>
                </div>
                <p className="blurb animation fadeInLeft text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh.  Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar congue  ex, vitae commodo. Phasellus condimentum, mi ut sodales gravida.
                </p>
            </div>
            <div className="col-md-6">
                {/* <!-- PHOTO-ITEM --> */}
                <PhotoItemHer />
                {/* <!-- END of PHOTO-ITEM --> */}
                <div className="his-her-name">
                    <h2 className="text-center">
                        JUNE
                        <span className="last-name">
                        -&nbsp;Zhou&nbsp;-
                        </span>
                    </h2>
                </div>
                <p className="blurb animation fadeInRight text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh.  Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar congue  ex, vitae commodo. Phasellus condimentum, mi ut sodales gravida.
                </p>
            </div>
        </div>
    );
};

export default SectionContent;