import { useEffect, useRef, useState } from 'react';
import './development-team.scss';
import { Container } from 'react-bootstrap';
import DevelopmentTeamMember from '../../../components/development-team-member/development-team-member';
import { useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { url } from '../../../url';

const DevelopmentTeam = ({ windowDimensions }) => {
  // data development team
  // ${url}/img/lp-core-member/lp-core-member-1.png
  const urlImage =
    `${url}/img/lp-core-member/lp-core-member-`;

  const images = {
    next: process.env.PUBLIC_URL + '/images/development-team/right-button.png',
    pre: process.env.PUBLIC_URL + '/images/development-team/left-button.png',
  };

  const memberTeam = [
    {
      name: 'Paul Pham',
      position: 'Product Owner',
      image: urlImage + '1.png',
    },
    {
      name: 'Felix Nguyen',
      position: 'Executive',
      image: urlImage + '2.png',
    },
    {
      name: 'Tony Quach',
      position: 'Executive',
      image: urlImage + '3.png',
    },
    {
      name: 'Julie Tran',
      position: 'Content Advisor Leader',
      image: urlImage + '4.png',
    },
    {
      name: 'Joy Le',
      position: 'Artist Manager',
      image: urlImage + '5.png',
    },
    {
      name: 'Johnny Le',
      position: 'Developer Leader',
      image: urlImage + '6.png',
    },
    {
      name: 'Mr.Kan',
      position: 'AI Leader',
      image: urlImage + '7.png',
    },
    {
      name: 'Irene Le',
      position: 'Business Analyst',
      image: urlImage + '8.png',
    },
    {
      name: 'Henry Ho',
      position: 'Solution Architect',
      image: urlImage + '9.png',
    },
    {
      name: 'Mr.Thinh',
      position: 'Blockchain Leader',
      image: urlImage + '10.png',
    },
    {
      name: 'Ivy Pham',
      position: 'Quality Control Leader',
      image: urlImage + '11.png',
    },
    {
      name: 'Leon Nguyen',
      position: 'Senior Artist',
      image: urlImage + '12.png',
    },
    {
      name: 'Finn Le',
      position: 'Developer',
      image: urlImage + '13.png',
    },
    {
      name: 'Leo Dinh',
      position: 'Developer',
      image: urlImage + '14.png',
    },
    {
      name: 'Keng Nguyen',
      position: 'Developer',
      image: urlImage + '15.png',
    },
    {
      name: 'Hagi Hoang',
      position: 'English Teacher',
      image: urlImage + '16.png',
    },
    {
      name: 'Alex Tran',
      position: 'Developer',
      image: urlImage + '17.png',
    },
    {
      name: 'Gigi Le',
      position: 'Translator',
      image: urlImage + '18.png',
    },
  ];

  // check width set data slide
  const checkWidthWindowSetSlideData = () => {
    let slideDataTemp = {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
    };

    if (windowDimensions.width > 1399.5) {
      slideDataTemp.slidesPerView = 4;
      slideDataTemp.spaceBetween = 30;
      slideDataTemp.slidesPerGroup = 4;
    } else if (windowDimensions.width > 991.5) {
      slideDataTemp.slidesPerView = 3;
      slideDataTemp.spaceBetween = 15;
      slideDataTemp.slidesPerGroup = 3;
    } else {
      slideDataTemp.slidesPerView = 2;
      slideDataTemp.spaceBetween = 15;
      slideDataTemp.slidesPerGroup = 2;
    }
    return slideDataTemp;
  };

  const [slideData, setSlideData] = useState(checkWidthWindowSetSlideData);

  useEffect(() => {
    setSlideData(checkWidthWindowSetSlideData); // eslint-disable-next-line
  }, [windowDimensions.width]);

  // translation
  const { t } = useTranslation();

  // button slide
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className='development-team'>
      <span data-aos='fade-up' className='title-main'>
        {t('developmentTeam.titleMain')}
      </span>

      <Container>
        <div className='box-slide' data-aos='fade-up'>
          <Swiper
            slidesPerView={slideData.slidesPerView}
            spaceBetween={slideData.spaceBetween}
            slidesPerGroup={slideData.slidesPerGroup}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            preventClicks={true}
            loop={true}
            loopFillGroupWithBlank={false}
            pagination={{
              clickable: true,
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
            <div className='box-member'>
              {memberTeam.map((element, index) => (
                <SwiperSlide key={index}>
                  <DevelopmentTeamMember
                    image={element.image}
                    name={element.name}
                    position={element.position}
                  />
                </SwiperSlide>
              ))}
            </div>

            <div
              ref={prevRef}
              data-aos='fade-right'
              className='icon-slide icon-next hidden-mobile'
            >
              <img className='icon-next' src={images.pre} alt='pre' />
            </div>

            <div
              ref={nextRef}
              data-aos='fade-left'
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

export default DevelopmentTeam;
