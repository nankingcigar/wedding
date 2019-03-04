/*
 * @Author: Chao Yang 
 * @Date: 2019-03-01 15:50:36 
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-03-01 17:37:11
 */
import * as React from 'react';
import SectionContent from  './section_content';

const CoupleSection = () => {
    return (
        <section id="couple">
            <div className="container">
                {/* <!-- SECTION CONTENT --> */}
                <SectionContent />
                {/* <!-- END of SECTION CONTENT --> */}
            </div>
        </section>
    );
};

export default CoupleSection;
