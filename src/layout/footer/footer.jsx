import './footer.scss';
import { Container } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const images = {
    chainos: process.env.PUBLIC_URL + '/images/footer/chainos.png',
    // cuckookoo: 'https://d2lonqwqrbh3kq.cloudfront.net/header/ckksite-logo-header.png',
    cuckookoo: '',
  };
  const { t } = useTranslation();

  return (
    <div className='footer'>
      <Container>
        <div data-aos='fade-right' className='logo'>
          <div className='logo-cuckookoo'>
            <a href=''>
              <img src={images.cuckookoo} alt='logo-cuckookoo' />
            </a>
          </div>

          <div data-aos='fade-left' className='logo-chainos'>
            <a href=''>
              <img src={images.chainos} alt='logo-chainos' />
            </a>
          </div>
        </div>

        <div
          className='contract'
          data-aos-anchor-placement='top-bottom'
          data-aos='fade-up'
        >
          <span className='title-main-footer'>{t('footer.titleMain')}</span>

          <div className='title-box'>
            <FontAwesomeIcon className='icon icon-local' icon={faLocationDot} />
            <span className='title'>{t('footer.address')}</span>
          </div>

          <div className='title-box'>
            <FontAwesomeIcon className='icon icon-mail' icon={faEnvelope} />
            <span className='title'>metalish@cuckookoo.vn</span>
          </div>

          <div className='title-box'>
            <FontAwesomeIcon className='icon icon-phone' icon={faPhone} />
            <span className='title'>0336111248</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
