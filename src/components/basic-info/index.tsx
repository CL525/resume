import Icon from '@/components/icon';
import { BasicInfoData } from './data';
import { map } from 'lodash';
import ModuleContainer from '../container';
import './index.scss';

const iconMapper: Record<string, string> = {
  age: 'icon-park-solid:birthday-cake',
  email: 'eva:email-fill',
  mobile: 'fa:mobile',
  location: 'ion:location',
  college: 'maki:college',
  period: 'ic:baseline-work-history'
}

export default function BasicInfo () {
  return (
    <ModuleContainer title="基础信息">
      <div className="basic_info">
        {map(BasicInfoData, (data, key) => {
          return (
            <div className="basic_info-item" key={key}>
              <Icon className="icon" name={iconMapper[key]} />
              {/* <span>{data?.title}:</span> */}
              <span>{data?.value}</span>
            </div>
          )
        })}
      </div>
    </ModuleContainer>
  )
}