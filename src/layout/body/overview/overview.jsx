import './overview.styles.scss';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';
import OverviewModel from './model/overview-model';

const Overview = ({ windowDimensions }) => {
  const { t } = useTranslation();

  const images = {
    bgKeyFeatures: process.env.PUBLIC_URL + '/images/overview/bg-overview.jpg',
    viewButton: process.env.PUBLIC_URL + '/images/overview/fish-eye-button.png',
  };

  return (
    <div
      className='overview'
      style={{
        backgroundImage: `url(${images.bgKeyFeatures})`,
      }}
    >
      <div className='overview-overlay'></div>
      <Container>
        <span className='title-main' data-aos='fade-up'>
          METALISH
        </span>
        <>
          <div className='content' data-aos='fade-up'>
            <p>{t('overview.content_1.txt')}</p>
            <p>{t('overview.content_2.txt')}</p>
            <p>{t('overview.content_3.txt')}</p>
            <p>{t('overview.content_4.txt')}</p>
            <p>{t('overview.content_5.txt')}</p>
          </div>
          <div className='model' data-aos='fade-up'>
            <OverviewModel />
          </div>
        </>
      </Container>
    </div>
  );
};

export default Overview;
