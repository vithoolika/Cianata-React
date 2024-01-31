import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>contact - Cianata</title>
        <meta
          name="description"
          content="Discover excellence in web and app development with Cianata. From stunning designs to powerful apps, we redefine digital success. Explore with us now!"
        />
        <meta property="og:title" content="contact - Cianata" />
        <meta
          property="og:description"
          content="Discover excellence in web and app development with Cianata. From stunning designs to powerful apps, we redefine digital success. Explore with us now!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ed6350b0-e4c0-40f3-8286-ad2cb4623861/501229ca-afa4-48e1-9e6f-10837214ccce?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="contact-navbar">
        <header
          data-role="Header"
          className="contact-header max-width-container"
        >
          <div className="contact-navbar1">
            <div className="contact-middle">
              <div className="contact-left">
                <span className="navbar-link">BOOK A CALL</span>
                <a
                  href="https://wa.me/+916238176858?text=Hello%20there,%20I%20wanted%20to%20know%20more."
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact-text01 navbar-link"
                >
                  CHAT
                </a>
                <Link to="/" className="contact-text02 navbar-link">
                  <span>SERVICES</span>
                  <br></br>
                </Link>
              </div>
              <div className="contact-container1">
                <img
                  alt="image"
                  src="/external/cianatanew-removebg-preview-200h.png"
                  className="contact-image"
                />
                <Link to="/" className="contact-logo-center navbar-logo-title">
                  CIANATA
                </Link>
              </div>
              <div className="contact-right">
                <Link to="/" className="contact-text05 navbar-link">
                  PRICING
                </Link>
                <Link to="/blog" className="contact-text06 navbar-link">
                  BLOG
                </Link>
                <Link to="/contact" className="contact-text07 navbar-link">
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
          <div data-role="BurgerMenu" className="contact-burger-menu">
            <svg viewBox="0 0 1024 1024" className="contact-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="contact-mobile-menu">
            <div className="contact-nav">
              <div className="contact-container2">
                <span className="contact-logo-center1">CIANATA</span>
                <div
                  data-role="CloseMobileMenu"
                  className="contact-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="contact-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="contact-middle1">
                <Link to="/contact" className="contact-text08">
                  BOOK A CALL
                </Link>
                <a
                  href="https://wa.me/+916238176858?text=Hello%20there,%20I%20wanted%20to%20know%20more."
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact-text09"
                >
                  CHAT
                </a>
                <Link to="/" className="contact-text10">
                  PRICING
                </Link>
                <Link to="/" className="contact-text11">
                  SERVICES
                </Link>
                <Link to="/blog" className="contact-text12">
                  BLOG
                </Link>
                <Link to="/contact" className="contact-text13">
                  CONTACT
                </Link>
              </div>
            </div>
            <div>
              <div className="contact-container3">
                <a
                  href="https://www.instagram.com/cianatagram/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="contact-icon04"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/people/Cianata/61555814410893/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact-link01"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="contact-icon06"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/CianataX"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact-link02"
                >
                  <img
                    alt="image"
                    src="/sl_z_072523_61700_05.svg"
                    className="contact-image1"
                  />
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="contact-main">
        <div className="contact-book">
          <div className="contact-content">
            <div className="contact-left1">
              <h2 className="contact-text14">
                Book a 15 minutes free consultation to check how can we help you
              </h2>
            </div>
            <div className="contact-container4">
              <input
                type="text"
                placeholder="Name"
                className="contact-textinput input"
              />
              <input
                type="text"
                placeholder="Phone No or Email"
                className="contact-textinput1 input"
              />
              <button className="contact-button button">
                <span className="contact-text15">Book a call</span>
              </button>
            </div>
          </div>
        </div>
        <div className="contact-who">
          <div className="contact-header1">
            <div className="contact-heading">
              <h2 className="contact-text16">
                Reach out to us through WhatsApp.
              </h2>
              <span className="contact-text17">
                &quot;Experience instant support with Cianata! Connect with us
                seamlessly on WhatsApp for swift and personalized assistance.
                Our team is ready to chat, address your inquiries, and provide
                quick solutions. Start a WhatsApp conversation now to streamline
                communication and explore the possibilities for your digital
                needs.&quot;
              </span>
            </div>
            <a
              href="https://wa.me/+916238176858?text=Hello%20there,%20I%20wanted%20to%20know%20more."
              target="_blank"
              rel="noreferrer noopener"
              className="contact-link03 button"
            >
              <span>let’s chat</span>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="contact-icon08"
              >
                <path d="M562.857 556.571c9.714 0 102.857 48.571 106.857 55.429 1.143 2.857 1.143 6.286 1.143 8.571 0 14.286-4.571 30.286-9.714 43.429-13.143 32-66.286 52.571-98.857 52.571-27.429 0-84-24-108.571-35.429-81.714-37.143-132.571-100.571-181.714-173.143-21.714-32-41.143-71.429-40.571-110.857v-4.571c1.143-37.714 14.857-64.571 42.286-90.286 8.571-8 17.714-12.571 29.714-12.571 6.857 0 13.714 1.714 21.143 1.714 15.429 0 18.286 4.571 24 19.429 4 9.714 33.143 87.429 33.143 93.143 0 21.714-39.429 46.286-39.429 59.429 0 2.857 1.143 5.714 2.857 8.571 12.571 26.857 36.571 57.714 58.286 78.286 26.286 25.143 54.286 41.714 86.286 57.714 4 2.286 8 4 12.571 4 17.143 0 45.714-55.429 60.571-55.429zM446.857 859.429c197.714 0 358.857-161.143 358.857-358.857s-161.143-358.857-358.857-358.857-358.857 161.143-358.857 358.857c0 75.429 24 149.143 68.571 210.286l-45.143 133.143 138.286-44c58.286 38.286 127.429 59.429 197.143 59.429zM446.857 69.714c237.714 0 430.857 193.143 430.857 430.857s-193.143 430.857-430.857 430.857c-72.571 0-144.571-18.286-208.571-53.714l-238.286 76.571 77.714-231.429c-40.571-66.857-61.714-144-61.714-222.286 0-237.714 193.143-430.857 430.857-430.857z"></path>
              </svg>
            </a>
          </div>
          <div className="contact-header2">
            <div className="contact-heading1">
              <h2 className="contact-text19">
                Reach out to us through Email or Phone.
              </h2>
              <span className="contact-text20">
                <span>
                  Email  :
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="mailto:contact@cianata.com?subject=Hi I like to know more"
                  className="contact-link04"
                >
                  contact@cianata.com
                </a>
                <br className="contact-text22"></br>
                <span>Email  : contact@cianata.com</span>
                <br></br>
                <span>
                  Phone :
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a href="tel:+91 623 817 6858" className="contact-link05">
                  +91 623 817 6858
                </a>
                <br></br>
                <span>Phone : +91 623 817 6858</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-footer">
        <div className="contact-max-width max-width-container">
          <footer className="contact-footer1">
            <div className="contact-container5">
              <img
                alt="image"
                src="/external/cianatanew-removebg-preview-200h.png"
                className="contact-image2"
              />
              <h3 className="contact-text29 Heading-3">CIANATA</h3>
              <div className="contact-container6">
                <a
                  href="https://www.instagram.com/cianatagram/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact-link06"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="contact-icon10"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/people/Cianata/61555814410893/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact-link07"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="contact-icon12"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <div className="contact-container7">
                  <a
                    href="https://twitter.com/CianataX"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="contact-link08"
                  >
                    <img
                      alt="image"
                      src="/sl_z_072523_61700_05.svg"
                      className="contact-image3"
                    />
                  </a>
                </div>
              </div>
              <span className="contact-text30">
                809, Thodiyoor P.O, Karunagappally, Kollam
              </span>
              <span className="contact-text31">+91 623 817 6858</span>
              <span className="contact-text32">contact@cianata.com</span>
              <span className="contact-text33">
                <span>©2024 Cianata</span>
                <br></br>
              </span>
            </div>
            <div className="contact-links-container">
              <div className="contact-container8">
                <span className="contact-text36">Quick links</span>
                <span className="contact-text37">Contact us</span>
                <a href="#pricing" className="contact-link09">
                  Pricing
                </a>
                <span className="contact-text38">Blogs</span>
                <a href="#Services" className="contact-link10">
                  Services
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Contact
