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
    <ModuleContainer title="个人优势">
      <div className="company">
        <Timeline
          mode='left'
          items={mapper}
        />
      </div>
    </ModuleContainer>
  )
}