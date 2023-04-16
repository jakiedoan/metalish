import { useState } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { url } from '../../../../url';
import './order-service.scss';

const OrderService = ({ windowDimensions }) => {
  const { t, i18n } = useTranslation();

  const images = {
    book: process.env.PUBLIC_URL + '/images/explore/order-service/book.png',
    drink: process.env.PUBLIC_URL + '/images/explore/order-service/drink.png',
    food1: process.env.PUBLIC_URL + '/images/explore/order-service/food-1.png',
    food2: process.env.PUBLIC_URL + '/images/explore/order-service/food-2.png',
    food3: process.env.PUBLIC_URL + '/images/explore/order-service/food-3.png',
    frame: process.env.PUBLIC_URL + '/images/explore/order-service/frame.png',
    orderEn: `${url}/img/lp-explore-tour/order-service/order-frame-en-1.png`,
    orderKo: `${url}/img/lp-explore-tour/order-service/order-frame-ko-1.png`,
    orderVi: `${url}/img/lp-explore-tour/order-service/order-frame-vi-1.png`,
  };

  const [orderFrame, setOrderFrame] = useState('');

  useEffect(() => {
    if (i18n.language === 'en') {
      setOrderFrame(images.orderEn);
    } else if (i18n.language === 'ko') {
      setOrderFrame(images.orderKo);
    } else if (i18n.language === 'vi') {
      setOrderFrame(images.orderVi);
    }
  }, [i18n.language]);

  return (
    <div className='order-service'>
      <span className='title-main' data-aos='fade-up'>
        {t('orderService.titleMain')}
      </span>

      <span className='description' data-aos='fade-up'>
        {t('orderService.titleDes')}
      </span>

      <div className='order-service-box'>
        <div className='overlay-box'>
          <div
            className='overlay'
            style={{ backgroundImage: `url(${orderFrame})` }}
          ></div>
        </div>

        <div
          className='item-service book'
          data-aos='fade-right'
          style={{ backgroundImage: `url(${images.frame})` }}
        >
          <img src={images.book} alt='book' />
        </div>

        <div
          className='item-service drink'
          data-aos='fade-up-right'
          style={{ backgroundImage: `url(${images.frame})` }}
        >
          <img src={images.drink} alt='drink' />
        </div>

        <div
          className='item-service food-1'
          data-aos='fade-left'
          style={{ backgroundImage: `url(${images.frame})` }}
        >
          <img src={images.food1} alt='food1' />
        </div>

        <div
          className='item-service food-2'
          data-aos='fade-up-left'
          style={{ backgroundImage: `url(${images.frame})` }}
        >
          <img src={images.food2} alt='food2' />
        </div>

        <div
          className='item-service food-3'
          data-aos='fade-up'
          style={{ backgroundImage: `url(${images.frame})` }}
        >
          <img src={images.food3} alt='food3' />
        </div>
      </div>
    </div>
  );
};

export default OrderService;
