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
                <a href="#gallery" className="nav__link">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#blog-section" className="nav__link">
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            officia, omnis, nisi recusandae dolore ducimus deserunt amet
            deleniti nam id modi optio labore vel excepturi minus corrupti
            ipsam, cupiditate provident.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              praesentium ab sunt quisquam quasi. Veniam nobis?
            </h3>
          </div>

          <div className="abou__donar">
            <div>
              <h2 className="donar__heading">About Blood Doners</h2>
              <p className="doner__details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                reiciendis atque voluptates nemo odio numquam tempora,
                doloremque sint ipsa est ullam, repellat, architecto fugit
                recusandae totam minima autem dolorem ducimus. Voluptate atque
                obcaecati odit officiis facere, praesentium consectetur non
                ducimus quibusdam magnam tempore, reiciendis velit. Distinctio
                incidunt porro, rerum ratione voluptatum reiciendis velit.
                Distinctio incidunt porro, rerum ratione voluptatum.
              </p>
              <p className="doner__details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                reiciendis atque voluptates nemo odio numquam tempora,
                doloremque sint ipsa est ullam, repellat, architecto fugit
                obcaecati odit officiis facere, praesentium.
              </p>
              <p className="doner__details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                doloremque sint ipsa est ullam, repellat, architecto fugit
                recusandae totam minima autem dolorem ducimus. Voluptate atque
                obcaecati odit officiis facere, praesentium consectetur non
                ducimus quibusdam magnam tempore, reiciendis velit. Distinctio
                incidunt porro, rerum ratione voluptatum omnisreiciendis velit.
                Distinctio incidunt porro, rerum ratione voluptatum.
              </p>
              <p className="doner__details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                doloremque sint ipsa est ullam, repellat, architecto fugit
                recusandae totam minima autem dolorem ducimus. Voluptate atque
                obcaecati odit officiis facere, praesentium consectetur non
                ducimus quibusdam magnam tempore, reiciendis velit. Distinctio
                incidunt porro, rerum ratione voluptatum omnis corrupti fugit
                facere aut debitis, ad minus itaque aspernatur.
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
          {/* blog-banner section starts here */}
          <section id="blog-banner-section" className="banner">
            <article>
              <h1 className="banner__heading">Blood Donation</h1>
              <p className="banner__decription text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                voluptate aperiam atque velit nisi vero placeat sapiente iusto
                impedit at ea delectus, voluptatibus quibusdam architecto iure
                ipsa laborum maxime corrupti.
              </p>
            </article>
            <aside>
              <img
                className="banner__image"
                src={blog1}
                alt="Cover_photo_not_find"
              />
            </aside>
          </section>
          {/* blog-banner section ends here */}
          {/* archieves section starts here */}
          <section id="archieves" className="section-center">
            <h2 className="section__heading archieves__heading">Archieves</h2>
            <div className="archieves-container">
              <ul className="archieves__lists">
                <li className="archieves__list">
                  <img
                    className="archieves__image"
                    src="Img (4).jpg"
                    alt="image1"
                  />
                </li>
                <li className="archieves__list">
                  <img
                    className="archieves__image"
                    src="Img (2).jpg"
                    alt="image2"
                  />
                </li>
                <li className="archieves__list">
                  <img
                    className="archieves__image"
                    src="Img (1).jpg"
                    alt="image3"
                  />
                </li>
                <li className="archieves__list">
                  <img
                    className="archieves__image"
                    src="Img (3).jpg"
                    alt="image4"
                  />
                </li>
              </ul>
            </div>
          </section>
          {/* archieves section ends here */}
          {/* blog-posts section starts here */}
          <section id="blog-posts" className="section-center">
            <h2 className="section__heading">Blog Posts</h2>
            <div className="blog-posts">
              <div className="blog-post">
                <aside className="blog-post__aside">
                  <img className="img__center" src="Img (3).jpg" alt="image1" />
                </aside>
                <article className="blog-post__content">
                  <h2 className="blog-post__heading">Blog 1</h2>
                  <h3 className="blog-post__sub-heading">
                    this is subtitle here
                  </h3>
                  <p className="blog-post__description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Magnam, possimus cupiditate maxime ex eum harum eos facere
                    veniam. Nostrum maiores atque veniam odio delectus voluptas
                    expedita voluptates beatae vitae mollitia.
                  </p>
                  <button className="btn blog-post__btn">Learn More</button>
                </article>
              </div>
              <div className="blog-post">
                <aside className="blog-post__aside">
                  <img className="img__center" src="Img (2).jpg" alt="image1" />
                </aside>
                <article className="blog-post__content">
                  <h2 className="blog-post__heading">Blog 2</h2>
                  <h3 className="blog-post__sub-heading">
                    this is subtitle here
                  </h3>
                  <p className="blog-post__description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Magnam, possimus cupiditate maxime ex eum harum eos facere
                    veniam. Nostrum maiores atque veniam odio delectus voluptas
                    expedita voluptates beatae vitae mollitia.
                  </p>
                  <button className="btn blog-post__btn">Learn More</button>
                </article>
              </div>
              <div className="blog-post">
                <aside className="blog-post__aside">
                  <img className="img__center" src="Img (1).jpg" alt="image1" />
                </aside>
                <article className="blog-post__content">
                  <h2 className="blog-post__heading">Blog 3</h2>
                  <h3 className="blog-post__sub-heading">
                    this is subtitle here
                  </h3>
                  <p className="blog-post__description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Magnam, possimus cupiditate maxime ex eum harum eos facere
                    veniam. Nostrum maiores atque veniam odio delectus voluptas
                    expedita voluptates beatae vitae mollitia.
                  </p>
                  <button className="btn blog-post__btn">Learn More</button>
                </article>
              </div>
            </div>
          </section>
          {/* blog-posts section ends here */}
          {/* contact section starts here */}
          <section id="contract-section" className="section-center">
            <h2 className="section__heading text-color">Contact Me</h2>
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
