import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './blog.css'

const Blog = (props) => {
  return (
    <div className="blog-container">
      <Helmet>
        <title>Blog - Cianata</title>
        <meta
          name="description"
          content="Discover excellence in web and app development with Cianata. From stunning designs to powerful apps, we redefine digital success. Explore with us now!"
        />
        <meta property="og:title" content="Blog - Cianata" />
        <meta
          property="og:description"
          content="Discover excellence in web and app development with Cianata. From stunning designs to powerful apps, we redefine digital success. Explore with us now!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ed6350b0-e4c0-40f3-8286-ad2cb4623861/501229ca-afa4-48e1-9e6f-10837214ccce?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="blog-navbar">
        <header data-role="Header" className="blog-header max-width-container">
          <div className="blog-navbar1">
            <div className="blog-middle">
              <div className="blog-left">
                <Link to="/contact" className="blog-text navbar-link">
                  BOOK A CALL
                </Link>
                <a
                  href="https://wa.me/+916238176858?text=Hello%20there,%20I%20wanted%20to%20know%20more."
                  target="_blank"
                  rel="noreferrer noopener"
                  className="blog-text01 navbar-link"
                >
                  CHAT
                </a>
                <Link to="/" className="blog-text02 navbar-link">
                  <span>SERVICES</span>
                  <br></br>
                </Link>
              </div>
              <div className="blog-container01">
                <img
                  alt="image"
                  src="/external/cianatanew-removebg-preview-200h.png"
                  className="blog-image"
                />
                <Link to="/" className="blog-logo-center navbar-logo-title">
                  CIANATA
                </Link>
              </div>
              <div className="blog-right">
                <Link to="/" className="blog-text05 navbar-link">
                  PRICING
                </Link>
                <span className="navbar-link">BLOG</span>
                <Link to="/contact" className="blog-text07 navbar-link">
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
          <div data-role="BurgerMenu" className="blog-burger-menu">
            <svg viewBox="0 0 1024 1024" className="blog-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="blog-mobile-menu">
            <div className="blog-nav">
              <div className="blog-container02">
                <span className="blog-logo-center1">CIANATA</span>
                <div
                  data-role="CloseMobileMenu"
                  className="blog-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="blog-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="blog-middle1">
                <Link to="/contact" className="blog-text08">
                  BOOK A CALL
                </Link>
                <a
                  href="https://wa.me/+916238176858?text=Hello%20there,%20I%20wanted%20to%20know%20more."
                  target="_blank"
                  rel="noreferrer noopener"
                  className="blog-text09"
                >
                  CHAT
                </a>
                <Link to="/" className="blog-text10">
                  PRICING
                </Link>
                <Link to="/" className="blog-text11">
                  SERVICES
                </Link>
                <Link to="/blog" className="blog-text12">
                  BLOG
                </Link>
                <Link to="/contact" className="blog-text13">
                  CONTACT
                </Link>
              </div>
            </div>
            <div>
              <div className="blog-container03">
                <a
                  href="https://www.instagram.com/cianatagram/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="blog-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="blog-icon04"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/people/Cianata/61555814410893/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="blog-link1"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="blog-icon06"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/CianataX"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="blog-link2"
                >
                  <img
                    alt="image"
                    src="/sl_z_072523_61700_05.svg"
                    className="blog-image01"
                  />
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="blog-blog">
        <Link to="/blog1" className="blog-navlink">
          <div className="blog-container04">
            <div className="blog-blog-post-card">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fFRFQ0h8ZW58MHx8fHwxNzA2NjI0NTMzfDA&amp;ixlib=rb-4.0.3&amp;w=1400"
                image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                className="blog-image02"
              />
              <div className="blog-container05">
                <div className="blog-container06">
                  <span className="blog-text14">Web</span>
                  <span className="blog-text15">01/30/2024</span>
                </div>
                <h1 className="blog-text16">
                  The Crucial Role of Responsive Web Design in 2024
                </h1>
                <span className="blog-text17">
                  In the ever-evolving landscape of digital experiences,
                  ensuring your website caters to users across various devices
                  is no longer an option—it&apos;s a necessity. With the
                  proliferation of smartphones ...
                </span>
                <div className="blog-container07">
                  <div className="blog-profile">
                    <img
                      alt="profile"
                      src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxURUNIfGVufDB8fHx8MTcwNjYyNDUzM3ww&amp;ixlib=rb-4.0.3&amp;w=200"
                      className="blog-image03"
                    />
                    <span className="blog-text18">Jithu K</span>
                  </div>
                  <span className="blog-text19">Read More -&gt;</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="blog-container08">
          <Link to="/blog2" className="blog-navlink1">
            <div className="blog-blog-post-card1">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1573152143286-0c422b4d2175?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fFNPQ0lBTCUyME1FRElBfGVufDB8fHx8MTcwNjYyNDQ3OHww&amp;ixlib=rb-4.0.3&amp;w=1400"
                image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                className="blog-image04"
              />
              <div className="blog-container09">
                <div className="blog-container10">
                  <span className="blog-text20">SMM</span>
                  <span className="blog-text21">01/23/2024</span>
                </div>
                <h1 className="blog-text22">
                  Performance-Based SMM: A Win-Win Proposition:
                </h1>
                <span className="blog-text23">
                  In the dynamic realm of digital marketing, your business
                  deserves a strategy that not only generates visibility but
                  also ensures a positive return on investment. At Cianata, we
                  redefine Social Media ...
                </span>
                <div className="blog-container11">
                  <div className="blog-profile1">
                    <img
                      alt="profile"
                      src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE5fHxURUNIfGVufDB8fHx8MTcwNjYyNDUzM3ww&amp;ixlib=rb-4.0.3&amp;w=200"
                      className="blog-image05"
                    />
                    <span className="blog-text24">Vi Thoolika</span>
                  </div>
                  <span className="blog-text25">Read More -&gt;</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <Link to="/blog3" className="blog-navlink2">
          <div className="blog-container12">
            <div className="blog-blog-post-card2">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1573496546735-c274b1fd186b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxJVCUyMHxlbnwwfHx8fDE3MDY2ODY1NzR8MA&amp;ixlib=rb-4.0.3&amp;w=1400"
                image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                className="blog-image06"
              />
              <div className="blog-container13">
                <div className="blog-container14">
                  <span className="blog-text26">IT</span>
                  <span className="blog-text27">01/22/2024</span>
                </div>
                <h1 className="blog-text28">
                  What Small Businesses Should Look for in an IT Provider
                </h1>
                <span className="blog-text29">
                  Selecting the right IT provider can be a challenging process
                  for small business owners. The wrong provider can end up
                  costing you time, money ...
                </span>
                <div className="blog-container15">
                  <div className="blog-profile2">
                    <img
                      alt="profile"
                      src="https://images.unsplash.com/photo-1597733336794-12d05021d510?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fFRFQ0h8ZW58MHx8fHwxNzA2NjI0NTMzfDA&amp;ixlib=rb-4.0.3&amp;w=200"
                      className="blog-image07"
                    />
                    <span className="blog-text30">Abel M</span>
                  </div>
                  <span className="blog-text31">Read More -&gt;</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/blog4" className="blog-navlink3">
          <div className="blog-container16">
            <div className="blog-blog-post-card3">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1601034913836-a1f43e143611?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxBUFB8ZW58MHx8fHwxNzA2Njg2OTc5fDA&amp;ixlib=rb-4.0.3&amp;w=1400"
                image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                className="blog-image08"
              />
              <div className="blog-container17">
                <div className="blog-container18">
                  <span className="blog-text32">APP</span>
                  <span className="blog-text33">01/19/2024</span>
                </div>
                <h1 className="blog-text34">
                  How to Determine If Your Business Needs a Mobile App
                </h1>
                <span className="blog-text35">
                  Mobile apps have become an integral part of our daily lives.
                  From shopping and entertainment to productivity and education,
                  there&apos;s an app for almost everything. As a result, many
                  businesses are considering ...
                </span>
                <div className="blog-container19">
                  <div className="blog-profile3">
                    <img
                      alt="profile"
                      src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE5fHxURUNIfGVufDB8fHx8MTcwNjYyNDUzM3ww&amp;ixlib=rb-4.0.3&amp;w=200"
                      className="blog-image09"
                    />
                    <span className="blog-text36">Vi Thoolika</span>
                  </div>
                  <span className="blog-text37">Read More -&gt;</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/blog5" className="blog-navlink4">
          <div className="blog-blog-post-card4">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1489436969537-cf0c1dc69cba?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fEhPU1RJTkd8ZW58MHx8fHwxNzA2NjI0MjA2fDA&amp;ixlib=rb-4.0.3&amp;w=1400"
              image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
              className="blog-image10"
            />
            <div className="blog-container20">
              <div className="blog-container21">
                <span className="blog-text38">Hosting</span>
                <span className="blog-text39">01/08/2024</span>
              </div>
              <h1 className="blog-text40">
                Unveiling the Power of Hosting: A Deep Dive into Cianata&apos;s
                Hosting Services
              </h1>
              <span className="blog-text41">
                In the digital age, where every click matters, the foundation of
                your online presence rests on reliable and robust hosting
                services. At Cianata, we understand that hosting is more than
                just a technicality ...
              </span>
              <div className="blog-container22">
                <div className="blog-profile4">
                  <img
                    alt="profile"
                    src="https://images.unsplash.com/photo-1597733336794-12d05021d510?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fFRFQ0h8ZW58MHx8fHwxNzA2NjI0NTMzfDA&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="blog-image11"
                  />
                  <span className="blog-text42">Abel M</span>
                </div>
                <span className="blog-text43">Read More -&gt;</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="blog-footer">
        <div className="blog-max-width max-width-container">
          <footer className="blog-footer1">
            <div className="blog-container23">
              <img
                alt="image"
                src="/external/cianatanew-removebg-preview-200h.png"
                className="blog-image12"
              />
              <h3 className="blog-text44 Heading-3">CIANATA</h3>
              <div className="blog-container24">
                <a
                  href="https://www.instagram.com/cianatagram/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="blog-link3"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="blog-icon08"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/people/Cianata/61555814410893/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="blog-link4"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="blog-icon10"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <div className="blog-container25">
                  <a
                    href="https://twitter.com/CianataX"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="blog-link5"
                  >
                    <img
                      alt="image"
                      src="/sl_z_072523_61700_05.svg"
                      className="blog-image13"
                    />
                  </a>
                </div>
              </div>
              <span className="blog-text45">
                809, Thodiyoor P.O, Karunagappally, Kollam
              </span>
              <span className="blog-text46">+91 623 817 6858</span>
              <span className="blog-text47">contact@cianata.com</span>
              <span className="blog-text48">
                <span>©2024 Cianata</span>
                <br></br>
              </span>
            </div>
            <div className="blog-links-container">
              <div className="blog-container26">
                <span className="blog-text51">Quick links</span>
                <Link to="/contact" className="blog-navlink5">
                  Contact us
                </Link>
                <Link to="/" className="blog-navlink6">
                  Pricing
                </Link>
                <Link to="/blog" className="blog-navlink7">
                  Blogs
                </Link>
                <Link to="/" className="blog-navlink8">
                  Services
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Blog
