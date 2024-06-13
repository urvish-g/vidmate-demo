import React, { useEffect, useState } from "react";
import "./header.css";
import HeaderImg from "../../image/videmate.png";
import VidMate from "../../image/vidmate.png";
import ResMenu from "../../image/responsive-menu.png";
import { LANGUAGES } from "../../Assets/Language";
import { useTranslation } from "react-i18next";

const isActive = ({ isActive }: any) => `link ${isActive ? "active" : ""}`;

const Header = (props) => {
  const [width] = useWindowSize();
  const { i18n, t } = useTranslation();

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

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

  return (
    <>
      {width <= 899 ? (
        <div className="responsive_nav_wrapper">
          <div
            className="res_img_wrapper"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <img src={ResMenu} alt="res-menu" />
          </div>
          <div className="collapse header_menu" id="collapseExample">
            <div className="card card-body open_menu_wrapper">
              <a href="#download" className={isActive}>
                <p className="text-dark fs-4 text-center mb-0">
                  {t("Download")}
                </p>
              </a>
              <a href="#faq" className={isActive}>
                <p className="text-dark fs-4 text-center mb-0">{t("FAQ")}</p>
              </a>
              <a href="#home" className={isActive}>
                <p className="text-dark fs-4 text-center mb-0">{t("Home")}</p>
              </a>
            </div>
          </div>
          <div className="res_header_img_section">
            <div className="res_header_img_wrapper">
              <img src={HeaderImg} alt="VidMate" className="res_headerImg" />
              <img src={VidMate} alt="VidMate" className="res_vidmate" />
            </div>
          </div>
          <div className="res_lang_wrapper">
            <select
              defaultValue={i18n.language}
              className="form-select-dark pl-4"
              // value={selectedOption}
              onChange={onChangeLang}
            >
              {LANGUAGES.map(({ code, label }) => (
                <option key={code} value={code}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : (
        <div className="main_container">
          <div className="row">
            <div className="col-4">
              <div className="left_content_wrapper d-flex">
                <div className="header_img_wrapper d-flex">
                  <img src={HeaderImg} alt="VidMate" className="headerImg" />
                  {/* <img src={VidMate} alt="VidMate" className="vidmate" /> */}
                  {width >= 1150 ? (
                    <p className="header_title">
                      VidMate : All Video Downloader
                    </p>
                  ) : (
                    <p className="header_title">VidMate</p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="right_content_wrapper">
                <div className="header_content_wrapper d-flex flex-row-reverse bd-highlight">
                  <div className="navbar-nav nav_content_wrapper flex-row">
                    <div className="nav_content d-flex flex-row-reverse bd-highlight">
                      <select
                        defaultValue={i18n.language}
                        className="form-select-dark w-auto pl-4"
                        // value={selectedOption}
                        onChange={onChangeLang}
                      >
                        {LANGUAGES.map(({ code, label }) => (
                          <option key={code} value={code}>
                            {label}
                          </option>
                        ))}
                      </select>
                      <a href="#download" className={isActive}>
                        <p className="text-dark fs-4 text-center mb-0">
                          {t("Download")}
                        </p>
                      </a>
                      <a href="#faq" className={isActive}>
                        <p className="text-dark fs-4 text-center mb-0">
                          {t("FAQ")}
                        </p>
                      </a>
                      <a href="#home" className={isActive}>
                        <p className="text-dark fs-4 text-center mb-0">
                          {t("Home")}
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
