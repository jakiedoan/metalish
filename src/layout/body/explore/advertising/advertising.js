import './advertising.scss';
import { useTranslation } from 'react-i18next';
import { url } from '../../../../url';

const Advertising = ({ windowDimensions }) => {
  const { t } = useTranslation();
  const images = {
    bgAdvertising: `${url}/img/lp-explore-tour/advertising/billboard-advertising-web-1.png`,
    bgAdvertisingMobile: `${url}/img/lp-explore-tour/advertising/billboard-advertising-mobile-1.png`,
  };

  return (
    <div className='advertising'>
      <span className='title-main' data-aos='fade-up'>
        {t('advertising.titleMain')}
      </span>

      <div
        className='advertising-image'
        style={{
          backgroundImage: `url(${
            windowDimensions.width > 767.5
              ? images.bgAdvertising
              : images.bgAdvertisingMobile
          })`,
        }}
      >
        <span
          className='title title-1'
          data-aos-anchor-placement='bottom-bottom'
          data-aos='zoom-in'
        >
          {t('advertising.title1')}
        </span>

        <span
          className='title title-2'
          data-aos-anchor-placement='bottom-bottom'
          data-aos='zoom-in'
        >
          {t('advertising.title2')}
        </span>
      </div>
    </div>
  );
};

export default Advertising;
