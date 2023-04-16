import './core-skills.styles.scss';
import { useTranslation } from 'react-i18next';
import { url } from '../../../url';
import { useState } from 'react';

const CoreSkills = ({ windowDimensions }) => {
  const { t } = useTranslation();

  const images = {
    bgKeyFeatures: process.env.PUBLIC_URL + '/images/overview/bg-overview.jpg',
    frame: process.env.PUBLIC_URL + '/images/explore/order-service/frame.png',
    listening: `${url}/img/lp-core-skills/listening.png`,
    speaking: `${url}/img/lp-core-skills/speaking-1.png`,
    vocabulary: `${url}/img/lp-core-skills/vocabulary-1.png`,
    mouthShape: `${url}/img/lp-core-skills/mouthshape.png`,
    exitButton: process.env.PUBLIC_URL + '/images/core-skills/exit-button.png',
  };

  const [isViewSkillInfo, setIsViewSkillInfo] = useState(false);
  const [activeSkill, setActiveSkill] = useState(false);

  const handleActiveSkill = (skill) => {
    console.log(skill);
    setIsViewSkillInfo(true);
    setActiveSkill(skill);
  };

  const handleCloseSkill = () => {
    setIsViewSkillInfo(false);
  };

  return (
    <div
      className='core-skills'
      style={{ backgroundImage: `url(${images.bgKeyFeatures})` }}
    >
      <div className='core-skills-overlay'></div>
      <span className='title-main' data-aos='fade-up'>
        {t('core-skills.title.lbl')}
      </span>

      {!isViewSkillInfo ? (
        <div className='core-skills-box'>
          <div
            className='core-skills-item listening'
            style={{ backgroundImage: `url(${images.frame})` }}
            onClick={() => handleActiveSkill('listening')}
          >
            <span>{t('core-skills.listening.lbl')}</span>
          </div>
          <div
            className='core-skills-item speaking'
            style={{ backgroundImage: `url(${images.frame})` }}
            onClick={() => handleActiveSkill('speaking')}
          >
            <span>{t('core-skills.speaking.lbl')}</span>
          </div>
          <div
            className='core-skills-item vocabulary'
            style={{ backgroundImage: `url(${images.frame})` }}
            onClick={() => handleActiveSkill('vocabulary')}
          >
            <span>{t('core-skills.vocabulary.lbl')}</span>
          </div>
          <div
            className='core-skills-item mouth-shape'
            style={{ backgroundImage: `url(${images.frame})` }}
            onClick={() => handleActiveSkill('mouthShape')}
          >
            <span onClick={() => handleActiveSkill('mouthShape')}>
              {t('core-skills.mouth-shape.lbl')}
            </span>
          </div>
        </div>
      ) : (
        <div className='core-skills-box-left'>
          <div
            className={
              activeSkill === 'listening'
                ? 'core-skills-item listening active'
                : 'core-skills-item listening'
            }
            style={{ backgroundImage: `url(${images.frame})` }}
            onClick={() => handleActiveSkill('listening')}
          >
            <span>{t('core-skills.listening.lbl')}</span>
          </div>

          <div
            className={
              activeSkill === 'speaking'
                ? 'core-skills-item speaking active'
                : 'core-skills-item speaking'
            }
            style={{ backgroundImage: `url(${images.frame})` }}
            onClick={() => handleActiveSkill('speaking')}
          >
            <span>{t('core-skills.speaking.lbl')}</span>
          </div>
          <div
            className={
              activeSkill === 'vocabulary'
                ? 'core-skills-item vocabulary active'
                : 'core-skills-item vocabulary'
            }
            style={{ backgroundImage: `url(${images.frame})` }}
            onClick={() => handleActiveSkill('vocabulary')}
          >
            <span>{t('core-skills.vocabulary.lbl')}</span>
          </div>
          <div
            className={
              activeSkill === 'mouthShape'
                ? 'core-skills-item mouth-shape active'
                : 'core-skills-item mouth-shape'
            }
            style={{ backgroundImage: `url(${images.frame})` }}
            onClick={() => handleActiveSkill('mouthShape')}
          >
            <span>{t('core-skills.mouth-shape.lbl')}</span>
          </div>
          <div className='overlay'>
            <img src={images[activeSkill]} alt={activeSkill} />
            <div
              className='exit-btn'
              style={{ backgroundImage: `url(${images.exitButton})` }}
              onClick={handleCloseSkill}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoreSkills;
