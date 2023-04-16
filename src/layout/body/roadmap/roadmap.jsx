import './roadmap.scss';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Roadmap = ({ windowDimensions }) => {
  const { t } = useTranslation();

  const images = {
    bgRoadmap: process.env.PUBLIC_URL + '/images/roadmap/bg-roadmap.png',
    pcArrow: process.env.PUBLIC_URL + '/images/roadmap/pc/arrow.png',
    mobileArrow: process.env.PUBLIC_URL + '/images/roadmap/mobile/arrow.png',
    pcTimeBoxAug2022:
      process.env.PUBLIC_URL + '/images/roadmap/pc/time-box-aug-2022.png',
    pcTimeBoxFeb2023:
      process.env.PUBLIC_URL + '/images/roadmap/pc/time-box-feb-2023.png',
    pcTimeBoxAug2023:
      process.env.PUBLIC_URL + '/images/roadmap/pc/time-box-aug-2023.png',
    pcTimeBoxFeb2024:
      process.env.PUBLIC_URL + '/images/roadmap/pc/time-box-feb-2024.png',
    mobileTimeBoxAug2022:
      process.env.PUBLIC_URL + '/images/roadmap/mobile/time-box-aug-2022.png',
    mobileTimeBoxFeb2023:
      process.env.PUBLIC_URL + '/images/roadmap/mobile/time-box-feb-2023.png',
    mobileTimeBoxAug2023:
      process.env.PUBLIC_URL + '/images/roadmap/mobile/time-box-aug-2023.png',
    mobileTimeBoxFeb2024:
      process.env.PUBLIC_URL + '/images/roadmap/mobile/time-box-feb-2024.png',
  };

  return (
    <div
      className='roadmap'
      style={{ backgroundImage: `url(${images.bgRoadmap})` }}
    >
      <span data-aos='fade-up' className='title-main'>
        {t('roadmap.titleMain')}
      </span>
      <>
        <div className='roadmap-box'>
          <div
            className='box-month-wrapper'
            style={{
              backgroundImage: `url(${
                windowDimensions.width > 767.5
                  ? images.pcTimeBoxAug2022
                  : images.mobileTimeBoxAug2022
              })`,
            }}
            data-aos={windowDimensions.width > 767.5 ? 'fade-left' : 'fade-up'}
            // data-aos-delay={windowDimensions.width > 767.5 ? '500' : '400'}
          >
            <div
              className='box-month'
              data-aos={
                windowDimensions.width > 767.5 ? 'fade-left' : 'fade-up'
              }
              // data-aos-delay={windowDimensions.width > 767.5 ? '200' : '100'}
            >
              <div className='bg-month green'></div>

              <span className='text green'>{t('roadmap.title2022.month')}</span>

              <div className='content-year content-year-2022'>
                {/* <ul> */}
                  <li>{t('roadmap.title2022.title1')}</li>
                  <li>{t('roadmap.title2022.title2')}</li>
                  <li>{t('roadmap.title2022.title3')}</li>
                  <li>{t('roadmap.title2022.title4')}</li>
                  <li>{t('roadmap.title2022.title5')}</li>
                  <li>{t('roadmap.title2022.title6')}</li>
                {/* </ul> */}
              </div>

              <span className='title-year title-year-2022'>2022</span>
            </div>
          </div>

          <img
            data-aos='zoom-in'
            // data-aos-delay='700'
            className='roadmap-arrow'
            alt='roadmap-arrow'
            src={
              windowDimensions.width > 767.5
                ? images.pcArrow
                : images.mobileArrow
            }
          />

          <div
            className='box-month-wrapper'
            style={{
              backgroundImage: `url(${
                windowDimensions.width > 767.5
                  ? images.pcTimeBoxFeb2023
                  : images.mobileTimeBoxFeb2023
              })`,
            }}
            data-aos={windowDimensions.width > 767.5 ? 'fade-left' : 'fade-up'}
            // data-aos-delay={windowDimensions.width > 767.5 ? '600' : '500'}
          >
            <div
              className='box-month'
              data-aos={
                windowDimensions.width > 767.5 ? 'fade-left' : 'fade-up'
              }
              // data-aos-delay={windowDimensions.width > 767.5 ? '400' : '200'}
            >
              <div className='bg-month blue'></div>
              <span className='text blue'>{t('roadmap.title2023.month')}</span>
              <div className='content-year content-year-2023'>
                <li>{t('roadmap.title2023.title1')}</li>
                <li>{t('roadmap.title2023.title2')}</li>
                <li>{t('roadmap.title2023.title3')}</li>
                <li>{t('roadmap.title2023.title4')}</li>
                <li>{t('roadmap.title2023.title5')}</li>
                <li>{t('roadmap.title2023.title6')}</li>
                <li>{t('roadmap.title2023.title7')}</li>
              </div>
              <span className='title-year title-year-2023'>2023</span>
            </div>
          </div>

          <img
            data-aos='zoom-in'
            // data-aos-delay='700'
            className='roadmap-arrow'
            alt='roadmap-arrow'
            src={
              windowDimensions.width > 767.5
                ? images.pcArrow
                : images.mobileArrow
            }
          />

          <div
            className='box-month-wrapper'
            style={{
              backgroundImage: `url(${
                windowDimensions.width > 767.5
                  ? images.pcTimeBoxAug2023
                  : images.mobileTimeBoxAug2023
              })`,
            }}
            data-aos={windowDimensions.width > 767.5 ? 'fade-left' : 'fade-up'}
            // data-aos-delay={windowDimensions.width > 767.5 ? '700' : '600'}
          >
            <div
              className='box-month'
              data-aos={
                windowDimensions.width > 767.5 ? 'fade-left' : 'fade-up'
              }
              // data-aos-delay={windowDimensions.width > 767.5 ? '600' : '300'}
            >
              <div className='bg-month yellow'></div>
              <span className='text yellow'>
                {t('roadmap.title2023Second.month')}
              </span>
              <span className='title-year title-year-2023-second'>2023</span>
              <div className='content-year content-year-2023-second'>
                <li>{t('roadmap.title2023Second.title1')}</li>
                <li>{t('roadmap.title2023Second.title2')}</li>
                <li>{t('roadmap.title2023Second.title3')}</li>
                <li>{t('roadmap.title2023Second.title4')}</li>
              </div>
            </div>
          </div>

          <img
            data-aos='zoom-in'
            // data-aos-delay='700'
            className='roadmap-arrow'
            alt='roadmap-arrow'
            src={
              windowDimensions.width > 767.5
                ? images.pcArrow
                : images.mobileArrow
            }
          />

          <div
            className='box-month-wrapper'
            style={{
              backgroundImage: `url(${
                windowDimensions.width > 767.5
                  ? images.pcTimeBoxFeb2024
                  : images.mobileTimeBoxFeb2024
              })`,
            }}
            data-aos={windowDimensions.width > 767.5 ? 'fade-left' : 'fade-up'}
            // data-aos-delay={windowDimensions.width > 767.5 ? '800' : '700'}
          >
            <div
              className='box-month'
              data-aos={
                windowDimensions.width > 767.5 ? 'fade-left' : 'fade-up'
              }
              // data-aos-delay={windowDimensions.width > 767.5 ? '900' : '400'}
            >
              <div className='bg-month purple'></div>
              <span className='text purple'>
                {t('roadmap.title2024.month')}
              </span>
              <span className='title-year title-year-2024'>2024</span>
              <div className='content-year content-year-2024'>
                <li>{t('roadmap.title2024.title1')}</li>
                <li>{t('roadmap.title2024.title2')}</li>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Roadmap;
