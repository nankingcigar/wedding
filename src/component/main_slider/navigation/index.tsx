/*
 * @Author: Chao Yang
 * @Date: 2019-02-26 17:07:59
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-03-08 14:41:35
 */
import * as React from "react";
import { Trans, withTranslation } from "react-i18next";
import { MainSliderNavigationDictionary as key } from "../../../const/locale";
import LocaleComponentBase from "../../locale";
import "./index.less";

class MainSliderNavigation extends LocaleComponentBase {
  public render() {
    return (
      <header id="nav-header">
        <nav
          id="nav-bar"
          className="bottom-bar outside fluid-width block-color nav-center sticky-nav animation fadeIn"
        >
          <div id="nav-wrapper">
            {/* <!-- LOGO --> */}
            <div className="logo-wrapper">
              {/* <!-- CSS LOGO -->  */}
              <a href="#">
                <div className="css-logo rounded">
                  <div className="css-logo-text">
                    <strong className="strong1">
                      <Trans i18nKey={key.Bride}>
                        J
                      </Trans>
                    </strong>
                    <i className="de-icon-heart-1" />
                    <strong className="strong2">
                    <Trans i18nKey={key.Groom}>
                      C
                    </Trans>
                    </strong>
                  </div>
                </div>
              </a>
              {/* <!-- END of CSS LOGO -->  */}
            </div>
            {/* <!-- END of LOGO --> */}
            <div id="mobile-nav">
              <i className="de-icon-menu" />
            </div>
            <ul id="nav-menu" className="nav-smooth-scroll">
              <li className="first-child">
                <a href="#main-slider">
                  <Trans i18nKey={key.Home}>HOME</Trans>
                </a>
              </li>
              <li>
                <a href="#our-story">
                  <Trans i18nKey={key.Story}>STORY</Trans>
                </a>
              </li>
              <li>
                <a href="#where-when">
                  <Trans i18nKey={key.WhereWhen}>WHERE &amp; WHEN</Trans>
                </a>
              </li>
              <li>
                <a href="#gallery-section">
                  <Trans i18nKey={key.Gallery}>GALLERY</Trans>
                </a>
              </li>
              <li className="first-child split-margin">
                <a href="#more-events">
                  <Trans i18nKey={key.Events}>EVENTS</Trans>
                </a>
              </li>
              <li>
                <a href="#groomsmen-section">
                  <Trans i18nKey={key.Groomsmen}>GROOMSMEN</Trans>
                </a>
              </li>
              <li>
                <a href="#bridesmaid-section">
                  <Trans i18nKey={key.Bridesmaid}>BRIDESMAID</Trans>
                </a>
              </li>
              <li>
                <a href="#rsvp-section">
                  <Trans i18nKey={key.Rsvp}>RSVP</Trans>
                </a>
              </li>
            </ul>
            <div className="clearboth" />
          </div>
        </nav>
      </header>
    );
  }
}

export default withTranslation()(MainSliderNavigation);
