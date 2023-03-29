import React from "react";
import "../css/footer.css";

const Footer = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
               in place of 'smooth' */
    });
  };

  return (
    <div className="footer">
      <div className="footer__backToTop" onClick={backToTop}>
        Back to top
      </div>
      <div className="footer__info">
        <div className="footer__infoCenter">
          <div className="footer__infoElem">
            <h3>Get to Know Us</h3>
            <ul>
              <li className="nav_first">
                <a href="https://www.amazon.jobs" className="nav_a">
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="https://blog.aboutamazon.com/?utm_source=gateway&amp;utm_medium=footer"
                  className="nav_a"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://www.aboutamazon.com/?utm_source=gateway&amp;utm_medium=footer"
                  className="nav_a"
                >
                  About Amazon
                </a>
              </li>
              <li>
                <a href="https://www.amazon.com/ir" className="nav_a">
                  Investor Relations
                </a>
              </li>
              <li>
                <a
                  href="/gp/browse.html?node=2102313011&amp;ref_=footer_devices"
                  className="nav_a"
                >
                  Amazon Devices
                </a>
              </li>
              <li className="nav_last ">
                <a href="https://www.amazon.science" className="nav_a">
                  Amazon Science
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__infoElem">
            <h3>Make Money with Us</h3>
            <ul>
              <li className="nav_first">
                <a
                  href="https://services.amazon.com/sell.html?ld=AZFSSOA&amp;ref_=footer_soa"
                  className="nav_a"
                >
                  Sell products on Amazon
                </a>
              </li>
              <li>
                <a
                  href="https://services.amazon.com/amazon-business.html?ld=usb2bunifooter&amp;ref_=footer_b2b"
                  className="nav_a"
                >
                  Sell on Amazon Business
                </a>
              </li>
              <li>
                <a href="https://developer.amazon.com" className="nav_a">
                  Sell apps on Amazon
                </a>
              </li>
              <li>
                <a
                  href="https://affiliate-program.amazon.com/"
                  className="nav_a"
                >
                  Become an Affiliate
                </a>
              </li>
              <li>
                <a
                  href="https://advertising.amazon.com/?ref=ext_amzn_ftr"
                  className="nav_a"
                >
                  Advertise Your Products
                </a>
              </li>
              <li>
                <a
                  href="/gp/seller-account/mm-summary-page.html?ld=AZFooterSelfPublish&amp;topic=200260520&amp;ref_=footer_publishing"
                  className="nav_a"
                >
                  Self-Publish with Us
                </a>
              </li>
              <li>
                <a
                  href="https://go.thehub-amazon.com/amazon-hub-locker"
                  className="nav_a"
                >
                  Host an Amazon Hub
                </a>
              </li>
              <li className="nav_last nav_a_carat">
                <span className="nav_a_carat" aria-hidden="true"></span>
                <a
                  href="/b/?node=18190131011&amp;ld=AZUSSOA-seemore&amp;ref_=footer_seemore"
                  className="nav_a"
                >
                  See More Make Money with Us
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__infoElem">
            <h3>Amazon Payment Products</h3>
            <ul>
              <li className="nav_first">
                <a
                  href="/dp/B07984JN3L?plattr=ACOMFO&amp;ie=UTF-8"
                  className="nav_a"
                >
                  Amazon Business Card
                </a>
              </li>
              <li>
                <a
                  href="/gp/browse.html?node=16218619011&amp;ref_=footer_swp"
                  className="nav_a"
                >
                  Shop with Points
                </a>
              </li>
              <li>
                <a
                  href="/gp/browse.html?node=10232440011&amp;ref_=footer_reload_us"
                  className="nav_a"
                >
                  Reload Your Balance
                </a>
              </li>
              <li className="nav_last ">
                <a
                  href="/gp/browse.html?node=388305011&amp;ref_=footer_tfx"
                  className="nav_a"
                >
                  Amazon Currency Converter
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__infoElem">
            <h3>Let Us Help You</h3>
            <ul>
              <li className="nav_first">
                <a
                  href="/gp/help/customer/display.html?nodeId=GDFU3JS5AL6SYHRD&amp;ref_=footer_covid"
                  className="nav_a"
                >
                  Amazon and COVID-19
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.com/gp/css/homepage.html?ref_=footer_ya"
                  className="nav_a"
                >
                  Your Account
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.com/gp/css/order-history?ref_=footer_yo"
                  className="nav_a"
                >
                  Your Orders
                </a>
              </li>
              <li>
                <a
                  href="/gp/help/customer/display.html?nodeId=468520&amp;ref_=footer_shiprates"
                  className="nav_a"
                >
                  Shipping Rates &amp; Policies
                </a>
              </li>
              <li>
                <a
                  href="/gp/css/returns/homepage.html?ref_=footer_hy_f_4"
                  className="nav_a"
                >
                  Returns &amp; Replacements
                </a>
              </li>
              <li>
                <a
                  href="/gp/digital/fiona/manage?ref_=footer_myk"
                  className="nav_a"
                >
                  Manage Your Content and Devices
                </a>
              </li>
              <li>
                <a
                  href="/gp/BIT/ref=footer_bit_v2_us_A0029?bitCampaignCode=A0029"
                  className="nav_a"
                >
                  Amazon Assistant
                </a>
              </li>
              <li className="nav_last ">
                <a
                  href="/gp/help/customer/display.html?nodeId=508510&amp;ref_=footer_gw_m_b_he"
                  className="nav_a"
                >
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
