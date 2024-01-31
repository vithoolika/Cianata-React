import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Cianata</title>
        <meta
          name="description"
          content="Discover excellence in web and app development with Cianata. From stunning designs to powerful apps, we redefine digital success. Explore with us now!"
        />
        <meta property="og:title" content="Cianata" />
        <meta
          property="og:description"
          content="Discover excellence in web and app development with Cianata. From stunning designs to powerful apps, we redefine digital success. Explore with us now!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ed6350b0-e4c0-40f3-8286-ad2cb4623861/501229ca-afa4-48e1-9e6f-10837214ccce?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="home-navbar">
        <header data-role="Header" className="home-header max-width-container">
          <div className="home-navbar1">
            <div className="home-middle">
              <div className="home-left">
                <a href="#call" className="home-text navbar-link">
                  BOOK A CALL
                </a>
                <a
                  href="https://wa.me/+916238176858?text=Hello%20there,%20I%20wanted%20to%20know%20more."
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-text01 navbar-link"
                >
                  CHAT
                </a>
                <a href="#Services" className="home-text02 navbar-link">
                  <span>SERVICES</span>
                  <br></br>
                </a>
              </div>
              <div className="home-container01">
                <img
                  alt="image"
                  src="/external/cianatanew-removebg-preview-200h.png"
                  className="home-image"
                />
                <span className="home-logo-center navbar-logo-title">
                  CIANATA
                </span>
              </div>
              <div className="home-right">
                <a href="#pricing" className="home-text05 navbar-link">
                  PRICING
                </a>
                <Link to="/blog" className="home-text06 navbar-link">
                  BLOG
                </Link>
                <Link to="/contact" className="home-text07 navbar-link">
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-container02">
                <span className="home-logo-center1">CIANATA</span>
                <div
                  data-role="CloseMobileMenu"
                  className="home-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-middle1">
                <a href="#call" className="home-text08">
                  BOOK A CALL
                </a>
                <a
                  href="https://wa.me/+916238176858?text=Hello%20there,%20I%20wanted%20to%20know%20more."
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-text09"
                >
                  CHAT
                </a>
                <a href="#pricing" className="home-text10">
                  PRICING
                </a>
                <a href="#Services" className="home-text11">
                  SERVICES
                </a>
                <Link to="/blog" className="home-text12">
                  BLOG
                </Link>
                <Link to="/contact" className="home-text13">
                  CONTACT
                </Link>
              </div>
            </div>
            <div>
              <div className="home-container03">
                <a
                  href="https://www.instagram.com/cianatagram/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon04"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/people/Cianata/61555814410893/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link01"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="home-icon06"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/CianataX"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link02"
                >
                  <img
                    alt="image"
                    src="/sl_z_072523_61700_05.svg"
                    className="home-image01"
                  />
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-width-container">
            <div className="home-hero1">
              <div className="home-container04">
                <div className="home-info">
                  <img
                    alt="Rectangle43271305"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMicgaGVpZ2h0PSc1Micgdmlld0JveD0nMCAwIDIgNTInIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxyZWN0IHdpZHRoPScyJyBoZWlnaHQ9JzUyJyBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScwLjUnLz4KPC9zdmc+Cg=="
                    className="home-image02"
                  />
                  <span className="home-text14">
                    Cianata is your one-stop solution for web development, app
                    development, design, hosting, advertising and marketing.
                  </span>
                </div>
                <h1 className="home-text15 Heading-1">
                  BEST TECH PROVIDER YOU&apos;LL EVER NEED
                </h1>
                <div className="home-container05">
                  <span className="home-text16">FROM</span>
                  <span className="home-text17">$399</span>
                </div>
                <div className="home-btn-group">
                  <a href="#pricing" className="home-link03 button">
                    Explore Packages
                  </a>
                </div>
              </div>
              <img
                alt="image23271449"
                src="/untitladsfased%20design-600h.png"
                className="home-image03"
              />
            </div>
          </div>
        </div>
        <div id="call" className="home-book">
          <div className="home-content">
            <div className="home-left1">
              <h2 className="home-text18">
                Book a 15 minutes free consultation to check how can we help you
              </h2>
              <div className="home-container06">
                <div className="home-container07">
                  <input
                    type="text"
                    placeholder="Name"
                    className="home-textinput input"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number/Email"
                    className="home-textinput1 input"
                  />
                </div>
                <Link to="/blog" className="home-navlink button">
                  <span className="home-text19">Book a call</span>
                </Link>
              </div>
            </div>
            <img
              alt="image"
              src="/external/message.svg"
              className="home-image04"
            />
          </div>
        </div>
        <section id="Services" className="home-how-it-works">
          <div className="home-centered-container">
            <div className="home-heading">
              <span className="home-text20 title">
                <span>Our Exclusive Services</span>
                <br className="home-text22"></br>
                <br></br>
              </span>
            </div>
            <div className="home-category">
              <div className="home-headng">
                <span className="home-text24">
                  <span>
                    1 — Design, Web &amp; App Development
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span className="home-text27">
                  &quot;At Cianata, we specialize in crafting visually stunning
                  web interfaces and seamless user experiences, blending
                  cutting-edge technologies for robust development with creative
                  design strategies that elevate your brand&apos;s online
                  presence.&quot;
                </span>
                <Link to="/contact" className="home-navlink1">
                  <div className="home-get-started template-button">
                    <span className="home-text28">Get started</span>
                  </div>
                </Link>
              </div>
              <div className="home-container08">
                <img
                  alt="pastedImage"
                  src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ed6350b0-e4c0-40f3-8286-ad2cb4623861/026693ae-4ff5-41ea-ae17-8bc5cb3ea8a2?org_if_sml=133739&amp;force_format=original"
                  className="home-pasted-image"
                />
              </div>
            </div>
            <div className="home-row">
              <div className="home-category1">
                <div className="home-headng1">
                  <span className="home-text29">
                    2 — Social Media Marketing  
                  </span>
                  <span className="home-text30">
                    &quot;At Cianata, we drive your brand&apos;s success through
                    strategic marketing solutions. From targeted advertising
                    campaigns to data-driven strategies, we amplify your online
                    presence, ensuring your business stands out in the
                    competitive market.&quot;
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ed6350b0-e4c0-40f3-8286-ad2cb4623861/dd830859-5950-40b4-8733-2d301ff3b56c?org_if_sml=173957&amp;force_format=original"
                  className="home-pasted-image1"
                />
              </div>
              <div className="home-category2">
                <div className="home-headng2">
                  <span className="home-text31">3— Hosting &amp; Email</span>
                  <span className="home-text32">
                    &quot;At Cianata, we offer comprehensive hosting solutions
                    coupled with robust email services, providing a seamless
                    online infrastructure for your business. Enjoy reliable
                    hosting and professional email communication, all in one
                    integrated package.&quot;
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="/untitledbnxn%20design-1200w.jpg"
                  className="home-pasted-image2"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="home-pricing">
          <div className="home-centered-container1">
            <div className="home-heading1">
              <span className="home-text33 title">
                Pricing for all kind of businesses
              </span>
              <span className="home-text34">
                Our price varies depending on the service provided.
              </span>
            </div>
            <div className="home-cards">
              <div className="home-card">
                <span className="home-text35">Web</span>
                <span className="home-text36">
                  <span>
                    From basic websites to enterprise and advance websites.
                  </span>
                  <br></br>
                </span>
                <Link to="/contact" className="home-navlink2">
                  <div className="home-get-started1 template-button">
                    <span className="home-text39">Starts @ $399</span>
                  </div>
                </Link>
                <span className="home-text40">What&apos;s we offer</span>
                <div className="home-bullet-points">
                  <div className="home-point">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon08"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text41">Informational Websites</span>
                  </div>
                  <div className="home-point1">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon10"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text42">E-commerce Websites</span>
                  </div>
                  <div className="home-point2">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon12"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text43">
                      Service-Oriented Websites
                    </span>
                  </div>
                  <div className="home-point3">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon14"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text44">
                      Content Sharing Websites
                    </span>
                  </div>
                  <div className="home-point4">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon16"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text45">Specialized Websites</span>
                  </div>
                </div>
              </div>
              <div className="home-card1">
                <span className="home-text46">Android &amp; IOS</span>
                <span className="home-text47">
                  From a basic app to games we got you covered.
                </span>
                <Link to="/contact" className="home-navlink3">
                  <div className="home-get-started2 template-button">
                    <span className="home-text48">
                      <span>Starts @ $1,000</span>
                      <br></br>
                    </span>
                  </div>
                </Link>
                <span className="home-text51">What&apos;s included</span>
                <div className="home-bullet-points1">
                  <div className="home-point5">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon18"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text52">
                      Full design and development
                    </span>
                  </div>
                  <div className="home-point6">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon20"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text53">
                      Full technical support
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="home-point7">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon22"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text54">
                      Full maintenance &amp; updates
                    </span>
                  </div>
                  <div className="home-point8">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon24"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text55">Security</span>
                  </div>
                </div>
              </div>
              <div className="home-card2">
                <span className="home-text56">Enterprise Software</span>
                <span className="home-text57">
                  <span>
                    For enterprise software, design, email and hosting service
                    contact us.
                  </span>
                  <br></br>
                </span>
                <Link to="/contact" className="home-navlink4">
                  <div className="home-get-started3 template-button">
                    <span className="home-text60">
                      <span>Contact us</span>
                      <br></br>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="home-pricing1">
            <div className="home-container09">
              <div className="home-container10">
                <h1 className="home-text63">Social Media Marketing  </h1>
              </div>
              <div className="home-container11">
                <div className="home-container12">
                  <span className="home-text64">
                    <span>Just Ad spent</span>
                    <br></br>
                    <span>+</span>
                  </span>
                  <span className="home-text68">5%</span>
                  <span className="home-text69">
                    Only on the amount that you make after your revenue covered
                    your existing revenue and Ad spent.
                  </span>
                  <Link to="/contact" className="home-navlink5 button">
                    Contact us
                  </Link>
                </div>
                <div className="home-container13">
                  <span className="home-text70">
                    <span>Fixed fee/month</span>
                    <br></br>
                    <span>Starts @</span>
                    <br></br>
                  </span>
                  <span className="home-text75">$500</span>
                  <span className="home-text76">All Channels</span>
                  <Link to="/contact" className="home-navlink6 button">
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="home-refer">
          <div className="home-header1">
            <h1 className="home-text77">
              We utilize the latest technologies and proven methodologies to
              deliver robust and scalable IT solutions
            </h1>
          </div>
          <div className="home-hero-image">
            <img
              alt="image"
              src="/external/computer.svg"
              className="home-image05"
            />
          </div>
        </div>
        <div className="home-who">
          <div className="home-header2">
            <div className="home-heading2">
              <h2 className="home-text78">Reach out to us through WhatsApp.</h2>
              <span className="home-text79">
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
              className="home-link04 button"
            >
              <span>let’s chat</span>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon26">
                <path d="M562.857 556.571c9.714 0 102.857 48.571 106.857 55.429 1.143 2.857 1.143 6.286 1.143 8.571 0 14.286-4.571 30.286-9.714 43.429-13.143 32-66.286 52.571-98.857 52.571-27.429 0-84-24-108.571-35.429-81.714-37.143-132.571-100.571-181.714-173.143-21.714-32-41.143-71.429-40.571-110.857v-4.571c1.143-37.714 14.857-64.571 42.286-90.286 8.571-8 17.714-12.571 29.714-12.571 6.857 0 13.714 1.714 21.143 1.714 15.429 0 18.286 4.571 24 19.429 4 9.714 33.143 87.429 33.143 93.143 0 21.714-39.429 46.286-39.429 59.429 0 2.857 1.143 5.714 2.857 8.571 12.571 26.857 36.571 57.714 58.286 78.286 26.286 25.143 54.286 41.714 86.286 57.714 4 2.286 8 4 12.571 4 17.143 0 45.714-55.429 60.571-55.429zM446.857 859.429c197.714 0 358.857-161.143 358.857-358.857s-161.143-358.857-358.857-358.857-358.857 161.143-358.857 358.857c0 75.429 24 149.143 68.571 210.286l-45.143 133.143 138.286-44c58.286 38.286 127.429 59.429 197.143 59.429zM446.857 69.714c237.714 0 430.857 193.143 430.857 430.857s-193.143 430.857-430.857 430.857c-72.571 0-144.571-18.286-208.571-53.714l-238.286 76.571 77.714-231.429c-40.571-66.857-61.714-144-61.714-222.286 0-237.714 193.143-430.857 430.857-430.857z"></path>
              </svg>
            </a>
          </div>
          <div className="home-preview">
            <div className="home-image06">
              <img
                alt="image"
                src="/external/preview.svg"
                className="home-image07"
              />
            </div>
            <div className="home-video">
              <video
                src
                poster="/external/video.svg"
                className="home-video1"
              ></video>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <div className="home-max-width1 max-width-container">
          <footer className="home-footer1">
            <div className="home-container14">
              <img
                alt="image"
                src="/external/cianatanew-removebg-preview-200h.png"
                className="home-image08"
              />
              <h3 className="home-text81 Heading-3">CIANATA</h3>
              <div className="home-container15">
                <a
                  href="https://www.instagram.com/cianatagram/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link05"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon28"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/people/Cianata/61555814410893/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link06"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="home-icon30"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <div className="home-container16">
                  <a
                    href="https://twitter.com/CianataX"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link07"
                  >
                    <img
                      alt="image"
                      src="/sl_z_072523_61700_05.svg"
                      className="home-image09"
                    />
                  </a>
                </div>
              </div>
              <span className="home-text82">
                809, Thodiyoor P.O, Karunagappally, Kollam
              </span>
              <span className="home-text83">+91 623 817 6858</span>
              <span className="home-text84">contact@cianata.com</span>
              <span className="home-text85">
                <span>©2024 Cianata</span>
                <br></br>
              </span>
            </div>
            <div className="home-links-container">
              <div className="home-container17">
                <span className="home-text88">Quick links</span>
                <Link to="/contact" className="home-navlink7">
                  Contact us
                </Link>
                <a href="#pricing" className="home-link08">
                  Pricing
                </a>
                <Link to="/blog" className="home-navlink8">
                  Blogs
                </Link>
                <a href="#Services" className="home-link09">
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

export default Home
