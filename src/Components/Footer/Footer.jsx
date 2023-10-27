import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-component">
      <div className="footer-top">
        <div className="footer-top__rigth">
          <Link className="footer-logo">MORENT</Link>
          <h7>
            Our vision is to provide convenience and help increase your sales
            business.
          </h7>
        </div>
        <div className="footer-top__left">
          <div className="footer-top__left-about">
            <h5>About</h5>
            <h7>How it works</h7>
            <h7>Featured</h7>
            <h7>Partnership</h7>
            <h7>Bussiness Relation</h7>
          </div>
          <div className="footer-top__left-about">
            <h5>Community</h5>
            <h7>Events</h7>
            <h7>Blog</h7>
            <h7>Podcast</h7>
            <h7>Invite a friend</h7>
          </div>
          <div className="footer-top__left-about">
            <h5>Socials</h5>
            <h7>Discord</h7>
            <h7>Instagram</h7>
            <h7>Twitter</h7>
            <h7>Facebook</h7>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bot">
        <h6>©2022 MORENT. All rights reserved</h6>
        <div className="footer-bot__rigth">
          <h6>Privacy & Policy</h6>
          <h6>Terms & Condition</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
