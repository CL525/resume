import { map } from "lodash";
import { projectData } from "./data";
import ModuleContainer from '../container';
import './index.scss';

export default function() {
  return (
    <ModuleContainer title="项目经验">
      <div className="project_container">
        {map(projectData, (data, k) => {
            return (
              <div className="project_container-item" key={k}>
                <div className='name'> {data.name} 
                  <span className="title">{data.title}</span>
                  <span className="time">{data.time}</span>
                </div>
                <div className='skills'>
                  <div className='title'>使用技术：</div>
                  {map(data.skills, (s, i) => {
                    return (
                      <div className="skills-item" key={i}>{s}</div>
                    )
                  })}
                </div>
                <div className='desc mt2'>
                  <div>项目描述：</div>
                  <ul>
                    {map(data.desc, (d, i) => {
                      return (
                        <li key={i}>{d}</li>
                      )
                    })}
                  </ul>
                </div>
                <div className='desc'>
                  <div>项目职责：</div>
                  <ul>
                    {map(data.work, (d, i) => {
                      return (
                        <li key={i}>{d}</li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            )
          })}
      </div>
    </ModuleContainer>
  )
}