import './tour.scss';
import { useEffect } from 'react';
import Carousel5Enum from '../../../../enum/carousel-slide-animation/carousel5.enum';
import Carousel7Enum from '../../../../enum/carousel-slide-animation/carousel7.enum';
import { useTranslation } from 'react-i18next';
import { url } from '../../../../url';

const Tour = ({ windowDimensions }) => {
  const { t } = useTranslation();

  const images = [
    {
      slide:
        `${url}/img/lp-explore-tour/basketball-court.gif`,
    },
    {
      slide:
        `${url}/img/lp-explore-tour/football-pitch.gif`,
    },
    {
      slide:
        `${url}/img/lp-explore-tour/school-building.gif`,
    },
    {
      slide:
        `${url}/img/lp-explore-tour/self-study-classroom.gif`,
    },
    {
      slide:
        `${url}/img/lp-explore-tour/swimming-pool.gif`,
    },
  ];

  const imageFrames = {
    next: process.env.PUBLIC_URL + '/images/development-team/right-button.png',
    pre: process.env.PUBLIC_URL + '/images/development-team/left-button.png',
    bgSlide: process.env.PUBLIC_URL + '/images/explore/tour/mockup.png',
  };

  const slideCase = images.length === 5 ? Carousel5Enum : Carousel7Enum;
  let currentSlide = 0;
  let timeInterval = 6000;

  const slider = () => {
    const elementTour = document.getElementById('tour');
    const carouselSlides = elementTour.querySelectorAll('.slide'),
      count_carouselSlides = carouselSlides.length - 1,
      btnPrev = elementTour.querySelector('.prev'),
      btnNext = elementTour.querySelector('.next');

    let timeout = 400;
    let statusTouchSlide = true;

    // disabled button
    const disabledButton = () => {
      btnPrev.classList.add('disabled');
      btnNext.classList.add('disabled');
      statusTouchSlide = false;
      setTimeout(() => {
        btnNext.classList.remove('disabled');
        btnPrev.classList.remove('disabled');
        statusTouchSlide = true;
      }, timeout);
    };

    // add style animation
    const addStyle = (element, index, slides) => {
      if (slideCase[slides]) {
        element.style.transform = `scale(${slideCase[slides][index].scale}) translateX(${slideCase[slides][index].translateX}%)`;
        element.style.opacity = slideCase[slides][index].opacity;
        element.style.zIndex = slideCase[slides][index].zIndex;
      }
    };

    // animation slide
    const changeSlide = (slides, type) => {
      carouselSlides.forEach((element, index) => {
        addStyle(element, index, slides);
      });

      const carouselPagination = document.querySelectorAll('.pagination-item');
      carouselPagination.forEach((paginationItem) => {
        paginationItem.classList.remove('active');
      });
      carouselPagination[slides].classList.add('active');
    };

    // add pagination
    const addPagination = () => {
      const pagination = document.getElementById('pagination');
      let paginationItem =
        document.getElementsByClassName('pagination-item').length;
      if (!paginationItem) {
        for (let i = 0; i <= count_carouselSlides; i++) {
          pagination.innerHTML += `<div class="pagination-item"></div>`;
        }
      }
    };
    addPagination();

    // pagination click
    const elementPagination =
      document.getElementsByClassName('pagination-item');
    for (let i = 0; i < elementPagination.length; i++) {
      elementPagination[i].addEventListener('click', () => {
        currentSlide = i;
        changeSlide(i, 'pagiClick');
      });
    }

    // click next
    btnNext.addEventListener('click', () => {
      clickNext();
    });
    const clickNext = () => {
      currentSlide++;
      if (currentSlide === count_carouselSlides + 1) {
        currentSlide = 0;
      }
      changeSlide(currentSlide, 'next');

      disabledButton();
    };

    // click pre
    btnPrev.addEventListener('click', () => {
      clickPrev();
    });
    const clickPrev = () => {
      currentSlide--;
      if (currentSlide === -1) {
        currentSlide = carouselSlides.length - 1;
      }
      changeSlide(currentSlide, 'pre');

      disabledButton();
    };
    changeSlide(currentSlide, 'pre');

    // auto play
    let intervalID = null;
    const intervalManager = (flag) => {
      if (flag) {
        intervalID = setInterval(clickNext, timeInterval);
      } else {
        clearInterval(intervalID);
      }
    };
    intervalManager(true);

    // move mouse slide
    const slideClickMove = () => {
      const items = document.getElementById('slider-tour'),
        slideBox = document.getElementById('slider-box-tour');
      let posInitial, posFinal;

      // Mouse and Touch events
      items.onmousedown = dragStart;

      // Touch events
      items.addEventListener('touchstart', dragStart);
      items.addEventListener('touchend', dragEnd);
      slideBox.addEventListener('touchmove', clearAutoPlay);
      slideBox.addEventListener('touchend', openAutoPlay);
      slideBox.addEventListener('mousemove', clearAutoPlay);
      slideBox.addEventListener('mouseleave', openAutoPlay);

      function clearAutoPlay() {
        intervalManager(false);
      }

      function openAutoPlay() {
        intervalManager(true);
      }

      function dragStart(e) {
        if (statusTouchSlide) {
          e = e || window.event;
          e.preventDefault();
          if (e.clientX) {
            posInitial = e.clientX;
          } else {
            posInitial = e.touches[0].clientX;
          }
          items.onmouseup = dragEnd;
        }
      }

      function dragEnd(e) {
        if (e.clientX) {
          posFinal = e.clientX;
        } else {
          posFinal = e.changedTouches[0].clientX;
        }
        let widthElement = items.offsetWidth;

        if (posFinal >= posInitial) {
          let percent = ((posFinal - posInitial) / widthElement) * 100;
          if (percent > 12) {
            clickPrev();
          }
        } else {
          let percent = ((posInitial - posFinal) / widthElement) * 100;
          if (percent > 12) {
            clickNext();
          }
        }

        disabledButton();

        document.onmouseup = null;
        document.onmousemove = null;
      }
    };

    slideClickMove();
  };

  useEffect(() => {
    slider();
  }, []);

  return (
    <div className='tour' id='tour'>
      <div data-aos='fade-up' className='title-main'>
        {t('tour.titleMain')}
      </div>

      <div data-aos='fade-up' className='slider-box' id='slider-box-tour'>
        <div className='slider' id='slider-tour'>
          {images.map((elements, index) => (
            <div className='slide' key={index}>
              <img
                style={{ width: '95%', height: '90%' }}
                src={elements.slide}
                alt='Photo'
              />
            </div>
          ))}
          <img className='bg-phone' src={imageFrames.bgSlide} alt='bg-phone' />
        </div>

        <div className='pagination' id='pagination'></div>

        <img
          id='tour-slide-left'
          data-aos='fade-right'
          className='prev button-slide'
          src={imageFrames.pre}
          alt='pre'
        />

        <img
          data-aos='fade-left'
          id='tour-slide-right'
          className='next button-slide'
          src={imageFrames.next}
          alt='next'
        />
      </div>
    </div>
  );
};

export default Tour;
