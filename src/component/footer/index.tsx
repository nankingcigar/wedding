/*
 * @Author: Chao Yang 
 * @Date: 2019-02-28 15:28:42 
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-02-28 15:53:59
 */
import * as React from 'react';
import { Trans, withTranslation } from 'react-i18next';
import { FooterDictionary as key } from '../../const/locale';
import LocaleComponentBase from '../locale';
import './index.less';

class Footer extends LocaleComponentBase {
    public render () {
        return (
            <footer>
                <div className="image-divider fixed-height" data-stellar-background-ratio="0.5">
                    <div className="divider-overlay"/>
                    {/* <!-- Use Center Middle Alignment to align middle the content for fixed-height parallax --> */}
                    <div className="alignment">
                        <div className="v-align center-middle">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="animation fadeInUp">
                                            <div id="thank-you">
                                                <div id="thank">
                                                    <Trans i18nKey={key.Thank}>
                                                        Thank
                                                    </Trans>
                                                </div>
                                                <div id="you">
                                                    <Trans i18nKey={key.You}>
                                                        You
                                                    </Trans>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="heart-divider animation delay1 fadeInUp">
                                            <span className="white-line" />
                                            <i className="de-icon-heart pink-heart" />
                                            <i className="de-icon-heart white-heart" />
                                            <span className="white-line" />
                                        </div>
                                        <div id="footer-couple-name" className="animation delay1 fadeInUp">
                                            <Trans i18nKey={key.Signature}>
                                                June & Chao
                                            </Trans>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default withTranslation()(Footer);
