import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import Header from "../Header/Header";
import HomeMoImg from "../../image/4.png";
import logo2 from "../../image/videmate.png";
import starticon from "../../image/icon-stars.png";
import QRcode from "../../image/Download-Qr.png";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useTranslation } from "react-i18next";
import highDefination from "../../image/high_defination.png";
import mp3Converter from "../../image/mp_converter.png";
import fastDownload from "../../image/fast_download.png";
import vedio from "../../image/vedio.png";
import offlineShare from "../../image/offline.png";

const Home = () => {
  const [width] = useWindowSize();
  const [active, setActive] = useState(
    "download_btn text-white inactive_spinner"
  );

  const [resActive, setResActive] = useState(
    "res_download_btn text-white inactive_spinner"
  );
  const { t } = useTranslation();

  const homeRef = useRef(null);
  const downloadRef = useRef(null);

  function useWindowSize() {
    const [size, setSize] = useState([window.innerWidth]);

    useEffect(() => {
      const handleResize = () => setSize([window.innerWidth]);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return size;
  }

  const onDownloadClick = () => {
    // using Java Script method to get PDF file
    setActive("download_btn text-white active_spinner");
    setResActive("res_download_btn text-white active_spinner");
    fetch("all_video_downloader.apk").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "all_video_downloader.apk";
        alink.click();
        setActive("download_btn text-white inactive_spinner");
        setResActive("res_download_btn text-white inactive_spinner");
      });
    });
  };

  return (
    <>
      <Header homeRef={homeRef} downloadRef={downloadRef} />
      {/* <div className="Home_wrapper border">
        <div className="container border">
          <div className="row">
            <div className="col-7 border">hello</div>
            <div className="col-5 border">
              <div className="home_mobile_wrapper">
                <img src={HomeMoImg} alt="VidMate" className="headerImg" />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div>
        {width <= 600 ? (
          <div className="res_content_wrapper">
            <div className="res_content">
              <h1>VidMate</h1>
              <h3>{t("hero_bannerH1")}</h3>
              {/* <h3>Free, High Quality and Safe</h3> */}
              <div className="res_bg_container"></div>
              <div className="res_mobile_img">
                <img src={HomeMoImg} alt="VidMate" className="res_headerImg" />
              </div>
            </div>
          </div>
        ) : (
          <div className="hero_banner_section">
            <div className="home_main_banner_wrapper">
              <div className="extra_wrapper"></div>
              <div className="bg_wrapper"></div>
            </div>
            <div className="banner_content_section">
              <div className="content_wrapper">
                <div className="content">
                  <h1>Vidmate : All Video Downloader</h1>
                  <h1>{t("hero_bannerH1")}</h1>
                  <h3>{t("hero_bannerH3")}</h3>
                  {width <= 899 ? (
                    <div></div>
                  ) : (
                    <NavLink
                      to="#"
                      onClick={onDownloadClick}
                      // className="download_btn text-white active_spinner"
                      className={active}
                    >
                      {t("download_btn")}
                      <div
                        class="spinner-border active_spinner text-light spinner_div"
                        role="status"
                      >
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    </NavLink>
                  )}
                </div>
              </div>
              <div className="image_wrapper">
                <img src={HomeMoImg} alt="VidMate" className="headerImg" />
              </div>
            </div>
          </div>
        )}

        <div className="features_section_wrapper">
          <div className="features_section">
            <div className="rating_section_wrapper">
              <div className="logo_wrapper">
                <img src={logo2} alt="VidMate" className="logoimage" />
              </div>
              <div className="rating_wrapper">
                <span className="rating_amount">4.9</span>
                <span className="rating_image_wrapper">
                  <img src={starticon} alt="rating" />
                </span>
                <span className="vote_counter">（989264 {t("vote")}）</span>
              </div>
            </div>
            <div className="video_downloder_text_wrapper">
              <h1 className="video_downloder_text">
                VidMate: {t("features_title")}
              </h1>
            </div>
            <div className="feature_icons_section_wrapper">
              <div className="feature_icon_wrapper">
                <div className="feature_icon_img_wrapper icon1">
                  <img src={highDefination} alt="high_defination" />
                </div>
                <h5 className="icon_content">{t("High_Definition")}</h5>
              </div>
              <div className="feature_icon_wrapper">
                <div className="feature_icon_img_wrapper icon2">
                  <img src={mp3Converter} alt="mp3_Converter" />
                </div>
                <h5 className="icon_content">{t("MP3_Converter")}</h5>
              </div>
              <div className="feature_icon_wrapper">
                <div className="feature_icon_img_wrapper icon3">
                  <img src={fastDownload} alt="fast_Download" />
                </div>
                <h5 className="icon_content">{t("Fast_Download")}</h5>
              </div>
              <div className="feature_icon_wrapper">
                <div className="feature_icon_img_wrapper icon4">
                  <img src={vedio} alt="video" />
                </div>
                <h5 className="icon_content">{t("Music_Video_Player")}</h5>
              </div>
              <div className="feature_icon_wrapper">
                <div className="feature_icon_img_wrapper icon5">
                  <img src={offlineShare} alt="offline_Share" />
                </div>
                <h5 className="icon_content">{t("Offline_Share")}</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="introduce_section">
          <div className="introduce_content_wrapper d-flex">
            <div className="introduce_img"></div>
            <div className="introduce_detail_wrapper1">
              <div className="detail_wrapper1">
                <h2>{t("Multiple_Sites_Supported")}</h2>
                <p className="mb-0">{t("Feel_free_to")}</p>
                <h4>{t("You_can_find")}</h4>
              </div>
            </div>
          </div>

          <div className="introduce_content_wrapper d-flex">
            <div className="introduce_detail_wrapper2">
              <div className="detail_wrapper2">
                <h2>{t("Status_and_Picture_Saver")}</h2>
                <p className="mb-0">{t("Save_videos_pics")}</p>
                <h4>{t("When_you_see_a")}</h4>
              </div>
            </div>
            <div className="phone_saver_img"></div>
          </div>

          <div className="introduce_content_wrapper d-flex">
            <div className="phone_download_img"></div>
            <div className="introduce_detail_wrapper1">
              <div className="detail_wrapper1">
                <h2>{t("Video_to_Mp3_Converter")}</h2>
                <p className="mb-0">{t("Save_videos_as")}</p>
                <h4>{t("VidMate_is_a_useful")}</h4>
              </div>
            </div>
          </div>

          <div className="introduce_content_wrapper d-flex">
            <div className="introduce_detail_wrapper2">
              <div className="detail_wrapper2">
                <h2>{t("Better_Download_Experiences")}</h2>
                <p className="mb-0">{t("Download_high_quality")}</p>
                <h4>{t("With_VidMate_you")}</h4>
              </div>
            </div>
            <div className="download_quality_img"></div>
          </div>

          <div className="introduce_content_wrapper d-flex">
            <div className="phone_resource_img"></div>
            <div className="introduce_detail_wrapper1">
              <div className="detail_wrapper1">
                <h2>{t("Various_Media_Resources")}</h2>
                <p className="mb-0">{t("Watch_or_listen")}</p>
                <h4>
                  {t("At_the_top_of")}
                  <br />
                  {t("Thanks_to_the")}
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="sites_supported_section" id="download">
          <div className="sites_supported_wrapper">
            <div className="sites_supported_title_wrapper">
              <h2>{t("Download_Videos_from_More_Supported_Sites")}</h2>
            </div>
          </div>
          <div className="sites_list_wrapper">
            <div className="sites_list_icon_wrapper">
              <NavLink to="/">
                <div className="site_icon_YTB"></div>
                <h5>YTB</h5>
              </NavLink>
              <NavLink to="/">
                <div className="site_icon_tiktok"></div>
                <h5>tiktok</h5>
              </NavLink>
              <NavLink to="/">
                <div className="site_icon_instagram"></div>
                <h5>instagram</h5>
              </NavLink>
              <NavLink to="/">
                <div className="site_icon_dailymotion"></div>
                <h5>dailymotion</h5>
              </NavLink>
              <NavLink to="/">
                <div className="site_icon_tumblr"></div>
                <h5>tumblr</h5>
              </NavLink>
              <NavLink to="/">
                <div className="site_icon_vimeo"></div>
                <h5>vimeo</h5>
              </NavLink>
              <NavLink to="/">
                <div className="site_icon_funnyordie"></div>
                <h5>funnyordie</h5>
              </NavLink>
              <NavLink to="/">
                <div className="site_icon_twitter"></div>
                <h5>twitter</h5>
              </NavLink>
              <NavLink to="/">
                <div className="site_icon_metacafe"></div>
                <h5>metacafe</h5>
              </NavLink>
              <NavLink to="/">
                <div className="site_icon_freemoviedownloads6"></div>
                <h5>freemoviedownloads6</h5>
              </NavLink>
              <NavLink to="/">
                <div className="site_icon_voot"></div>
                <h5>voot</h5>
              </NavLink>
              <NavLink to="/">
                <div className="site_icon_tamildbox"></div>
                <h5>tamildbox</h5>
              </NavLink>
              <NavLink to="/">
                <div className="site_icon_liveleak"></div>
                <h5>liveleak</h5>
              </NavLink>
              <NavLink to="/">
                <div className="site_icon_123movies"></div>
                <h5>123movies</h5>
              </NavLink>
              <NavLink to="/">
                <div className="site_icon_onlinemoviewatchs"></div>
                <h5>onlinemoviewatchs</h5>
              </NavLink>
              <NavLink to="/">
                <div className="site_icon_ozee"></div>
                <h5>ozee</h5>
              </NavLink>
              <NavLink to="/">
                <div className="site_icon_tamilgun"></div>
                <h5>tamilgun</h5>
              </NavLink>
              <NavLink to="/">
                <div className="site_icon_loadtop"></div>
                <h5>loadtop</h5>
              </NavLink>
              <NavLink to="/">
                <div className="site_icon_spacemov"></div>
                <h5>spacemov</h5>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="faq_section">
          <div className="faq_wrapper" id="faq">
            <div className="faq_title_wrapper">
              <h2>{t("FAQ")}</h2>
            </div>
          </div>
          <div className="faq_block_wrapper">
            <div className="faq_block_content_wrapper">
              <div className="faq_block_title_wrapper">
                <span className="title_num">1</span>
                <span className="title_name">{t("How_to_get")}</span>
              </div>
              <div className="faq_content_wrapper">
                <div className="faq_content_line"></div>
                <div className="faq_content_text">
                  <p>{t("VidMate_is_not_listed")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="faq_block_wrapper">
            <div className="faq_block_content_wrapper">
              <div className="faq_block_title_wrapper">
                <span className="title_num">2</span>
                <span className="title_name">{t("How_to_install")}</span>
              </div>
              <div className="faq_content_wrapper">
                <div className="faq_content_line"></div>
                <div className="faq_content_text">
                  <p>{t("Because_VidMate_is_an_app")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="faq_block_wrapper">
            <div className="faq_block_content_wrapper">
              <div className="faq_block_title_wrapper">
                <span className="title_num">3</span>
                <span className="title_name">{t("Is_VidMate")}</span>
              </div>
              <div className="faq_content_wrapper">
                <div className="faq_content_line"></div>
                <div className="faq_content_text">
                  <p>{t("VidMate_is_presently")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="option_wrapper">
            <div className="opt_content_wrapper">
              <NavLink
                to="/"
                className="text-decoration-none text-dark fw-bold"
              >
                {t("More")}
              </NavLink>
            </div>
          </div>
        </div>

        {width <= 899 ? (
          <div className="res_fix_btn">
            <NavLink
              to="#"
              onClick={onDownloadClick}
              // className="res_download_btn text-white"
              className={resActive}
            >
              {t("download_btn")}
              <div
                class="spinner-border active_spinner text-light spinner_div"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
            </NavLink>
          </div>
        ) : (
          <div className="QRcode_section">
            <div className="QRcode_img_wrapper">
              <img src={QRcode} alt="QR-Code" />
            </div>
            <div className="QR_content_wrapper">
              <h4>VidMate</h4>
              <p>{t("QR_text")}</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
