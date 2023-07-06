import './video-proposal.styles.scss';

const VideoProposal = () => {
  const srcDefault = process.env.PUBLIC_URL + '/video/video-proposal.mp4';

  return (
    <div className='video-proposal' id='video-introduce'>
      <video
        autoPlay
        muted
        loop
        className='video'
        // onError={({ currentTarget }) => {
        //   currentTarget.onerror = null;
        //   currentTarget.src = srcError;
        // }}
      >
        <source src={srcDefault} type='video/mp4' />
      </video>
    </div>
  );
};

export default VideoProposal;
