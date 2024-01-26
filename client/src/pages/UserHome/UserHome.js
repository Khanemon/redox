import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../Styles/UserHome.css";
import about_img from "../../Images/about.jpg";
import blog1 from "../../Images/blog_01.jpg";
import logo from "../../Images/logo2.png";

const UserHome = () => {
  return (
    <>
      <div>
        <div id="slider-go"></div>
        <div id="project-header"></div>
        {/* ****************** header starts here ****************** */}
        <header id="project-header">
          <div className="project__logo">
            <figure className="pro__logo">
              <a href="#slider-go">
                <img src={logo} alt="project-logo" />
              </a>{" "}
            </figure>
            <h1 className="prohead__red">RED</h1>
            <h1 className="prohead__oxy">OXYGEN</h1>
          </div>
          <nav id="menu-icon" className="hidden">
            <ul className="nav">
              <li>
                <a href="#project-header" className="nav__link">
                  Home
                </a>
              </li>
              <li>
                <a href="#blog-about" className="nav__link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#Alter__place" className="nav__link">
                  Process
                </a>
              </li>
              <li>
                <a href="#blog-banner-section" className="nav__link">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#blog-posts" className="nav__link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contract-section" className="nav__link">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          <Link className="sign__in" to="/login">
            <i className="fa-solid fa-user" />
            <div>SIGN IN</div>
          </Link>
        </header>
        {/* ****************** header ends here ****************** */}

        {/* ################# Slider Starts Here #######################-*/}
        <div id="slider-go" className="slider-detail">
          <h1 className="slider__heading">Donate Blood &amp; Save life</h1>
          <h3 className="slider__details">
            Welcome to our community at RED OXYGEN. We're delighted you're here.
            Your presence adds value to our shared commitment. Explore our
            platform, where every click represents a step towards positive
            change. Create a account on our website and be a part of our family.
          </h3>
          <div className="slider__btn">
            <button className="slbtn__design btn1">Donate Now</button>
            <button className="slbtn__design btn2">Find Donar</button>
          </div>
        </div>
        <div id="blog-about"></div>
        {/* ################# Slider Ends Here #######################-*/}

        {/* ****************** about-us section starts here ****************** */}
        <section id="blog-about">
          <div className="about__sec">
            <h2 className="abo-us__heading">About Us</h2>
            <h3 className="abo-us__details">
              RED OXYGEN is an automated blood service that connects blood
              searchers with voluntary blood donors.
            </h3>
          </div>

          <div className="abou__donar">
            <div>
              <h2 className="donar__heading">About Blood Doners</h2>
              <p className="doner__details">
                Blood donors play a pivotal role in the healthcare system,
                contributing to the well-being and survival of countless
                individuals in need. These selfless individuals voluntarily give
                the gift of life by donating their blood, a precious resource
                that cannot be manufactured. Each donation has the potential to
                save lives during emergencies, surgeries, and treatments for
                various medical conditions. The act of donating blood is a
                simple yet profound way for individuals to make a direct and
                immediate impact on the health and recovery of others within
                their community.
              </p>
              <p className="doner__details">
                The significance of blood donors becomes particularly evident in
                times of crisis or disasters when the demand for blood may
                surge. Their commitment ensures that hospitals and medical
                facilities have an adequate and readily available supply of
                blood products to meet the urgent needs of patients. Beyond
                emergencies, regular blood donations contribute to the
                maintenance of a stable blood supply, supporting ongoing medical
                treatments for chronic conditions and routine surgical
                procedures. The generosity of blood donors fosters a sense of
                community and collective responsibility, as they come together
                to provide a lifeline for those facing health challenges.
              </p>
              <p className="doner__details">
                Being a blood donor is not just about the act of giving; it is a
                commitment to the well-being of others and a demonstration of
                compassion and solidarity. Blood donors embody the spirit of
                altruism, showcasing how individual actions can collectively
                make a profound impact on the health and vitality of a
                community. Their dedication to saving lives creates a ripple
                effect of positivity and underscores the powerful role that
                individuals can play in contributing to the greater good of
                society.
              </p>
            </div>
            <img src={about_img} alt="about-img" />
          </div>
        </section>
        {/* ****************** about-ue section ends here ****************** */}

        {/* ################# Blood Alternative Starts Here #######################-*/}
        <div className="alter__devider overflow">
          <div className="alter__left">
            <div className="cell">
              <a
                className="alt__lef-data lef-data1"
                href="https://blood.quantummethod.org.bd/en/detail/static_content/3030fc94-4a5a-11e5-9567-3a93921bf678"
              >
                Donate Blood on Your 19th Birthday
              </a>
              {/**/}
            </div>
            <div className="grid-x">
              <div id="Alter__place" className="cell text-center">
                <a
                  className="alt__lef-data lef-data2"
                  href="https://blood.quantummethod.org.bd/en/detail/static_content/7eb309da-939c-11e5-815b-81f2a1cc9ed5"
                >
                  {" "}
                  Quantum Voluntary Blood Donation Program- Blood Camp
                </a>
              </div>
            </div>
          </div>
          {/* Outer layer */}
          <div className="cell large-5 round-section">
            <div className="large-round">
              <div className="grid-x">
                <a
                  className="alter__nam"
                  href="https://blood.quantummethod.org.bd/en/detail/static_content/a270dd7a-939c-11e5-9b6b-5133b3d34178"
                >
                  <div>
                    <h3
                      className="heading-text ng-star-inserted"
                      style={{ fontSize: "1.2em" }}
                    >
                      <span className="alter__nam nampos1">
                        Blood and Blood Content
                      </span>
                      <img
                        src="/assets/images/icon_blood_and_blood_content.png"
                        alt="rokto-o-rokter-upadan"
                        className="blood-cell-image position1"
                      />
                    </h3>
                  </div>
                </a>
              </div>
              <div className="grid-x disallow">
                <a
                  className="alter__nam"
                  href="https://blood.quantummethod.org.bd/en/detail/static_content/6c92d618-965f-11e8-8474-276b5d993090"
                >
                  <div>
                    <h3
                      className="heading-text ng-star-inserted"
                      style={{ fontSize: "1.2em" }}
                    >
                      <span className="alter__nam nampos2">
                        When You Can’t Donate Blood
                      </span>
                      <img
                        src="/assets/images/icon_when_you_can_not_donate_blood.png"
                        alt="rokto-porisonchalon"
                        className="blood-cell-image position2"
                      />
                    </h3>
                  </div>
                </a>
              </div>
              <div className="grid-x after-donate">
                <a
                  className="alter__nam"
                  href="https://blood.quantummethod.org.bd/en/detail/static_content/ab3e89e4-965e-11e8-9990-7c51fac63a57"
                >
                  <div>
                    <h3
                      className="heading-text ng-star-inserted"
                      style={{ fontSize: "1.2em" }}
                    >
                      <span className="nampos3">Post Blood Donation</span>
                      <img
                        src="/assets/images/icon_post_blood_donation.png"
                        alt="rokto-vhalo-rakben-kivabe"
                        className="blood-cell-image position3"
                      />
                    </h3>
                  </div>
                </a>
              </div>
              <div className="grid-x blood-history">
                <a
                  className="alter__nam"
                  href="https://blood.quantummethod.org.bd/en/history"
                >
                  <div>
                    {/**/}
                    <h3
                      className="heading-text ng-star-inserted"
                      style={{ fontSize: "1.2em" }}
                    >
                      <span className="nampos4">History of Blood Donation</span>
                      <img
                        src="/assets/images/icon_history_of_blood_donation.png"
                        alt="rokter-etihash"
                        className="blood-cell-image position4"
                      />
                    </h3>
                  </div>
                </a>
              </div>
              <div className="grid-x inner-round">
                <div className="grid-x innr-tex">
                  <h2>There’s NO Alternative of Blood</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ################# Blood Alternative Ends Here #######################-*/}

        <main>
          {/* =============================== blog-banner section starts here ============================ */}
          <section id="blog-banner-section" className="banner__image2 banner">
            <div>
              <h1 className="banner__heading">Blood Donation Prccess</h1>
              <div className="banne__card">
                <div className="card1 ban__card">
                  <h3>Registration</h3>
                  <p>
                    Donors begin by registering at a blood donation center or a
                    mobile blood drive. This typically involves providing
                    identification and basic contact information.
                  </p>
                </div>
                <div className="card2 ban__card">
                  <h3>Health Screenin</h3>
                  <p>
                    Donors undergo a brief health screening to ensure they meet
                    the eligibility criteria for donation. This includes
                    assessing general health, checking hemoglobin levels, and
                    reviewing medical history.
                  </p>
                </div>
                <div className="card3 ban__card">
                  <h3>Donation</h3>
                  <p>
                    The actual donation is a quick and relatively painless
                    process. A trained phlebotomist inserts a sterile needle
                    into a vein, usually in the arm, and collects a standard
                    unit of blood. The donation process typically takes around
                    10-15 minutes.
                  </p>
                </div>
                <div className="card4 ban__card">
                  <h3>Rest and Refreshments</h3>
                  <p>
                    After donation, donors are encouraged to rest for a short
                    period and enjoy some refreshments. This helps ensure their
                    well-being before leaving the donation site.
                  </p>
                </div>
                <div className="card5 ban__card">
                  <h3>Post-Donation Care</h3>
                  <p>
                    Donors are advised to stay hydrated and avoid strenuous
                    physical activities for the rest of the day. It's essential
                    to follow any specific post-donation guidelines provided by
                    the donation center.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* --------------------------- blog-banner section ends here --------------------------------------------- */}
          {/* =================== blog-posts section starts here ======================= */}
          <div id="blog-posts" className="section-center blog__main">
            <h2 className="blog__heading">Blog Posts</h2>
            <div className="blog-posts">
              <div className="blog-post">
                <div className="blog-post__img">
                  <img
                    className="blog__img"
                    src="/assets/images/blog_pic1.png"
                    alt="image1"
                  />
                </div>
                <div className="blog-post__content">
                  <h3 className="blog-post__sub-heading">
                    Doctor is consulting patients
                  </h3>
                  <p className="blog-post__description">
                    The clinical services are provided from 13 health facilities
                    in 11 camps and two host communities. A total of 50,567
                    people (camp settlements: 45,864 and host: 4,703) were
                    reached through clinical services, Community-Based Health
                    and First Aid (CBHFA) message dissemination and Psychosocial
                    Support (PSS) at various health or community facilities.
                  </p>
                  <button className="btn blog-post__btn">Learn More</button>
                </div>
              </div>
              <div className="blog-post">
                <aside className="blog-post__aside">
                  <img
                    className="img__center"
                    src="/assets/images/blog_pic2.png"
                    alt="image1"
                  />
                </aside>
                <article className="blog-post__content">
                  <h3 className="blog-post__sub-heading">
                    Conducting volunteer
                  </h3>
                  <p className="blog-post__description">
                    Community-Based Psychosocial Support(CBPSS). Centerbased
                    activities (1347 people, in Camps 13, 14, 17 and 19). Mental
                    Health and Psychosocial Support (MHPSS) in Health Facilities
                    (191 people in Camps 2E, 13, 12 and 15), 1,539 people were
                    provided with mental health or psycho-social support in Camp
                    17; 55 people were provided with mental health.
                  </p>
                  <button className="btn blog-post__btn">Learn More</button>
                </article>
              </div>
              <div className="blog-post">
                <aside className="blog-post__aside">
                  <img
                    className="img__center"
                    src="/assets/images/blog_pic3.png"
                    alt="image1"
                  />
                </aside>
                <article className="blog-post__content">
                  <h3 className="blog-post__sub-heading">
                    Workshop on the Multi-hazard Preparedness
                  </h3>
                  <p className="blog-post__description">
                    76 Union Disaster Management Committee (UDMC) members
                    including 65 males and 11 females from Ramu sub-district
                    received inclusive DRM training envisioned to facilitate
                    community-driven preparedness and response activities in
                    Garjonia and Kachhapia unions. 164 Ward-level Disaster
                    Management Committee (WDMC) 121 members do.
                  </p>
                  <button className="btn blog-post__btn">Learn More</button>
                </article>
              </div>
            </div>
          </div>
          {/* blog-posts section ends here */}
          {/* contact section starts here */}
          <section id="contract-section" className="section-center">
            <h2 className="conct__ush">Contact Us</h2>
            <form>
              <div className="form-control">
                <label htmlFor="name">Name</label>
                <input type="name" id="name" autoComplete="name" required />
              </div>
              <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" autoComplete="email" required />
              </div>
              <div className="form-control">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" defaultValue={""} />
              </div>
              <div className="form-control from-btn-field">
                <button className="btn contact__btn">Submit</button>
              </div>
            </form>
          </section>
          {/* contact section ends here */}
        </main>
        {/* footer section starts here */}
        <footer className="footer">
          <p className="copyright__text">
            Copyright © by Emon Khan. All rights reserved
          </p>
          <nav className="footer__nav">
            <a href="#sign__in" className="footer__link icon1">
              <i className="fa fa-home footer__icon" />
            </a>
            <a
              href="https://www.facebook.com/MD.Emon.Hossain.Khan.Bengir"
              rel="noopener"
              className="footer__link icon2"
            >
              <i className="fab fa-facebook footer__icon" />
            </a>
            <a
              href="https://youtube.com/@emonhossainkhanbengir1307"
              // target="_blank"
              rel="noopener"
              className="footer__link icon3"
            >
              <i className="fab fa-youtube footer__icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/emon-hossain-khan-bengir-78707322b"
              // target="_blank"
              rel="noopener"
              className="footer__link icon4"
            >
              <i className="fab fa-linkedin footer__icon" />
            </a>
            <a
              href="https://github.com/Khanemon"
              // target="_blank"
              rel="noopener"
              className="footer__link icon5"
            >
              <i className="fab fa-github footer__icon" />
            </a>
          </nav>
        </footer>
        {/* footer section ends here */}
      </div>
    </>
  );
};

export default UserHome;
