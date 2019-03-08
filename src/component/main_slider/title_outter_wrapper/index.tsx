/*
 * @Author: Chao Yang
 * @Date: 2019-02-26 12:03:40
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-03-08 09:14:03
 */
import * as React from "react";
import { Trans, withTranslation } from "react-i18next";
import { MainSliderTitleOutterWrapperDictionary as key } from "../../../const/locale";
import LocaleComponentBase from "../../locale";

class MainSliderTitleOutterWrapper extends LocaleComponentBase {
  public render() {
    return (
      <div className="slide-title-outter-wrapper">
        {/* <!-- MAIN SLIDER TITLE INNER WRAPPER --> */}
        <div className="slide-title-inner-wrapper">
          {/* <!-- TITLE 2 --> */}
          <div className="slide-title align-middle">
            <div className="container">
              <div className="row">
                <div className="col-md-offset-3 col-md-6 animation delay1 fadeInUp">
                  <div id="invited">
                    <Trans i18nKey={key.YouAreInvited}>You're Invited.</Trans>
                  </div>
                  <div className="banner-text withlove medium light">
                    <h1>
                      <Trans i18nKey={key.WeAreGettingMarried}>
                        WE ARE GETTING MARRIED
                      </Trans>
                    </h1>
                  </div>
                  <div id="banner-date">
                    <Trans i18nKey={key.Date}>- JULY / 20TH / 2019 -</Trans>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- END of TITLE 2 --> */}
        </div>
        {/* <!-- END of MAIN SLIDER TITLE INNER WRAPPER --> */}
      </div>
    );
  }
}

export default withTranslation()(MainSliderTitleOutterWrapper);
