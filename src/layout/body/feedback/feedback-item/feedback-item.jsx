import './feedback-item.styles.scss';

function _1Star() {
  return (
    <>
      <span class='fa fa-star'></span>
      <span class='fa fa-star unchecked'></span>
      <span class='fa fa-star unchecked'></span>
      <span class='fa fa-star unchecked'></span>
      <span class='fa fa-star unchecked'></span>
    </>
  );
}

function _2Star() {
  return (
    <>
      <span class='fa fa-star'></span>
      <span class='fa fa-star'></span>
      <span class='fa fa-star unchecked'></span>
      <span class='fa fa-star unchecked'></span>
      <span class='fa fa-star unchecked'></span>
    </>
  );
}

function _3Star() {
  return (
    <>
      <span class='fa fa-star'></span>
      <span class='fa fa-star'></span>
      <span class='fa fa-star'></span>
      <span class='fa fa-star unchecked'></span>
      <span class='fa fa-star unchecked'></span>
    </>
  );
}

function _4Star() {
  return (
    <>
      <span class='fa fa-star'></span>
      <span class='fa fa-star'></span>
      <span class='fa fa-star'></span>
      <span class='fa fa-star'></span>
      <span class='fa fa-star unchecked'></span>
    </>
  );
}

function _5Star() {
  return (
    <>
      <span class='fa fa-star'></span>
      <span class='fa fa-star'></span>
      <span class='fa fa-star'></span>
      <span class='fa fa-star'></span>
      <span class='fa fa-star'></span>
    </>
  );
}

const FeedbackItem = ({ src, grade, name, summary, rated, comment }) => {
  const images = {
    commentBox: process.env.PUBLIC_URL + '/images/feedback/comment-box.png',
  };

  return (
    <div className='feedback-item'>
      <div
        className='feedback-item-box'
        style={{ backgroundImage: `url(${images.commentBox})` }}
      >
        <div
          className='avatar'
          style={{
            backgroundImage: `url(${src})`,
          }}
        ></div>
        <h4 className='user-name'>{name}</h4>
        <span className='user-grade'>{grade}</span>
        <h2 className='user-summary-title'>{summary}</h2>
        <h2 className='user-rated'>
          {rated === 1 ? (
            <_1Star />
          ) : rated === 2 ? (
            <_2Star />
          ) : rated === 3 ? (
            <_3Star />
          ) : rated === 4 ? (
            <_4Star />
          ) : rated === 5 ? (
            <_5Star />
          ) : null}
        </h2>
        <span className='user-comment'>{comment}</span>
      </div>
    </div>
  );
};

export default FeedbackItem;
