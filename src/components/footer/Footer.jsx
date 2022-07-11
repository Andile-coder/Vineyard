import React from "react";
import styles from "./Footer.module.scss";
import ftt from "../../Data/images/ftt-brand-logo-1.png";
import tbcsa from "../../Data/images/TBCSA__Badge-01.png";
import tc_2020 from "../../Data/images/TC_2020_L_GREEN_sml-2.png";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiOutlineYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_main}>
        <div className={styles.frame1}>
          <div className={styles.frame1_child}>
            <ul>
              <li>CAREERS</li>
              <li>NEWS</li>
              <li>CONTACT US</li>
              <li>SUBSCRIBE</li>
              <li>PRIVACY POLICY</li>
            </ul>
          </div>
          <div className={styles.frame1_child}>
            <h3>Location</h3>
            <ul>
              <li>Colinton Road,</li>
              <li>Newlands,7700</li>
              <li>Cape Town,South Africa</li>
            </ul>
          </div>
          <div className={styles.frame1_child}>
            <h3>Get in Touch</h3>
            <ul>
              <li>e:maselaandile@gmail.com</li>
              <li>t:+27 78 958 6438</li>
              <li>f:+27 78 958 6438</li>
            </ul>
          </div>
          <div className={styles.frame1_child}>
            <h3>Our Sister Hotel</h3>
            <ul>
              <li>OUDE WERF HOTEL</li>
            </ul>
          </div>
        </div>
        <div className={styles.frame2}>
          <img src={ftt} alt="fair trade tourism" />
          <img src={tbcsa} alt="TBCSA" />
          <img src={tc_2020} alt="TC_2020" />
        </div>
        <div className={styles.frame3}>
          <p>COVID – 19: Travel information </p>
          <p>South African government Covid-19 portal</p>
        </div>
        <hr />
        <div className={styles.frame4}>
          <p>© 2022 The Vineyard</p>
          <div className={styles.icons}>
            <AiFillFacebook />
            <AiFillTwitterCircle />
            <AiOutlineInstagram />
            <AiOutlineYoutube />
            <FaTripadvisor />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
