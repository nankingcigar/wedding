/*
 * @Author: Chao Yang
 * @Date: 2019-03-01 16:00:25
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-03-08 16:17:20
 */
import * as React from "react";
import { Trans, withTranslation } from "react-i18next";
import { ContentSectioCoupleSectionSectionContentDictionary as key } from "../../../../const/locale";
import LocaleComponentBase from "../../../locale";
import PhotoItemHer from "./photo_item_her";
import PhotoItemHim from "./photo_item_him";

class SectionContent extends LocaleComponentBase {
  public render() {
    return (
      <div className="row">
        <div className="col-md-6">
          {/* <!-- PHOTO-ITEM --> */}
          <PhotoItemHim />
          {/* <!-- END of PHOTO-ITEM --> */}
          <div className="his-her-name">
            <h2 className="text-center">
              <Trans i18nKey={key.GroomName}>CHAO</Trans>
              <span className="last-name">
                <Trans i18nKey={key.GroomLastName}>-&nbsp;Yang&nbsp;-</Trans>
              </span>
            </h2>
            <div className="heart-wrapper">
              <div className="de-icon circle medium-size custom-heart">
                <i className="de-icon-heart" />
              </div>
            </div>
          </div>
          <p className="blurb animation fadeInLeft text-center">
            <Trans i18nKey={key.IntroduceGroom}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ultrices malesuada ante quis pharetra. Nullam non bibendum dolor.
              Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt
              metus. Etiam ut ultrices nibh. Etiam aliquam mauris non hendrerit
              faucibus. Proin pulvinar congue ex, vitae commodo. Phasellus
              condimentum, mi ut sodales gravida.
            </Trans>
          </p>
        </div>
        <div className="col-md-6">
          {/* <!-- PHOTO-ITEM --> */}
          <PhotoItemHer />
          {/* <!-- END of PHOTO-ITEM --> */}
          <div className="his-her-name">
            <h2 className="text-center">
              <Trans i18nKey={key.BridesName}>JUNE</Trans>
              <span className="last-name">
                <Trans i18nKey={key.BridesLastName}>-&nbsp;Zhou&nbsp;-</Trans>
              </span>
            </h2>
          </div>
          <p className="blurb animation fadeInRight text-center">
            <Trans i18nKey={key.IntroduceBrides}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ultrices malesuada ante quis pharetra. Nullam non bibendum dolor.
              Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt
              metus. Etiam ut ultrices nibh. Etiam aliquam mauris non hendrerit
              faucibus. Proin pulvinar congue ex, vitae commodo. Phasellus
              condimentum, mi ut sodales gravida.
            </Trans>
          </p>
        </div>
      </div>
    );
  }
}

export default withTranslation()(SectionContent);
