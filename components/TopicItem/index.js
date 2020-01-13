
import {  Tag } from 'antd';
import NoAvatar from '../NoAvatar';
import Link from 'next/link';
import PropTypes from 'prop-types';
import timer from '../../utils/timer';

const TopicItem = ({topicInfo}) => {
  return (
    <div className='topic-container'>
      <div className='left-item'>
        <NoAvatar
          size={46}
          avatar={topicInfo.userAvatar}
          userName={topicInfo.userName}
        >
        </NoAvatar>
      </div>
      <div className='right-item'>
        <h1>
          <Link 
            as={`/topicDetail/${topicInfo._id}`}
            href={`/topicDetail?id=${topicInfo._id}`}>
            <a>
              {topicInfo.topicTitle}
            </a>
          
          </Link>
        </h1>
        <div className='bottom-info'>
          <Tag className='bottom-tag'>{topicInfo.categoryName}</Tag>
          <span className='info-item hide-item'>{topicInfo.praiseNum || 0}赞</span>
          <span className='hide-item'>·</span>
          <span className='info-item'>{topicInfo.userName}</span>
          <span className='hide-item'>·</span>
          <span className='info-item hide-item'>{timer(topicInfo.updateTime)}</span>
        </div>
      </div>
      <div >
        {
          topicInfo.commentNum ? <div className='comment-info-container'>
            {topicInfo.commentNum}
          </div> : <div/>
        }
      </div>
     
     
    </div>
  );
};
  
TopicItem.propTypes = {
  topicInfo: PropTypes.object
};

TopicItem.defaultProps = {
  topicInfo: {
    avatar: ''
  }
};


export default TopicItem;