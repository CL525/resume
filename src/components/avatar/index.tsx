import avatar from '@/assets/avatar.jpg';
import waves from '@/assets/wavesOpacity.svg';
import './index.scss';

export default function Avatar() {
  return (
    <div className="avatar-container">
      {/* <img className='waves' src={waves} /> */}
      <div className="name">
        柴 林
        <div className="position">资深前端开发工程师</div>
      </div>
      <div className="img">
        <img className="avatar" src={avatar} />
      </div>
    </div>
  )
}