import './header.styles.scss';
import '../../i18n';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import ModalDownload from '../../components/modal-download/modal-download';

const Header = ({ windowDimensions }) => {
  // list images
  const images = {
    logoHeader: process.env.PUBLIC_URL + '/images/header/logo.png',
    downloadButton: process.env.PUBLIC_URL + '/images/header/download.png',
    iconSelect:
      process.env.PUBLIC_URL + '/images/header/icon-select-header.png',
    flagEngland: process.env.PUBLIC_URL + '/images/header/england-flag.jpg',
    flagVietnam: process.env.PUBLIC_URL + '/images/header/vietnam-flag.jpg',
    flagKorean: process.env.PUBLIC_URL + '/images/header/korea-flag.jpg',
  };

  // translation
  const { t, i18n } = useTranslation();

  // menu pc
  const [statusLang, setStatusLang] = useState(false);
  const [statusLangButton, setStatusLangButton] = useState(true);

  const setLangTrue = () => {
    setStatusLangButton(false);
    let dropLang = document.getElementById('drop-lang');
    let LangEN = document.getElementById('langEN');
    let LangKO = document.getElementById('langKO');
    let LangVI = document.getElementById('langVI');

    dropLang.classList.add('open');
    setTimeout(() => {
      LangEN.classList.add('open');
    }, 0);
    setTimeout(() => {
      LangKO.classList.add('open');
    }, 200);
    setTimeout(() => {
      LangVI.classList.add('open');
    }, 400);

    setTimeout(() => {
      setStatusLangButton(true);
    }, 1000);
  };

  const setLangFalse = () => {
    setStatusLangButton(false);
    let dropLang = document.getElementById('drop-lang');
    let LangEN = document.getElementById('langEN');
    let LangKO = document.getElementById('langKO');
    let LangVI = document.getElementById('langVI');

    setTimeout(() => {
      LangVI.classList.remove('open');
    }, 0);
    setTimeout(() => {
      LangKO.classList.remove('open');
    }, 200);
    setTimeout(() => {
      LangEN.classList.remove('open');
    }, 400);
    setTimeout(() => {
      dropLang.classList.remove('open');
      setStatusLangButton(true);
    }, 1000);
  };

  const changeLang = (name) => {
    i18n.changeLanguage(name);
    let lang = t(`header.option_${name}.lbl`);
    setTextLang(lang);
    if (name === 'ko') {
      setFlag(images.flagKorean);
    } else if (name === 'vi') {
      setFlag(images.flagVietnam);
    } else {
      setFlag(images.flagEngland);
    }
    setStatusLang(false);
  };

  const clickStatusLang = (lang) => {
    i18n.changeLanguage(lang);
    if (windowDimensions.width < 1199.5) {
      changeLang(lang);

      clickStatusMenuMobile();

      setStatusLangMobile(!statusMenuMobile);

      hiddenLangMobile();

      let headerBox = document.getElementById('header-box');
      let headerMenuMobile = document.getElementById('header-menu-mobile');

      setTimeout(() => {
        headerMenuMobile.classList.remove('open');
        headerBox.style.display = 'flex';
      }, 450);

      setTimeout(() => {
        headerBox.classList.remove('close');
      }, 500);
    } else {
      let statusTemp = !statusLang;
      setStatusLang(statusTemp);

      if (statusTemp) {
        setLangTrue();
      } else {
        setLangFalse();
      }
    }
  };

  window.onclick = (event) => {
    if (
      statusLang &&
      !event.target.matches('.button-lang') &&
      !event.target.matches('.title-lang') &&
      !event.target.matches('.icon-down')
    ) {
      if (statusLangButton) {
        setStatusLang(false);
        setLangFalse();
      }
    }
  };

  // menu mobile
  const [statusMenuMobile, setStatusMenuMobile] = useState(false);

  const [statusLangMobile, setStatusLangMobile] = useState(false);

  const showMenuMobile = () => {
    let headerMenuMobile = document.getElementById('header-menu-mobile');
    let arrayLink = headerMenuMobile.getElementsByClassName('link-mobile');
    let menuMobileContent = document.getElementById('menu-mobile-content');
    let menuMobileSearch = document.getElementById('search-mobile-box');

    menuMobileContent.style.display = 'block';
    menuMobileSearch.style.display = 'flex';

    setTimeout(() => {
      for (let i = 0; i < arrayLink.length; i++) {
        setTimeout(() => {
          arrayLink[i].classList.add('open');
        }, i * 50);
      }
      menuMobileContent.classList.add('open');
      menuMobileSearch.classList.add('open');
    }, 50);
  };

  const hiddenMenuMobile = () => {
    let headerMenuMobile = document.getElementById('header-menu-mobile');
    let arrayLink = headerMenuMobile.getElementsByClassName('link-mobile');
    let menuMobileContent = document.getElementById('menu-mobile-content');
    let menuMobileSearch = document.getElementById('search-mobile-box');

    setTimeout(() => {
      for (let i = 0; i < arrayLink.length; i++) {
        setTimeout(() => {
          arrayLink[i].classList.remove('open');
        }, i * 50);
      }
      menuMobileContent.classList.remove('open');
      menuMobileSearch.classList.remove('open');
    }, 50);

    setTimeout(() => {
      menuMobileContent.style.display = 'none';
      menuMobileSearch.style.display = 'none';
    }, 100);
  };

  const showLangMobile = () => {
    let boxLang = document.getElementById('menu-lang-mobile');
    let LangEN = document.getElementById('langEN-mobile');
    let LangKO = document.getElementById('langKO-mobile');
    let LangVI = document.getElementById('langVI-mobile');
    let headerLang = document.getElementById('header-box-lang');

    setTimeout(() => {
      boxLang.style.display = 'block';
    }, 100);

    setTimeout(() => {
      boxLang.classList.add('open');
    }, 100);

    setTimeout(() => {
      LangEN.classList.add('open');
    }, 150);

    setTimeout(() => {
      LangKO.classList.add('open');
      headerLang.style.display = 'block';
    }, 200);

    setTimeout(() => {
      LangVI.classList.add('open');
      headerLang.classList.add('open');
    }, 250);
  };

  const hiddenLangMobile = () => {
    let boxLang = document.getElementById('menu-lang-mobile');
    let LangEN = document.getElementById('langEN-mobile');
    let LangKO = document.getElementById('langKO-mobile');
    let LangVI = document.getElementById('langVI-mobile');
    let headerLang = document.getElementById('header-box-lang');

    headerLang.classList.remove('open');
    setTimeout(() => {
      LangEN.classList.remove('open');
    }, 100);

    setTimeout(() => {
      LangKO.classList.remove('open');
    }, 50);

    setTimeout(() => {
      LangVI.classList.remove('open');
    }, 0);

    setTimeout(() => {
      boxLang.classList.remove('open');
      headerLang.style.display = 'none';
    }, 550);

    setTimeout(() => {
      boxLang.style.display = 'none';
    }, 650);
  };

  const animationMenuMobile = (statusMenu) => {
    let headerMenuMobile = document.getElementById('header-menu-mobile');
    let headerBox = document.getElementById('header-box');

    if (statusMenu === 'open') {
      headerMenuMobile.classList.add('open');
      showMenuMobile();
    } else if (statusMenu === 'close') {
      hiddenMenuMobile();
      setTimeout(() => {
        headerMenuMobile.classList.remove('open');
      }, 450);
    } else if (statusMenu === 'showLang') {
      hiddenMenuMobile();
      headerBox.classList.add('close');
      setTimeout(() => {
        headerBox.style.display = 'none';
      }, 0);
    } else {
      setTimeout(() => {
        headerBox.style.display = 'flex';
      }, 500);

      setTimeout(() => {
        headerBox.classList.remove('close');
      }, 450);

      setTimeout(() => {
        showMenuMobile();
      }, 1000);
    }
  };

  const clickLangMobile = () => {
    let tempStatus = !statusLangMobile;
    setStatusLangMobile(tempStatus);

    if (tempStatus) {
      animationMenuMobile('showLang');
      showLangMobile();
    } else {
      hiddenLangMobile();
      animationMenuMobile('hiddenLang');
    }
  };

  const scrollCLick = (className) => {
    let getClass = document.getElementsByClassName(className)[0];
    if (getClass) {
      window.scrollTo(0, getClass.offsetTop);
    }
  };

  const removeActive = () => {
    listClass.forEach((element) => {
      let getClass = document.getElementsByClassName(element)[0];
      if (getClass.classList.contains('active')) {
        getClass.classList.remove('active');
      }
    });
  };

  const clickStatusMenuMobile = (id) => {
    let statusTeam = !statusMenuMobile;
    setStatusMenuMobile(statusTeam);
    if (statusTeam) {
      animationMenuMobile('open');
    } else {
      animationMenuMobile('close');
    }
    scrollCLick(id);
  };

  useEffect(() => {
    let listClassElement = [];
    listClassSection.forEach((element) => {
      listClassElement.push(document.getElementById(element));
    });
    setListOffsetTop(listClassElement);

    const scrollSetActive = () => {
      listOffsetTop.forEach((element, index) => {
        let getClassItem = document.getElementsByClassName(listClass[index])[0];
        if (window.pageYOffset + 10 > element.offsetTop) {
          if (!getClassItem.classList.contains('active')) {
            removeActive();
            getClassItem.classList.add('active');
            return;
          }
        }
      });
    };

    scrollSetActive();

    const onScroll = () => {
      scrollSetActive();
    };

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [document.getElementById('products')]);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.pageYOffset >
        document.getElementById('video-introduce').offsetHeight
      ) {
        setBgColor('#020220');
      } else {
        setBgColor('');
      }
    };
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [textLang, setTextLang] = useState('English');
  const [statusButton, setStatusButton] = useState(true);

  const [flag, setFlag] = useState(images.flagEngland);

  const [bgColor, setBgColor] = useState('');

  const [show, setShow] = useState(false);
  const [listOffsetTop, setListOffsetTop] = useState([]);

  const setShowModal = () => {
    if (statusButton) {
      setShow(true);
      setStatusButton(false);
    }
  };

  const listClassSection = [
    'overview',
    'key-features',
    'core-skills',
    'our-methods',
    'feedback',
    'explore',
    'roadmap',
    'development-team',
    'footer',
  ];

  const listClass = [
    'vertical-video',
    'vertical-introduce',
    'vertical-key-features',
    'vertical-airport',
    'vertical-character',
    'vertical-item',
    'vertical-mini-game',
    'vertical-3d',
    'vertical-roadmap',
    'vertical-core-team',
  ];

  const menus = [
    { title: 'contact', section: 8 },
    { title: 'teams', section: 7 },
    { title: 'roadmap', section: 6 },
    { title: 'explore', section: 5 },
    { title: 'reviews', section: 4 },
    { title: 'our-methods', section: 3 },
    { title: 'core-skills', section: 2 },
    { title: 'key-features', section: 1 },
    { title: 'introduction', section: 0 },
  ];

  const mobileMenu = [
    { title: 'introduction', section: 0 },
    { title: 'key-features', section: 1 },
    { title: 'core-skills', section: 2 },
    { title: 'our-methods', section: 3 },
    { title: 'reviews', section: 4 },
    { title: 'explore', section: 5 },
    { title: 'roadmap', section: 6 },
    { title: 'teams', section: 7 },
    { title: 'contact', section: 8 },
  ];

  return (
    <div id='header'>
      {windowDimensions.width > 1199.5 ? (
        <div
          className='header-box'
          id='header-box'
          style={{ backgroundColor: bgColor }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt='logo-header'
          />
          <div className='box-menu'>
            {/* Download */}
            <div
              className='download'
              onClick={() => setShowModal()}
              style={{ backgroundImage: `url(${images.downloadButton}` }}
            >
              <span>{t('header.download.btn')}</span>
            </div>
            {/* Download */}

            {/* Dropdown */}
            <div
              className={'button-lang' + (statusLangButton ? '' : ' close')}
              onClick={() => clickStatusLang()}
            >
              <img className='flag' src={flag} alt='flag' />
              <span className='title-lang'>{textLang}</span>

              <img
                className={'icon-down' + (statusLang ? ' open' : '')}
                src={images.iconSelect}
                alt='logo-chevron-down'
              />

              <div className='drop-lang' id='drop-lang'>
                <div
                  className='lang'
                  id='langEN'
                  onClick={() => changeLang('en')}
                >
                  <img src={images.flagEngland} alt='flag-english' />
                  <span className='flag-title'>
                    {t('header.option_en.lbl')}
                  </span>
                </div>

                <div
                  className='lang'
                  id='langKO'
                  onClick={() => changeLang('ko')}
                >
                  <img src={images.flagKorean} alt='flag-korean' />
                  <span className='flag-title'>
                    {t('header.option_ko.lbl')}
                  </span>
                </div>

                <div
                  className='lang'
                  id='langVI'
                  onClick={() => changeLang('vi')}
                >
                  <img src={images.flagVietnam} alt='flag-vietnam' />
                  <span className='flag-title'>
                    {t('header.option_vi.lbl')}
                  </span>
                </div>
              </div>
            </div>
            {/* Dropdown */}

            {/* Menu */}
            <>
              {menus.map((item, index) => (
                <div className='menu' key={index}>
                  <button
                    className='button'
                    onClick={() => scrollCLick(listClassSection[item.section])}
                  >
                    {t(`header.${item.title}.btn`)}
                  </button>
                </div>
              ))}
            </>
            {/* Menu */}
          </div>
        </div>
      ) : (
        <div className='header-frame'>
          <div
            className='header-box'
            id='header-box'
            style={{ backgroundColor: bgColor }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt='logo-header'
            />
            <div className='box-menu'>
              <div
                className={
                  'icon-menu-mobile' + (statusMenuMobile ? ' open' : '')
                }
                onClick={() => clickStatusMenuMobile()}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div
                className='download'
                onClick={() => setShowModal()}
                style={{ backgroundImage: `url(${images.downloadButton}` }}
              >
                <span>{t('header.download.btn')}</span>
              </div>
            </div>
          </div>

          <div className='header-box-lang' id='header-box-lang'>
            <div className='box-menu-lang' onClick={() => clickLangMobile()}>
              <img
                className='icon-right-mobile'
                src={images.iconSelect}
                alt='logo-chevron-down'
              />
              {/* Language */}
            </div>
          </div>
        </div>
      )}

      {windowDimensions.width > 1199.5 ? null : (
        <div className='header-menu-mobile' id='header-menu-mobile'>
          <div className='menu-mobile-box' id='menu-mobile-box'>
            <div className='menu-mobile-content' id='menu-mobile-content'>
              {mobileMenu.map((item, index) => (
                <div key={index}>
                  <button
                    className='button'
                    onClick={() =>
                      clickStatusMenuMobile(listClassSection[item.section])
                    }
                  >
                    {t(`header.${item.title}.btn`)}
                  </button>
                </div>
              ))}

              <div
                className='button-lang-mobile'
                onClick={() => clickLangMobile()}
              >
                <img className='flag' src={flag} alt='flag-england' />
                <span className='title-lang-mobile'>{textLang}</span>

                <img
                  className='icon-left-mobile'
                  src={images.iconSelect}
                  alt='logo-chevron-down'
                />
              </div>
            </div>
            <div className='menu-lang-mobile' id='menu-lang-mobile'>
              <div
                className='lang-mobile'
                id='langEN-mobile'
                onClick={() => clickStatusLang('en')}
              >
                <img src={images.flagEngland} alt='flag-en' />

                <span className='flag-title-mobile'>
                  {t('header.option_en.lbl')}
                </span>
              </div>

              <div
                className='lang-mobile'
                id='langKO-mobile'
                onClick={() => clickStatusLang('ko')}
              >
                <img src={images.flagKorean} alt='flag-ko' />

                <span className='flag-title-mobile'>
                  {t('header.option_ko.lbl')}
                </span>
              </div>

              <div
                className='lang-mobile'
                id='langVI-mobile'
                onClick={() => clickStatusLang('vi')}
              >
                <img src={images.flagVietnam} alt='flag-vi' />

                <span className='flag-title-mobile'>
                  {t('header.option_vi.lbl')}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <ModalDownload
        show={show}
        setShow={setShow}
        setStatusButton={setStatusButton}
      />
    </div>
  );
};

export default Header;
