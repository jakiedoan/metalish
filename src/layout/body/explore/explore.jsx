import './explore.scss';
import { useTranslation } from 'react-i18next';

const Explore = ({ windowDimensions, statusExplore, changeStatusExplore }) => {
  const images = {
    bgExplore: process.env.PUBLIC_URL + '/images/explore/explore-button.gif',
    bgExploreCollapse:
      process.env.PUBLIC_URL + '/images/explore/collapse-button.png',
  };

  const { t } = useTranslation();

  return (
    <div className='explore'>
      {statusExplore ? (
        <div
          className='button-explore-collapse'
          data-aos='fade-up'
          onClick={() => changeStatusExplore(!statusExplore)}
        >
          <img src={images.bgExploreCollapse} alt='bg-explore' />

          {/* <span className="title-explore">{t("explore.titleMain")}</span> */}
        </div>
      ) : (
        <div
          className='button-explore'
          data-aos='fade-up'
          onClick={() => changeStatusExplore(!statusExplore)}
        >
          <img src={images.bgExplore} alt='bg-explore' />

          <span className='title-explore'>{t('explore.titleMain')}</span>
        </div>
      )}
    </div>
  );
};

export default Explore;
