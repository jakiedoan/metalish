import { useEffect, useRef, useState } from 'react';
import './feedback.styles.scss';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import FeedbackItem from './feedback-item/feedback-item';

const Feedback = ({ windowDimensions }) => {
  // translation
  const { t } = useTranslation();

  const images = {
    next: process.env.PUBLIC_URL + '/images/development-team/right-button.png',
    pre: process.env.PUBLIC_URL + '/images/development-team/left-button.png',
    commentBox: process.env.PUBLIC_URL + '/images/feedback/comment-box.png',
    commentAvatar:
      process.env.PUBLIC_URL + '/images/feedback/comment-avatar.png',
    avatar1: process.env.PUBLIC_URL + '/images/feedback/avatar-01.png',
    avatar2: process.env.PUBLIC_URL + '/images/feedback/avatar-02.png',
    avatar3: process.env.PUBLIC_URL + '/images/feedback/avatar-03.png',
    avatar4: process.env.PUBLIC_URL + '/images/feedback/avatar-04.png',
    avatar5: process.env.PUBLIC_URL + '/images/feedback/avatar-05.png',
    avatar6: process.env.PUBLIC_URL + '/images/feedback/avatar-06.png',
    avatar7: process.env.PUBLIC_URL + '/images/feedback/avatar-07.png',
    avatar8: process.env.PUBLIC_URL + '/images/feedback/avatar-08.png',
  };

  const comments = [
    {
      name: `${t('feedback.user-1-name.txt')}`,
      grade: `${t('feedback.user-1-description.txt')}`,
      avatar: images.avatar1,
      summaryComment: `${t('feedback.user-1-summary-comment.lbl')}`,
      rated: 5,
      comment: `${t('feedback.user-1-full-comment.txt')}`,
    },
    {
      name: `${t('feedback.user-2-name.txt')}`,
      grade: `${t('feedback.user-2-description.txt')}`,
      avatar: images.avatar2,
      summaryComment: `${t('feedback.user-2-summary-comment.lbl')}`,
      rated: 5,
      comment: `${t('feedback.user-2-full-comment.txt')}`,
    },
    {
      name: `${t('feedback.user-3-name.txt')}`,
      grade: `${t('feedback.user-3-description.txt')}`,
      avatar: images.avatar3,
      summaryComment: `${t('feedback.user-3-summary-comment.lbl')}`,
      rated: 4,
      comment: `${t('feedback.user-3-full-comment.txt')}`,
    },
    {
      name: `${t('feedback.user-4-name.txt')}`,
      grade: `${t('feedback.user-4-description.txt')}`,
      avatar: images.avatar4,
      summaryComment: `${t('feedback.user-4-summary-comment.lbl')}`,
      rated: 5,
      comment: `${t('feedback.user-4-full-comment.txt')}`,
    },
    {
      name: `${t('feedback.user-5-name.txt')}`,
      grade: `${t('feedback.user-5-description.txt')}`,
      avatar: images.avatar5,
      summaryComment: `${t('feedback.user-5-summary-comment.lbl')}`,
      rated: 4,
      comment: `${t('feedback.user-5-full-comment.txt')}`,
    },
    {
      name: `${t('feedback.user-6-name.txt')}`,
      grade: `${t('feedback.user-6-description.txt')}`,
      avatar: images.avatar6,
      summaryComment: `${t('feedback.user-6-summary-comment.lbl')}`,
      rated: 5,
      comment: `${t('feedback.user-6-full-comment.txt')}`,
    },
    {
      name: `${t('feedback.user-7-name.txt')}`,
      grade: `${t('feedback.user-7-description.txt')}`,
      avatar: images.avatar7,
      summaryComment: `${t('feedback.user-7-summary-comment.lbl')}`,
      rated: 3,
      comment: `${t('feedback.user-7-full-comment.txt')}`,
    },
    {
      name: `${t('feedback.user-8-name.txt')}`,
      grade: `${t('feedback.user-8-description.txt')}`,
      avatar: images.avatar8,
      summaryComment: `${t('feedback.user-8-summary-comment.lbl')}`,
      rated: 4,
      comment: `${t('feedback.user-8-full-comment.txt')}`,
    },
  ];

  // check width set data slide
  const checkWidthWindowSetSlideData = () => {
    let slideDataTemp = {
      slidesPerView: 2,
      spaceBetween: 25,
      slidesPerGroup: 2,
    };

    if (windowDimensions.width > 1399.5) {
      slideDataTemp.slidesPerView = 2;
      slideDataTemp.spaceBetween = 25;
      slideDataTemp.slidesPerGroup = 2;
    } else if (windowDimensions.width > 991.5) {
      slideDataTemp.slidesPerView = 2;
      slideDataTemp.spaceBetween = 15;
      slideDataTemp.slidesPerGroup = 2;
    } else {
      slideDataTemp.slidesPerView = 1;
      slideDataTemp.spaceBetween = 15;
      slideDataTemp.slidesPerGroup = 1;
    }
    return slideDataTemp;
  };

  const [slideData, setSlideData] = useState(checkWidthWindowSetSlideData);

  useEffect(() => {
    setSlideData(checkWidthWindowSetSlideData); // eslint-disable-next-line
  }, [windowDimensions.width]);

  // button slide
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className='feedback'>
      <span className='title-main' data-aos='fade-up'>
        {t('feedback.title.lbl')}
      </span>

      <Container>
        <div className='box-slide' data-aos='fade-up'>
          <Swiper
            slidesPerView={slideData.slidesPerView}
            spaceBetween={slideData.spaceBetween}
            slidesPerGroup={slideData.slidesPerGroup}
            preventClicks={true}
            loop={true}
            loopFillGroupWithBlank={false}
            pagination={{
              clickable: true,
              // dynamicBullets: true,
            }}
            modules={[Pagination, Navigation]}
            className='mySwiper'
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            <div className='box-feedback'>
              {comments.map((element, index) => (
                <SwiperSlide key={index}>
                  <FeedbackItem
                    src={element.avatar}
                    name={element.name}
                    grade={element.grade}
                    summary={element.summaryComment}
                    rated={element.rated}
                    comment={element.comment}
                  />
                </SwiperSlide>
              ))}
            </div>
            <div
              ref={prevRef}
              // data-aos='fade-right'
              className='icon-slide icon-next hidden-mobile'
            >
              <img className='icon-next' src={images.pre} alt='pre' />
            </div>
            <div
              ref={nextRef}
              // data-aos='fade-left'
              className='icon-slide icon-pre hidden-mobile'
            >
              <img src={images.next} alt='next' />
            </div>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Feedback;
