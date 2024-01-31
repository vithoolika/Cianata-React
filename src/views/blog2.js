import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './blog2.css'

const Blog2 = (props) => {
  return (
    <div className="blog2-container">
      <Helmet>
        <title>Blog2 - Cianata</title>
        <meta
          name="description"
          content="Discover excellence in web and app development with Cianata. From stunning designs to powerful apps, we redefine digital success. Explore with us now!"
        />
        <meta property="og:title" content="Blog2 - Cianata" />
        <meta
          property="og:description"
          content="Discover excellence in web and app development with Cianata. From stunning designs to powerful apps, we redefine digital success. Explore with us now!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ed6350b0-e4c0-40f3-8286-ad2cb4623861/501229ca-afa4-48e1-9e6f-10837214ccce?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="blog2-navbar">
        <header data-role="Header" className="blog2-header max-width-container">
          <div className="blog2-navbar1">
            <div className="blog2-middle">
              <div className="blog2-left">
                <Link to="/contact" className="blog2-text navbar-link">
                  BOOK A CALL
                </Link>
                <a
                  href="https://wa.me/+916238176858?text=Hello%20there,%20I%20wanted%20to%20know%20more."
                  target="_blank"
                  rel="noreferrer noopener"
                  className="blog2-text01 navbar-link"
                >
                  CHAT
                </a>
                <Link to="/" className="blog2-text02 navbar-link">
                  <span>SERVICES</span>
                  <br></br>
                </Link>
              </div>
              <div className="blog2-container1">
                <img
                  alt="image"
                  src="/external/cianatanew-removebg-preview-200h.png"
                  className="blog2-image"
                />
                <Link to="/" className="blog2-logo-center navbar-logo-title">
                  CIANATA
                </Link>
              </div>
              <div className="blog2-right">
                <Link to="/" className="blog2-text05 navbar-link">
                  PRICING
                </Link>
                <Link to="/blog" className="blog2-text06 navbar-link">
                  BLOG
                </Link>
                <Link to="/contact" className="blog2-text07 navbar-link">
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
          <div data-role="BurgerMenu" className="blog2-burger-menu">
            <svg viewBox="0 0 1024 1024" className="blog2-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="blog2-mobile-menu">
            <div className="blog2-nav">
              <div className="blog2-container2">
                <span className="blog2-logo-center1">CIANATA</span>
                <div
                  data-role="CloseMobileMenu"
                  className="blog2-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="blog2-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="blog2-middle1">
                <Link to="/contact" className="blog2-text08">
                  BOOK A CALL
                </Link>
                <a
                  href="https://wa.me/+916238176858?text=Hello%20there,%20I%20wanted%20to%20know%20more."
                  target="_blank"
                  rel="noreferrer noopener"
                  className="blog2-text09"
                >
                  CHAT
                </a>
                <Link to="/" className="blog2-text10">
                  PRICING
                </Link>
                <Link to="/" className="blog2-text11">
                  SERVICES
                </Link>
                <Link to="/blog" className="blog2-text12">
                  BLOG
                </Link>
                <Link to="/contact" className="blog2-text13">
                  CONTACT
                </Link>
              </div>
            </div>
            <div>
              <div className="blog2-container3">
                <a
                  href="https://www.instagram.com/cianatagram/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="blog2-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="blog2-icon04"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/people/Cianata/61555814410893/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="blog2-link1"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="blog2-icon06"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/CianataX"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="blog2-link2"
                >
                  <img
                    alt="image"
                    src="/sl_z_072523_61700_05.svg"
                    className="blog2-image1"
                  />
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="blog2-hero">
        <div className="blog2-container4">
          <h1 className="blog2-text14">
            Performance-Based SMM: A Win-Win Proposition:
          </h1>
          <span className="blog2-text15">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis.
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
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
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
          </span>
        </div>
      </div>
      <div className="blog2-banner">
        <span className="blog2-text22">
          <span>
            In the dynamic realm of digital marketing, your business deserves a
            strategy that not only generates visibility but also ensures a
            positive return on investment. At Cianata, we redefine Social Media
            Marketing (SMM) by aligning our success with yours. Our unique
            performance-based model charges only on the revenue generated after
            covering your existing revenue and advertising spend. Let&apos;s
            delve into how this innovative approach can elevate your brand in
            the world of social media.
          </span>
          <br></br>
          <span>Performance-Based SMM: A Win-Win Proposition:</span>
          <br></br>
          <span>1. Risk-Free Investment:</span>
          <br></br>
          <span>
            Say goodbye to upfront costs and uncertainties. Our
            performance-based model means you only pay when you see tangible
            results. It&apos;s a risk-free investment, allowing you to allocate
            resources more efficiently.
          </span>
          <br></br>
          <br></br>
          <span>2. Aligned Incentives:</span>
          <br></br>
          <span>
            We&apos;re invested in your success. Our model aligns our incentives
            with yours – the more successful your campaign, the more we both
            benefit. This creates a true partnership where our success is
            intertwined with yours.
          </span>
          <br></br>
          <br></br>
          <span>3. Strategic Optimization:</span>
          <br></br>
          <span>
            Our team doesn&apos;t just stop at launching campaigns; we
            continuously analyze, refine, and optimize your social media
            strategy. This ensures that every penny spent contributes to revenue
            growth, providing a higher return on investment.
          </span>
          <br></br>
          <br></br>
          <span>How It Works:</span>
          <br></br>
          <span>1. Assessment and Strategy:</span>
          <br></br>
          <span>
            We start by understanding your business, goals, and target audience.
            Our experts craft a tailored SMM strategy designed to drive
            engagement, conversions, and revenue growth.
          </span>
          <br></br>
          <br></br>
          <span>2. Implementation and Monitoring:</span>
          <br></br>
          <span>
            Once the strategy is in place, we implement and monitor your social
            media campaigns closely. Real-time analytics allow us to track
            performance and make data-driven decisions to maximize results.
          </span>
          <br></br>
          <br></br>
          <span>3. Revenue-Centric Reporting:</span>
          <br></br>
          <span>
            Our reporting goes beyond metrics. We provide transparent,
            revenue-centric reports showcasing the direct impact of social media
            efforts on your bottom line. You&apos;ll see the revenue generated
            and how it surpasses your existing revenue and ad spend.
          </span>
          <br></br>
          <br></br>
          <span>Why Choose Cianata:</span>
          <br></br>
          <span>1. Results-Driven Approach:</span>
          <br></br>
          <span>
            Our focus is on delivering measurable results. We prioritize
            strategies that contribute directly to revenue growth, ensuring a
            meaningful impact on your business.
          </span>
          <br></br>
          <br></br>
          <span>2. Transparent and Fair:</span>
          <br></br>
          <span>
            Transparency is at the core of our model. You&apos;ll have a clear
            understanding of how every dollar spent translates into revenue,
            fostering trust and collaboration.
          </span>
          <br></br>
          <br></br>
          <span>3. Expertise Across Platforms:</span>
          <br></br>
          <span>
            Whether it&apos;s Facebook, Instagram, Twitter, or LinkedIn, our SMM
            experts are well-versed in creating impactful campaigns across
            various social media platforms.
          </span>
          <br></br>
          <br></br>
          <span>Conclusion:</span>
          <br></br>
          <span>
            Step into a new era of Social Media Marketing with Cianata&apos;s
            performance-based model. Unlock the full potential of your brand
            without the financial uncertainties. It&apos;s time to redefine
            success in SMM—where your growth is our priority.
          </span>
          <br></br>
          <span>
            Ready to elevate your social media presence and revenue
            simultaneously? Contact us today, and let&apos;s embark on a journey
            of strategic and results-driven social media marketing.
          </span>
          <span>
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
      </div>
      <div className="blog2-footer">
        <div className="blog2-max-width max-width-container">
          <footer className="blog2-footer1">
            <div className="blog2-container5">
              <img
                alt="image"
                src="/external/cianatanew-removebg-preview-200h.png"
                className="blog2-image2"
              />
              <h3 className="blog2-text83 Heading-3">CIANATA</h3>
              <div className="blog2-container6">
                <a
                  href="https://www.instagram.com/cianatagram/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="blog2-link3"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="blog2-icon08"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/people/Cianata/61555814410893/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="blog2-link4"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="blog2-icon10"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <div className="blog2-container7">
                  <a
                    href="https://twitter.com/CianataX"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="blog2-link5"
                  >
                    <img
                      alt="image"
                      src="/sl_z_072523_61700_05.svg"
                      className="blog2-image3"
                    />
                  </a>
                </div>
              </div>
              <span className="blog2-text84">
                809, Thodiyoor P.O, Karunagappally, Kollam
              </span>
              <span className="blog2-text85">+91 623 817 6858</span>
              <span className="blog2-text86">contact@cianata.com</span>
              <span className="blog2-text87">
                <span>©2024 Cianata</span>
                <br></br>
              </span>
            </div>
            <div className="blog2-links-container">
              <div className="blog2-container8">
                <span className="blog2-text90">Quick links</span>
                <Link to="/contact" className="blog2-navlink">
                  Contact us
                </Link>
                <Link to="/" className="blog2-navlink1">
                  Pricing
                </Link>
                <Link to="/blog" className="blog2-navlink2">
                  Blogs
                </Link>
                <Link to="/" className="blog2-navlink3">
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

export default Blog2
