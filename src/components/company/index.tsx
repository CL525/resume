import { useMemo, useState } from 'react';
import { map } from 'lodash';
import { Timeline } from 'antd';
import { CompanyInfo } from './data';
import ModuleContainer from '../container';
import './index.scss';

export default function() {
  const [mapper, setMapper] = useState<any[]>([]);

  useMemo(() => {
    const m = map(CompanyInfo, (data, k) => {
      return {
        position: 'right',
        children: (
          <div className="company_item" key={k}>
          {/* name + period */}
          <div className='top'>
            <div className='name'> {data.name}</div>
            <div className='period'>{data.period}</div>
          </div>
          {/* position */}
          <div className='position'>
            {data.position}
          </div>
          {/* desc */}
          <div className='desc'>
            <ul>
              {map(data.desc, (d, i) => {
                return (
                  <li key={i}>{d}</li>
                )
              })}
            </ul>
          </div>
        </div>
        )
      }
    })
    setMapper(m);
  }, [])

  return (
    <ModuleContainer title="工作经验">
      <div className="company">
        <Timeline
          mode='left'
          items={mapper}
        />
      </div>
    </ModuleContainer>
  )
}