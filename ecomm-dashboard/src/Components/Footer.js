import React from "react";
import {Link} from 'react-router-dom'
import '../style/footer.css'

function Footer() {
  return (
    <section id="copyright" class="copyright bg-dark">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h6>
              © 2017 This theme is powered by
              <Link href="#" target="_blank">
                The Chablis Media Digital Tech Inc.
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
