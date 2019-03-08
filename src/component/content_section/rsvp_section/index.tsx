/*
 * @Author: Chao Yang
 * @Date: 2019-03-08 09:37:24
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-03-08 10:09:48
 */
import * as React from "react";

const RsvpSection = () => {
  return (
    <section id="rsvp-section">
      <div className="container">
        {/* <!-- ROW-1 --> */}
        <div className="row">
          {/* <!-- SECTION TITLE --> */}
          <div className="col-md-offset-2 col-md-8 text-center">
            <div className="section-title animation fadeInUp">
              <h2>RSVP</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ultrices malesuada ante quis pharetra. Nullam notn bibendum
                dolor. Ut vel turpis accumsan, efficitur dolor fermentum,
                tincidunt metus. Etiam ut ultrices nibh. Etiam aliquam mauris
                non hendrerit faucibus. Proin pulvinar congue ex, vitae
              </p>
            </div>
          </div>
        </div>
        {/* <!-- END of ROW-1 --> */}
        {/* <!-- FORM --> */}
        <div className="row">
          <div id="message" className="col-md-12 message">
            {/* <!-- Show Message --> */}
          </div>
          <form
            method="post"
            action="http://demo.dethemes.com/forever/versions/onepage/rsvp.php"
            id="rsvpform"
          >
            <div className="col-md-6">
              <div id="fullname" className="form-group">
                <label htmlFor="inputname">*NAME</label>
                <input
                  type="text"
                  className="form-control ajax-input"
                  id="inputname"
                  placeholder=""
                  data-required="Name Required"
                  data-output-label="Output Name"
                />
              </div>
              <div id="email" className="form-group">
                <label htmlFor="inputemail">*EMAIL</label>
                <input
                  type="email"
                  className="form-control ajax-input"
                  id="inputemail"
                  placeholder=""
                  data-required="Email Required"
                  data-output-label="Output Email"
                />
              </div>
              <div id="events" className="form-group">
                <label htmlFor="inputevents">*I WILL ATTEND TO</label>
                <select
                  multiple={true}
                  id="inputevents"
                  className="form-control ajax-input"
                  data-required="Please Select Events"
                  data-output-label="Output Events"
                >
                  <option>Wedding Day</option>
                  <option>Ceremony Day</option>
                  <option>The Party</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="inputmessage">LEAVE YOUR MESSAGE</label>
                <textarea
                  id="inputmessage"
                  className="form-control ajax-input"
                  rows={14}
                  data-output-label="Output Message"
                />
              </div>
            </div>
            <div className="col-md-12 text-center">
              <div className="form-group">
                <input
                  type="submit"
                  id="submitButton"
                  name="submitButton"
                  className="button medium reverse"
                  value="SUBMIT"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- END of FORM --> */}
    </section>
  );
};

export default RsvpSection;
