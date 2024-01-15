import { map } from 'lodash';
import { Progress } from 'antd';
import ModuleContainer from '../container';
import { skillsData } from './data';
import './index.scss';

const twoColors = { '0%': '#108ee9', '100%': '#87d068' };

export default function() {
  return (
    <ModuleContainer title="技能点">
      <div className="skills_container">
        {map(skillsData, (data, k) => {
          return (
            <div key={k} className="skills_container-item">
              <div className="name">{k}:</div>
              <Progress percent={data} strokeColor={twoColors} showInfo={false} />
            </div>
          )
        })}
      </div>
    </ModuleContainer>
  )
}