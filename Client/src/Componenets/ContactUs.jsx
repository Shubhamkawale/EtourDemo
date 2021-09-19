import React, { Component } from 'react'


class ContactUs extends Component {

  render() {
    return (
      <section className="ContactUs">
        <div>


          <div class="container" >
            <br />
            <h1 class="mb-20 hdr_txt text-primary">E-tour Ltd.</h1>

            <hr />
            <p class="fs-2">
              Get in touch with us.</p>
            <br /><br /><br />

            <div class="row">
              <div class="col-sm-4 ">

                <div class=" text-center">
                  <img src="/Images/call.jpeg" style={{ "height": "200px", "padding": "5px" }} alt="Call" />
                  <h4 class="text-uppercase mb-5">call us</h4>
                  <p>+91 864463012 +91 8806049761</p>
                </div>

              </div>
              <div class="col-sm-4 ">

                <div class=" text-center">
                  <img src="/Images/location.jpeg" style={{ "height": "200px", "padding": "5px" }} alt="Location" />
                  <h4 class="text-uppercase mb-5">office location</h4>
                  <address>Etour office, Gulmohar Road, MHADA Colony, Vile Parle West, Mumbai, Maharashtra 400049 </address>

                </div>
              </div>


              <div class="col-sm-4 ">

                <div class="text-center">
                  <img src="/Images/mail.jpeg" style={{ "height": "200px", "padding": "5px" }} alt="Email" />
                  <h4 class="text-uppercase mb-5">Email Us</h4>
                  <p>Etour.support@gmail.com</p>

                </div>
              </div>
            </div>
          </div><br /><br /><br /><br />
        </div>
      </section>

    )
  }
}

export default ContactUs
