import Icon from '@/components/icon';
import ModuleContainer from '../container';
import { educationalData } from './data';
import './index.scss';

export default function() {
  return (
    <ModuleContainer title="教育经历">
      <div className="educational_container">
        <Icon className="icon" name={'maki:college'} />
        <span className="">滁州学院</span>
        <span className="educational_container-title">本科</span>
        <span className="educational_container-title grow">电子信息工程</span>
        <span className="educational_container-time">2012.09 - 2016.06</span>
      </div>
    </ModuleContainer>
  )
}