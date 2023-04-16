import './key-features.styles.scss';
import { useTranslation } from 'react-i18next';
import KeyFeaturesItem from './key-features-item/key-features-item';
import { useState } from 'react';

const KeyFeatures = ({ windowDimensions }) => {
  const { t } = useTranslation();

  const images = {
    studyingEnglishIcon:
      process.env.PUBLIC_URL + '/images/key-features/studying-english.png',
    graphics: process.env.PUBLIC_URL + '/images/key-features/graphics.png',
    connect: process.env.PUBLIC_URL + '/images/key-features/connect.png',
    customizedClassroom:
      process.env.PUBLIC_URL + '/images/key-features/customized-classroom.png',
    practicalEnglish:
      process.env.PUBLIC_URL + '/images/key-features/practical-english.png',
    ai: process.env.PUBLIC_URL + '/images/key-features/ai.png',
    aiInAdvertising:
      process.env.PUBLIC_URL + '/images/key-features/ai-in-advertising.png',
    miniGames: process.env.PUBLIC_URL + '/images/key-features/mini-games.png',
    rewards: process.env.PUBLIC_URL + '/images/key-features/rewards.png',
    bestChoice: process.env.PUBLIC_URL + '/images/key-features/best-choice.png',
    review: process.env.PUBLIC_URL + '/images/key-features/review.png',
    frame: process.env.PUBLIC_URL + '/images/key-features/frame.png',
  };

  const keyFeatures = [
    {
      title: `${t('key-features.studying-english_title.lbl')}`,
      alt: 'studying-english',
      src: images.studyingEnglishIcon,
      content: `${t('key-features.studying-english_content.txt')}`,
      last: false,
    },
    {
      title: `${t('key-features.graphics_title.lbl')}`,
      alt: 'graphics',
      src: images.graphics,
      content: `${t('key-features.graphics_content.txt')}`,
      last: false,
    },
    {
      title: `${t('key-features.connect_title.lbl')}`,
      alt: 'connect',
      src: images.connect,
      content: `${t('key-features.connect_content.txt')}`,
      last: false,
    },
    {
      title: `${t('key-features.customized-classroom_title.lbl')}`,
      alt: 'customized-classroom',
      src: images.customizedClassroom,
      content: `${t('key-features.customized-classroom_content.txt')}`,
      last: true,
    },
    {
      title: `${t('key-features.practical-english_title.lbl')}`,
      alt: 'practical-english',
      src: images.practicalEnglish,
      content: `${t('key-features.practical-english_content.txt')}`,
      last: false,
    },
    {
      title: `${t('key-features.ai-technology_title.lbl')}`,
      alt: 'ai-technology',
      src: images.ai,
      content: `${t('key-features.ai-technology_content.txt')}`,
      last: false,
    },
    {
      title: `${t('key-features.ai-in-advertising_title.lbl')}`,
      alt: 'ai-in-advertising',
      src: images.aiInAdvertising,
      content: `${t('key-features.ai-in-advertising_content.txt')}`,
      last: true,
    },
    {
      title: `${t('key-features.mini-games_title.lbl')}`,
      alt: 'mini-games',
      src: images.miniGames,
      content: `${t('key-features.mini-games_content.txt')}`,
      last: false,
    },
    {
      title: `${t('key-features.rewards_title.lbl')}`,
      alt: 'rewards',
      src: images.rewards,
      content: `${t('key-features.rewards_content.txt')}`,
      last: false,
    },
    {
      title: `${t('key-features.best-choice_title.lbl')}`,
      alt: 'best-choice',
      src: images.bestChoice,
      content: `${t('key-features.best-choice_content.txt')}`,
      last: false,
    },
    {
      title: `${t('key-features.review_title.lbl')}`,
      alt: 'review',
      src: images.review,
      content: `${t('key-features.review_content.txt')}`,
      last: true,
    },
  ];

  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');

  const handleHover = (title, content) => {
    setTitle(title);
    setContent(content);
  };

  return (
    <div className='key-features'>
      <span className='title-main' data-aos='fade-up'>
        {t('key-features.title.lbl')}
      </span>

      <div className='key-features-box'>
        {windowDimensions.width < 767.5 ? (
          <ul className='circle-container' data-aos='zoom-in-up'>
            {keyFeatures.map((element, index) => (
              <>
                <li
                  key={index}
                  onMouseEnter={() =>
                    handleHover(element.title, element.content)
                  }
                >
                  <img alt={element.alt} src={element.src} />
                  <span>{element.title}</span>
                </li>
              </>
            ))}
            <div
              className='overlay'
              style={{ backgroundImage: `url(${images.frame})` }}
            >
              <div className='title'>{title}</div>
              <div className='content'>{content}</div>
            </div>
          </ul>
        ) : (
          <>
            <div className='content-wrapper' data-aos='zoom-in-up'>
              <div className='content1'>
                {keyFeatures.map((element, index) => (
                  <>
                    {index < 4 ? (
                      <>
                        <KeyFeaturesItem
                          alt={element.alt}
                          src={element.src}
                          title={element.title}
                          content={element.content}
                          last={element.last}
                        />
                      </>
                    ) : null}
                  </>
                ))}
              </div>
              <div className='content2'>
                {keyFeatures.map((element, index) => (
                  <>
                    {index < 7 && index >= 4 ? (
                      <>
                        <KeyFeaturesItem
                          alt={element.alt}
                          src={element.src}
                          title={element.title}
                          content={element.content}
                          last={element.last}
                        />
                      </>
                    ) : null}
                  </>
                ))}
              </div>
              <div className='content3'>
                {keyFeatures.map((element, index) => (
                  <>
                    {index >= 7 && index < 11 ? (
                      <>
                        <KeyFeaturesItem
                          alt={element.alt}
                          src={element.src}
                          title={element.title}
                          content={element.content}
                          last={element.last}
                        />
                      </>
                    ) : null}
                  </>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default KeyFeatures;
